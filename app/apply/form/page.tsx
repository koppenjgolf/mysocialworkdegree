"use client";

import { useMemo, useState, useEffect } from "react";
import { Container, Card, Button, Badge, Input, Select } from "@/components/ui";

function getQ(key: string) {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(key) || "";
}

export default function ApplyFormPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [level, setLevel] = useState("");
  const [modality, setModality] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  useEffect(() => {
    setLevel(getQ("level"));
    setModality(getQ("modality"));
  }, []);

  async function submit(e: any) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, state, level, modality, consent }),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("sent");
      window.location.href = "/thank-you";
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-white">
      <Container>
        <div className="py-12">
          <Badge>Match request</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight">Program match form</h1>
          <p className="mt-3 max-w-3xl text-slate-600">Complete this short form to request program matches.</p>

          <Card className="mt-8 p-6">
            <form onSubmit={submit} className="grid gap-4">
              <div>
                <div className="text-sm font-semibold">Full name</div>
                <Input value={fullName} onChange={(e:any)=>setFullName(e.target.value)} required />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <Input type="email" value={email} onChange={(e:any)=>setEmail(e.target.value)} required />
                </div>
                <div>
                  <div className="text-sm font-semibold">Phone</div>
                  <Input value={phone} onChange={(e:any)=>setPhone(e.target.value)} />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold">State</div>
                  <Input value={state} onChange={(e:any)=>setState(e.target.value)} placeholder="CA" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Degree level</div>
                  <Input value={level} onChange={(e:any)=>setLevel(e.target.value)} placeholder="MSW" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Modality</div>
                  <Input value={modality} onChange={(e:any)=>setModality(e.target.value)} placeholder="Online" />
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm text-slate-700">
                <input type="checkbox" checked={consent} onChange={(e:any)=>setConsent(e.target.checked)} required />
                <span>I agree to be contacted about social work programs and accept the Privacy Policy and Terms.</span>
              </label>

              <Button variant="primary" type="submit">
                {status === "sending" ? "Submitting..." : "Submit"}
              </Button>

              {status === "error" && (
                <div className="text-sm text-red-600">Something went wrong. Please try again.</div>
              )}
            </form>
          </Card>
        </div>
      </Container>
    </main>
  );
}
