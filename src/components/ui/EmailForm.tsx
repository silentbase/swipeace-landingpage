"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error" | "duplicate";

export default function EmailForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) return;

    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();

      if (res.status === 409) {
        setState("duplicate");
      } else if (!res.ok) {
        setErrorMessage(data.message ?? "Something went wrong. Please try again.");
        setState("error");
      } else {
        setState("success");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-4 animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-success/20 border border-success/40 flex items-center justify-center text-2xl">
          ✓
        </div>
        <p className="text-lg font-bold text-white">You&apos;re on the list!</p>
        <p className="text-text-secondary text-sm text-center max-w-xs">
          Your free Pro month is reserved. We&apos;ll email you the moment SwipeAce launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex ${compact ? "flex-col gap-2" : "flex-col sm:flex-row gap-3"} w-full`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={state === "loading"}
          required
          className="flex-1 bg-surface border border-border focus:border-primary rounded-xl px-4 py-3.5 text-black placeholder:text-text-muted outline-none transition-colors duration-200 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 whitespace-nowrap"
        >
          {state === "loading" ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Joining...
            </>
          ) : (
            "Get Early Access"
          )}
        </button>
      </div>

      <p
        className={`mt-2.5 text-sm text-center ${
          state === "error"
            ? "text-error"
            : state === "duplicate"
              ? "text-primary-light"
              : "text-text-muted"
        }`}
      >
        {state === "error"
          ? errorMessage
          : state === "duplicate"
            ? "You're already on the list! We'll notify you at launch. 🎉"
            : "🎁 Early access = 1 month Pro free, no credit card needed"}
      </p>
    </form>
  );
}
