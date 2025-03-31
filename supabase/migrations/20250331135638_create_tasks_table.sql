-- Create tasks table
create table tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) not null,
  title text not null,
  status text default 'pending' not null, -- e.g., 'pending', 'completed'
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Add RLS (Row Level Security) policy to tasks table
-- Allow users to view only their own tasks
alter table tasks enable row level security;

create policy "Allow users to view their own tasks"
on tasks for select
using (auth.uid() = user_id);

-- Allow users to insert their own tasks
create policy "Allow users to insert their own tasks"
on tasks for insert
with check (auth.uid() = user_id);

-- Allow users to update their own tasks
create policy "Allow users to update their own tasks"
on tasks for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Allow users to delete their own tasks
create policy "Allow users to delete their own tasks"
on tasks for delete
using (auth.uid() = user_id);

-- Function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger to automatically update updated_at on row update
create trigger handle_updated_at before update on tasks
  for each row execute procedure update_updated_at_column();