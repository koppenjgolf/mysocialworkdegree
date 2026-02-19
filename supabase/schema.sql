-- Create a 'leads' table (run in Supabase SQL Editor)
create table if not exists public.leads (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  state text not null,
  level text not null,
  modality text not null,
  start_timeframe text not null,
  consent boolean not null default true,
  page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  ip text
);

-- Optional: add an index for faster lookup
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);

-- RLS: keep private by default (recommended)
alter table public.leads enable row level security;

-- Only allow server-side inserts via service role (recommended approach)
-- No public policies needed if you only use the service role key server-side.
