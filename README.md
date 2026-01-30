# Social Work Degrees Lead-Gen Site (Next.js)

This is a production-ready starter for a lead generation site for social work degrees.

## Quick start
1) Install deps:
```bash
npm i
```

2) Create `.env.local`:
```bash
cp .env.example .env.local
```

3) Run:
```bash
npm run dev
```

## Deploy (Vercel)
- Push to GitHub
- Import into Vercel
- Add environment variables from `.env.example`
- Set your domain and enable HTTPS

## Lead capture options
- Supabase (recommended): store leads + export/reporting
- Webhook (Zapier/Make/HubSpot): send leads straight to your CRM
- Resend: email notifications to your team

See `/app/api/lead/route.ts`.

## Legal pages
Update `app/(legal)/privacy/page.tsx` and `app/(legal)/terms/page.tsx` with your business info.
