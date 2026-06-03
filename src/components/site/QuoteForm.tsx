"use client";

import { useState, type FormEvent } from "react";
import { quoteOptions } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const FIELD =
  "w-full font-sans text-[0.92rem] text-dark bg-light placeholder:text-ink/40 " +
  "border border-ink/25 px-3 sm:px-4 py-2 sm:py-3 rounded-sm " +
  "transition-[border-color] duration-[220ms] " +
  "focus:outline-none focus:border-accent";

const LABEL =
  "block text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-olive font-semibold mb-1 sm:mb-1.5";

export function QuoteForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Erreur d’envoi");
      setStatus("success");
      formEl.reset();
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur d’envoi");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-3 sm:gap-4"
      aria-busy={status === "loading"}
    >
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-fullName" className={LABEL}>
            Nom &amp; prénom <span className="text-accent">*</span>
          </label>
          <input
            id="q-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="q-company" className={LABEL}>
            Société
          </label>
          <input
            id="q-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={FIELD}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-email" className={LABEL}>
            E-mail <span className="text-accent">*</span>
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="q-phone" className={LABEL}>
            Téléphone <span className="text-accent">*</span>
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={FIELD}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-date" className={LABEL}>
            Date <span className="text-accent">*</span>
          </label>
          <input
            id="q-date"
            name="date"
            type="date"
            required
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="q-time" className={LABEL}>
            Heure
          </label>
          <input
            id="q-time"
            name="time"
            type="time"
            className={FIELD}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-guests" className={LABEL}>
            Nombre de personnes <span className="text-accent">*</span>
          </label>
          <input
            id="q-guests"
            name="guests"
            type="number"
            min={1}
            required
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="q-prestation" className={LABEL}>
            Prestation <span className="text-accent">*</span>
          </label>
          <select
            id="q-prestation"
            name="prestation"
            required
            className={`${FIELD} appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cb7d65' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>\")",
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Choisissez votre prestation
            </option>
            {quoteOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="q-message" className={LABEL}>
          En quelques mots…
        </label>
        <textarea
          id="q-message"
          name="message"
          rows={4}
          className={`${FIELD} resize-y min-h-[100px]`}
          placeholder="Lieu, ambiance, contraintes, envies…"
        />
      </div>

      <p className="text-[0.72rem] text-ink/60 italic">
        Les champs marqués <span className="text-accent">*</span> sont
        obligatoires. Cristelle revient sous 48 h.
      </p>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="border border-accent/40 bg-accent/5 px-4 py-2.5 text-[0.88rem] text-accent-dark rounded-sm"
        >
          {errorMsg}
        </div>
      )}

      {status === "success" && (
        <div
          role="status"
          className="border border-olive/40 bg-olive/5 px-4 py-2.5 text-[0.88rem] text-olive rounded-sm"
        >
          Merci, votre demande est partie ! Réponse sous 48 h.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-[0.02em] text-[0.92rem] px-7 py-[0.9rem] rounded-full bg-accent text-dark transition-[background,transform,box-shadow,opacity] duration-[280ms] hover:bg-accent-dark hover:text-light hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(154,90,68,0.45)] disabled:opacity-60 disabled:cursor-wait disabled:translate-y-0 self-start"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
