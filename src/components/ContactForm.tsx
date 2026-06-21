"use client";

import { useState } from "react";

const INK = "oklch(0.155 0.012 60)";
const INK_FG = "oklch(0.93 0.008 85)";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

type Status = "idle" | "submitting" | "success" | "error";

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "0.6rem",
  opacity: 0.55,
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [botField, setBotField] = useState("");

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", "bot-field": botField, ...form }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0", maxWidth: "34rem", margin: "0 auto" }}>
        <p className="font-quote" style={{ fontSize: "1.4rem", color: INK_FG }}>
          Thank you — your note is on its way. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      onSubmit={handleSubmit}
      style={{ maxWidth: "40rem", margin: "0 auto", textAlign: "left" }}
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot */}
      <p hidden>
        <label>
          Leave this field empty:{" "}
          <input
            name="bot-field"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.6rem", marginBottom: "1.6rem" }}>
        <div>
          <label htmlFor="cf-name" className="font-display-whisper" style={labelStyle}>
            Name
          </label>
          <input
            id="cf-name"
            className="contact-field"
            type="text"
            name="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="font-display-whisper" style={labelStyle}>
            Email
          </label>
          <input
            id="cf-email"
            className="contact-field"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div style={{ marginBottom: "1.6rem" }}>
        <label htmlFor="cf-company" className="font-display-whisper" style={labelStyle}>
          Company <span style={{ textTransform: "none", opacity: 0.7 }}>(optional)</span>
        </label>
        <input
          id="cf-company"
          className="contact-field"
          type="text"
          name="company"
          value={form.company}
          onChange={update("company")}
          placeholder="Company or fund"
        />
      </div>

      <div style={{ marginBottom: "2.4rem" }}>
        <label htmlFor="cf-message" className="font-display-whisper" style={labelStyle}>
          What are you building?
        </label>
        <textarea
          id="cf-message"
          className="contact-field"
          name="message"
          required
          rows={3}
          value={form.message}
          onChange={update("message")}
          placeholder="A few lines about the company and the people behind it."
          style={{ resize: "vertical" }}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", alignItems: "center" }}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="font-nav hover:opacity-90 transition-opacity duration-500"
          style={{
            background: INK_FG,
            color: INK,
            padding: "1.1rem 2.5rem",
            border: "none",
            cursor: status === "submitting" ? "default" : "pointer",
            opacity: status === "submitting" ? 0.6 : 1,
          }}
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
        {status === "error" && (
          <span style={{ color: "var(--gold)", fontSize: "0.85rem" }}>
            Something went wrong — please email contact@arrowsphere.co.
          </span>
        )}
      </div>
    </form>
  );
}
