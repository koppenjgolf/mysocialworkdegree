import { NextResponse } from "next/server";
import { LeadSchema } from "@/lib/lead-schema";
import { supabaseAdmin } from "@/lib/supabase-server";
import { redactPII } from "@/lib/utils";

export const runtime = "nodejs";

/**
 * Basic in-memory rate limit by IP (works for small deployments).
 * For scale, use Upstash/Redis or Vercel rate limiting.
 */
const windowMs = 60_000;
const maxPerWindow = 15;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const current = hits.get(ip);
  if (!current || now > current.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }
  if (current.count >= maxPerWindow) return { ok: false };
  current.count += 1;
  hits.set(ip, current);
  return { ok: true };
}

async function sendWebhook(payload: any) {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => null);
}

async function sendResendEmail(payload: any) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_NOTIFY_EMAIL;
  if (!apiKey || !to) return;

  // Minimal Resend call (no SDK dependency)
  const subject = `New lead: ${payload.level} / ${payload.modality} (${payload.state})`;
  const html = `
    <div style="font-family: ui-sans-serif, system-ui;">
      <h2>New lead</h2>
      <p><b>Name:</b> ${payload.firstName} ${payload.lastName}</p>
      <p><b>Email:</b> ${payload.email}</p>
      <p><b>Phone:</b> ${payload.phone || "-"}</p>
      <p><b>State:</b> ${payload.state}</p>
      <p><b>Level:</b> ${payload.level}</p>
      <p><b>Modality:</b> ${payload.modality}</p>
      <p><b>Start:</b> ${payload.startTimeframe}</p>
      <p><b>Page:</b> ${payload.page || "-"}</p>
      <p><b>UTM:</b> ${payload.utm_source || "-"} / ${payload.utm_medium || "-"} / ${payload.utm_campaign || "-"}</p>
    </div>
  `;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Leads <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
    }),
  }).catch(() => null);
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const json = await req.json().catch(() => null);
  const parsed = LeadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const lead = parsed.data;

  // 1) Store in Supabase (optional)
  const sb = supabaseAdmin();
  if (sb) {
    try {
      const { error } = await sb.from("leads").insert({
      first_name: lead.firstName,
      last_name: lead.lastName,
      email: lead.email,
      phone: lead.phone || null,
      state: lead.state,
      level: lead.level,
      modality: lead.modality,
      start_timeframe: lead.startTimeframe,
      consent: true,
      page: lead.page || null,
      utm_source: lead.utm_source || null,
      utm_medium: lead.utm_medium || null,
      utm_campaign: lead.utm_campaign || null,
      created_at: new Date().toISOString(),
      });
      if (error) {
        // swallow error to avoid breaking lead capture
      }
    } catch {
      // swallow error to avoid breaking lead capture
    }
  }

  // 2) Forward to CRM automation (optional)
  await sendWebhook({ ...lead, ip });

  // 3) Email notify (optional)
  await sendResendEmail(lead);

  return NextResponse.json({ ok: true, email: redactPII(lead.email) });
}
