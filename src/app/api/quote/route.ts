import { NextResponse } from "next/server";

/**
 * Route POST /api/quote — handler du formulaire de demande de devis.
 *
 * TODO avant production : brancher sur Mail Hub Jarvis (skill mailhub-jarvis).
 * Variables env requises : MAIL_HUB_KEY, SITE_ID, SITE_SECRET
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Payload invalide" },
      { status: 400 },
    );
  }

  const required = [
    "fullName",
    "email",
    "phone",
    "date",
    "guests",
    "prestation",
  ];
  for (const field of required) {
    if (!payload[field]) {
      return NextResponse.json(
        { ok: false, error: `Champ requis manquant : ${field}` },
        { status: 400 },
      );
    }
  }

  const email = String(payload.email ?? "");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Email invalide" },
      { status: 400 },
    );
  }

  // eslint-disable-next-line no-console
  console.log("[quote] nouvelle demande de devis", payload);

  return NextResponse.json({ ok: true });
}
