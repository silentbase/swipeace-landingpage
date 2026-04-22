export async function addContact(email: string): Promise<{ duplicate: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not set");
  }

  const listId = Number(process.env.BREVO_LIST_ID ?? "2");

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: false,
      attributes: {
        SOURCE: "landing_page",
        SIGNUP_DATE: new Date().toISOString(),
      },
    }),
  });

  if (res.status === 201) return { duplicate: false };

  const data = await res.json().catch(() => ({}));

  if (res.status === 400 && (data as { code?: string }).code === "duplicate_parameter") {
    return { duplicate: true };
  }

  throw new Error(`Brevo error: ${res.status} ${JSON.stringify(data)}`);
}
