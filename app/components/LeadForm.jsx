"use client";

import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";

const budgetOptions = ["<5k", "5-20k", "20-100k", "100k+"];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name").max(80),
  email: z.string().trim().email("That email looks off").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.enum(budgetOptions),
  message: z.string().trim().min(10, "A little more context, please").max(1000),
});

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ||
  "https://farheenjb.app.n8n.cloud/webhook/lead-capture";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});

  const form = e.currentTarget; 

  const fd = new FormData(form);

  const raw = {
    name: fd.get("name") || "",
    email: fd.get("email") || "",
    company: fd.get("company") || "",
    budget: fd.get("budget") || "",
    message: fd.get("message") || "",
  };

  const parsed = leadSchema.safeParse(raw);

  if (!parsed.success) {
    const map = {};
    parsed.error.issues.forEach((i) => {
      map[i.path[0]] = i.message;
    });
    setErrors(map);
    return;
  }

  setLoading(true);

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        submittedAt: new Date().toISOString(),
        source: "lumen-demo",
      }),
    });

    setDone(true);

    form.reset(); 
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
  if (done) {
    return (
      <div className="bg-[#f8f1e1] border-2 border-[#0a1f1a] p-10 text-center">
        <CheckCircle2 className="w-14 h-14 mx-auto text-[#0a3d2e]" />

        <h3 className="text-3xl mt-4 font-serif">
          You're all set.
        </h3>

        <p className="mt-2 text-[#0a1f1a]/80">
          We’ve received your request. You’ll hear back shortly.
        </p>

        <button
          onClick={() => setDone(false)}
          className="mt-6 underline font-mono text-[#0a1f1a]"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 space-y-5 bg-[#0f2a23] border border-[#16604a]/40 text-[#fdfaf3]"
    >
      <h3 className="text-2xl font-serif mb-2">
        Get early access
      </h3>

      <p className="text-sm text-[#f8f1e1]/70 mb-4">
        Share your details and we’ll show you how automation can handle your leads in real time.
      </p>

      <Field label="Full Name" name="name" error={errors.name} />
      <Field label="Email Address" name="email" type="email" error={errors.email} />
      <Field label="Company (optional)" name="company" error={errors.company} />

      <div>
        <label className="block mb-2 text-[#f8f1e1]">Monthly Budget</label>

        <div className="grid grid-cols-2 gap-2">
          {budgetOptions.map((v) => (
            <label
              key={v}
              className="border border-[#16604a]/40 p-2 text-center cursor-pointer hover:border-[#3ea57f] transition"
            >
              <input type="radio" name="budget" value={v} className="hidden peer" />
              <span className="peer-checked:text-[#3ea57f]">{v}</span>
            </label>
          ))}
        </div>

        {errors.budget && (
          <p className="text-red-400 mt-1">{errors.budget}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 text-[#f8f1e1]">Tell us about your use case</label>

        <textarea
          name="message"
          rows={4}
          placeholder="What do you want to automate?"
          className="w-full border border-[#16604a]/40 bg-transparent p-2 focus:outline-none focus:border-[#3ea57f]"
        />

        {errors.message && (
          <p className="text-red-400 mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#3ea57f] text-[#0a1f1a] p-4 flex items-center justify-center gap-2 hover:opacity-90 transition font-serif"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin w-5 h-5" />
            Submitting...
          </>
        ) : (
          <>
            Request access
            <ArrowUpRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", error }) {
  return (
    <div>
      <label className="block mb-2 text-[#f8f1e1]">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full border border-[#16604a]/40 bg-transparent p-2 focus:outline-none focus:border-[#3ea57f]"
      />
      {error && <p className="text-red-400 mt-1">{error}</p>}
    </div>
  );
}