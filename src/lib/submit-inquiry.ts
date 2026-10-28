import { supabase } from "@/integrations/supabase/client";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "4a29109f-f4ea-49cc-9227-7ded95af32c7";

export type Inquiry = {
  source: "Homepage contact form" | "Get Started form";
  name: string;
  email: string;
  message: string;
  phone?: string | null;
  business?: string | null;
  business_type?: string | null;
  website?: string | null;
};

/**
 * Sends every inquiry two ways: an email via Web3Forms and a saved copy in
 * contact_submissions. Succeeds if at least one path works, so a lead is never lost.
 */
export async function submitInquiry(i: Inquiry): Promise<boolean> {
  const phone = i.phone?.trim() || null;
  const row = {
    name: i.name.trim().slice(0, 100),
    email: i.email.trim(),
    message: i.message.trim().slice(0, 4000),
    phone: phone && phone.length >= 7 && phone.length <= 30 ? phone : null,
    business: (i.business?.trim() || "Not provided").slice(0, 150),
    business_type: i.business_type || null,
    website: i.website || null,
    help_with: i.source,
  };

  const dbPromise = supabase
    .from("contact_submissions")
    .insert(row)
    .then(({ error }) => !error, () => false);

  const emailPromise = fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `New inquiry from Armstrong Digital website (${i.source})`,
      from_name: "Armstrong Digital Website",
      botcheck: "",
      name: row.name,
      email: row.email,
      phone: phone ?? "",
      business: i.business ?? "",
      business_type: i.business_type ?? "",
      website: i.website ?? "",
      message: row.message,
    }),
  })
    .then(async (res) => {
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      return res.ok && !!data?.success;
    })
    .catch(() => false);

  const [saved, emailed] = await Promise.all([dbPromise, emailPromise]);
  return saved || emailed;
}
