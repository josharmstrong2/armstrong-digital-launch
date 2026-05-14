alter table public.contact_submissions
  add constraint contact_name_len check (char_length(name) between 1 and 100),
  add constraint contact_business_len check (char_length(business) between 1 and 150),
  add constraint contact_email_len check (char_length(email) between 3 and 254),
  add constraint contact_email_fmt check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  add constraint contact_message_len check (char_length(message) between 1 and 4000);
