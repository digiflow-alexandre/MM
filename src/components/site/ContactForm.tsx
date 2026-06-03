"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const FIELD_BASE =
  "w-full font-sans text-[0.95rem] text-dark bg-light placeholder:text-ink/40 " +
  "border border-ink/25 px-4 py-3 rounded-sm " +
  "transition-[border-color,background] duration-[220ms] " +
  "focus:outline-none focus:border-accent focus:bg-light";

const LABEL_BASE =
  "block text-[0.72rem] uppercase tracking-[0.22em] text-olive font-semibold mb-2";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({ ok: false }));

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Erreur d’envoi");
      }

      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur d’envoi");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5 lg:gap-6"
      aria-busy={status === "loading"}
    >
      <div className="grid gap-5 lg:gap-6 lg:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={LABEL_BASE}>
            Prénom <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={FIELD_BASE}
            placeholder="Cristelle"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={LABEL_BASE}>
            Nom <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={FIELD_BASE}
            placeholder="Doveri"
          />
        </div>
      </div>

      <div className="grid gap-5 lg:gap-6 lg:grid-cols-2">
        <div>
          <label htmlFor="email" className={LABEL_BASE}>
            E-mail <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD_BASE}
            placeholder="vous@exemple.fr"
          />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL_BASE}>
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={FIELD_BASE}
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={LABEL_BASE}>
          Votre message{" "}
          <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${FIELD_BASE} resize-y min-h-[140px]`}
          placeholder="Parlez-nous de votre projet — date, format, nombre de convives, envies…"
        />
      </div>

      <p className="text-[0.78rem] text-ink/60 italic">
        Les champs marqués d’une <span className="text-accent">*</span> sont
        requis. Cristelle revient sous 48 h.
      </p>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="border border-accent/40 bg-accent/5 px-4 py-3 text-[0.92rem] text-accent-dark rounded-sm"
        >
          {errorMsg}
        </div>
      )}

      {status === "success" && (
        <div
          role="status"
          className="border border-olive/40 bg-olive/5 px-4 py-3 text-[0.92rem] text-olive rounded-sm"
        >
          Merci&nbsp;! Votre message est bien parti. Cristelle vous répondra
          sous 48&nbsp;h.
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 lg:gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-[0.02em] text-[0.94rem] px-8 py-[1.05rem] rounded-full bg-accent text-dark transition-[background,transform,box-shadow,opacity] duration-[280ms] hover:bg-accent-dark hover:text-light hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(154,90,68,0.45)] disabled:opacity-60 disabled:cursor-wait disabled:translate-y-0"
        >
          {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
        </button>
        <span className="text-[0.82rem] text-ink/70 italic">
          Ou appelez directement&nbsp;:{" "}
          <a
            href="tel:+33682889651"
            className="text-accent hover:text-accent-dark transition-colors duration-[220ms] not-italic font-medium"
          >
            06 82 88 96 51
          </a>
        </span>
      </div>
    </form>
  );
}
