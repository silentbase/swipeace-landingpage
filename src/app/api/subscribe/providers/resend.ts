import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function addContact(email: string): Promise<{ duplicate: boolean; error?: string }> {
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!process.env.RESEND_API_KEY || !audienceId) {
    throw new Error("RESEND_API_KEY or RESEND_AUDIENCE_ID is not set");
  }

  const { error } = await resend.contacts.create({
    email,
    audienceId,
    unsubscribed: false,
  });

  if (!error) return { duplicate: false };

  if (error.name === "validation_error" && error.message?.includes("already exists")) {
    return { duplicate: true };
  }

  throw new Error(`Resend error: ${error.message}`);
}
