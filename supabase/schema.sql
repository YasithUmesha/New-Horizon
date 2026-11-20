create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  interest text not null,
  destination text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.consultation_requests enable row level security;

create policy "Anyone can submit a consultation request"
on public.consultation_requests
for insert
to anon, authenticated
with check (true);
