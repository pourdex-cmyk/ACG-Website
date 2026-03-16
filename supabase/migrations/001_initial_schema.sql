-- ─────────────────────────────────────────────────────────────────────────────
-- Augmentation Consulting Group — Initial Database Schema
-- ─────────────────────────────────────────────────────────────────────────────

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── contact_submissions ─────────────────────────────────────────────────────
create table if not exists public.contact_submissions (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),
  name            text not null,
  email           text not null,
  company         text not null,
  industry        text,
  company_size    text,
  primary_challenge text,
  phone           text,
  message         text,
  status          text not null default 'new' check (status in ('new', 'reviewed', 'responded', 'archived'))
);

-- ─── consultation_requests ───────────────────────────────────────────────────
create table if not exists public.consultation_requests (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),
  name            text not null,
  email           text not null,
  company         text not null,
  industry        text,
  company_size    text,
  primary_challenge text,
  phone           text,
  goals           text,
  preferred_time  text,
  status          text not null default 'new' check (status in ('new', 'scheduled', 'completed', 'archived'))
);

-- ─── articles ────────────────────────────────────────────────────────────────
create table if not exists public.articles (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  slug            text not null unique,
  title           text not null,
  excerpt         text not null,
  content         text not null,
  category        text not null,
  read_time       text not null default '5 min read',
  published       boolean not null default false,
  published_at    timestamptz,
  author          text not null default 'ACG Research Team',
  tags            text[] not null default '{}',
  featured_image  text
);

-- ─── case_studies ────────────────────────────────────────────────────────────
create table if not exists public.case_studies (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  slug            text not null unique,
  title           text not null,
  industry        text not null,
  challenge       text not null,
  solution        text not null,
  results         jsonb not null default '[]',
  tag             text not null,
  published       boolean not null default false,
  featured_image  text
);

-- ─── testimonials ────────────────────────────────────────────────────────────
create table if not exists public.testimonials (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),
  name            text not null,
  title           text not null,
  company         text not null,
  quote           text not null,
  industry        text not null,
  published       boolean not null default false
);

-- ─── site_settings ───────────────────────────────────────────────────────────
create table if not exists public.site_settings (
  id              uuid primary key default uuid_generate_v4(),
  key             text not null unique,
  value           jsonb not null,
  updated_at      timestamptz not null default now()
);

-- ─── media_assets ────────────────────────────────────────────────────────────
create table if not exists public.media_assets (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),
  filename        text not null,
  storage_path    text not null,
  url             text not null,
  mime_type       text not null,
  size_bytes      bigint,
  alt_text        text,
  used_in         text
);

-- ─── seo_metadata ────────────────────────────────────────────────────────────
create table if not exists public.seo_metadata (
  id              uuid primary key default uuid_generate_v4(),
  page_path       text not null unique,
  title           text,
  description     text,
  og_title        text,
  og_description  text,
  og_image        text,
  keywords        text[],
  updated_at      timestamptz not null default now()
);

-- ─── RLS Policies ────────────────────────────────────────────────────────────
-- Enable RLS on all tables
alter table public.contact_submissions enable row level security;
alter table public.consultation_requests enable row level security;
alter table public.articles enable row level security;
alter table public.case_studies enable row level security;
alter table public.testimonials enable row level security;
alter table public.site_settings enable row level security;
alter table public.media_assets enable row level security;
alter table public.seo_metadata enable row level security;

-- Public can INSERT contact/consultation (forms)
create policy "Allow public contact submissions"
  on public.contact_submissions for insert
  to anon, authenticated
  with check (true);

create policy "Allow public consultation requests"
  on public.consultation_requests for insert
  to anon, authenticated
  with check (true);

-- Public can SELECT published articles + case studies + testimonials
create policy "Public can read published articles"
  on public.articles for select
  to anon, authenticated
  using (published = true);

create policy "Public can read published case studies"
  on public.case_studies for select
  to anon, authenticated
  using (published = true);

create policy "Public can read published testimonials"
  on public.testimonials for select
  to anon, authenticated
  using (published = true);

create policy "Public can read site settings"
  on public.site_settings for select
  to anon, authenticated
  using (true);

create policy "Public can read seo metadata"
  on public.seo_metadata for select
  to anon, authenticated
  using (true);

