create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Anyone (including unauthenticated visitors) may submit a contact request.
create policy "Anyone can submit a contact request"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);

-- No public read access. Owner reads via service role / dashboard.
