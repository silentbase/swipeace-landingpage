import { NextRequest, NextResponse } from "next/server";

// ─── Switch provider here ───────────────────────────────────────────────────
import { addContact } from "./providers/brevo";
// import { addContact } from "./providers/brevo";
// ────────────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const { email } = body as { email?: unknown };

  if (
    !email ||
    typeof email !== "string" ||
    !email.includes("@") ||
    !email.includes(".")
  ) {
    return NextResponse.json(
      { message: "A valid email address is required." },
      { status: 400 }
    );
  }

  try {
    const { duplicate } = await addContact(email.trim().toLowerCase());

    if (duplicate) {
      return NextResponse.json(
        { message: "This email is already on the list." },
        { status: 409 }
      );
    }

    return NextResponse.json({ message: "Subscribed successfully." }, { status: 200 });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { message: "Failed to subscribe. Please try again." },
      { status: 502 }
    );
  }
}
