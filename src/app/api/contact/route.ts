import { NextResponse } from "next/server";

/**
 * Route POST /api/contact — handler du formulaire de contact.
 *
 * TODO avant production : brancher sur Mail Hub Jarvis (Amazon SES centralisé
 * DIGIFLOW). Voir skill `mailhub-jarvis`. Variables env requises :
 *   MAIL_HUB_KEY, SITE_ID, SITE_SECRET
 *
 * Pour l'instant, route stub qui valide la payload et log côté serveur.
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

  const { firstName, lastName, email, phone, message } = payload as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Email invalide" },
      { status: 400 },
    );
  }

  // eslint-disable-next-line no-console
  console.log("[contact] nouveau message", {
    firstName,
    lastName,
    email,
    phone,
    message,
  });

  return NextResponse.json({ ok: true });
}