-- ─── Auto-update updated_at ──────────────────────────────────────────────────
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger handle_articles_updated_at
  before update on public.articles
  for each row execute procedure public.handle_updated_at();

create trigger handle_case_studies_updated_at
  before update on public.case_studies
  for each row execute procedure public.handle_updated_at();

-- ─── Seed Data ───────────────────────────────────────────────────────────────

-- Seed case studies
insert into public.case_studies (slug, title, industry, challenge, solution, results, tag, published) values
(
  'healthcare-processing-optimization',
  'Healthcare Network Reduced Patient Processing Time by 37%',
  'Healthcare',
  'A regional healthcare network with 14 facilities was experiencing significant bottlenecks in patient intake and discharge workflows, leading to extended wait times and reduced capacity.',
  'We deployed process mining across their EMR system, identified 23 distinct bottleneck patterns, and implemented an AI-driven triage routing system.',
  '[{"label": "Processing Time", "value": "-37%"}, {"label": "Throughput", "value": "+22%"}, {"label": "Cost Savings", "value": "$4.2M"}]',
  'Process Optimization',
  true
),
(
  'insurer-revenue-leakage',
  'National Insurer Recovered $10M+ in Revenue Leakage',
  'Financial Services',
  'An insurance firm was experiencing systematic revenue leakage due to billing process gaps, claims processing inconsistencies, and undetected policy exception patterns.',
  'Our data intelligence layer ingested 18 months of transactional data, identified 7 systematic leakage patterns, and built an automated detection and correction system.',
  '[{"label": "Revenue Recovered", "value": "$10.4M"}, {"label": "Detection Accuracy", "value": "94%"}, {"label": "Process Time", "value": "-58%"}]',
  'Revenue Intelligence',
  true
),
(
  'logistics-automation-roi',
  'Distribution Network Achieved 22% Automation ROI',
  'Logistics',
  'A national logistics provider''s manual dispatch and route planning operations were creating scheduling inefficiencies across 8 regional hubs.',
  'Deployed predictive route optimization, automated dispatch scheduling, and a real-time operational intelligence dashboard integrated with existing TMS infrastructure.',
  '[{"label": "Automation ROI", "value": "22%"}, {"label": "Dispatch Time", "value": "-64%"}, {"label": "On-Time Delivery", "value": "+15%"}]',
  'Predictive Analytics',
  true
);

-- Seed articles
insert into public.articles (slug, title, excerpt, content, category, read_time, published, published_at, author, tags) values
(
  'future-of-ai-driven-operations',
  'The Future of AI-Driven Operations: What Enterprise Leaders Need to Know',
  'As AI systems mature from experimental tools to operational infrastructure, enterprise leaders face a new set of strategic decisions.',
  'Full article content here — will be managed via CMS or Supabase dashboard.',
  'AI Strategy',
  '8 min read',
  true,
  now(),
  'ACG Research Team',
  ARRAY['AI Strategy', 'Operations', 'Enterprise']
),
(
  'process-mining-enterprise-guide',
  'Process Mining in Enterprise Organizations: A Practical Guide',
  'Process mining transforms raw event log data into visual operational intelligence. Here''s how enterprise operations teams are using it.',
  'Full article content here — will be managed via CMS or Supabase dashboard.',
  'Process Mining',
  '6 min read',
  true,
  now(),
  'ACG Research Team',
  ARRAY['Process Mining', 'Operations', 'Enterprise']
),
(
  'intercompany-ai-organizations',
  'Building Intercompany AI-Driven Organizations: From Data to Decision',
  'Organizations that successfully integrate AI into their decision-making processes treat operational data as a strategic asset.',
  'Full article content here — will be managed via CMS or Supabase dashboard.',
  'AI Strategy',
  '7 min read',
  true,
  now(),
  'ACG Research Team',
  ARRAY['AI Strategy', 'Data Intelligence', 'Decision Making']
);

-- Seed site settings
insert into public.site_settings (key, value) values
('company_name', '"Augmentation Consulting Group"'),
('company_address', '{"street": "2389 Main St. STE 100", "city": "Glastonbury", "state": "CT", "zip": "06033"}'),
('company_email', '"info@augmentationcg.com"'),
('company_phone', '"+1 (800) 555-0000"'),
('social_linkedin', '"https://linkedin.com/company/augmentation-consulting"'),
('social_twitter', '"https://twitter.com/augmentationcg"');
