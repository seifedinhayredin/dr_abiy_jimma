"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl border bg-white p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold">Send a Message</h3>

      <div className="mt-4 grid gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
        />

        <textarea
          name="message"
          rows={4}
          required
          placeholder="Your message..."
          className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
        />

        <button
          type="submit"
          className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700"
        >
          Send
        </button>
      </div>

      {submitted && (
        <p className="mt-3 text-emerald-700 text-sm">
          ✅ Thank you! Your message has been sent.
        </p>
      )}
    </form>
  );
}
