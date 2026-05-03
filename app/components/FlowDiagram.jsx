"use client";

import {
  FileCheck2,
  Sparkles,
  Sheet,
  Mail,
  Bell,
} from "lucide-react";

const steps = [
  { icon: FileCheck2, title: "Form Submitted", sub: "User sends lead details", tag: "01" },
  { icon: Sparkles, title: "AI Analysis", sub: "Lead is scored instantly", tag: "02" },
  { icon: Sheet, title: "Save Data", sub: "Stored in Google Sheets", tag: "03" },
  { icon: Mail, title: "Send Email", sub: "Personalized welcome message", tag: "04" },
  { icon: Bell, title: "Team Alert", sub: "Slack notification sent", tag: "05" },
];

export default function FlowDiagram() {
  return (
    <section
      id="flow"
      className="py-24 md:py-32 bg-[#0a1f1a] text-[#fdfaf3] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20" />

      <div className="relative mx-auto px-4 max-w-[1400px]">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3ea57f]">
            ▸ How it works
          </span>

          <h2 className="text-5xl md:text-7xl mt-4 leading-[0.95] font-serif">
            From form submit to
            <br />
            <span className="italic text-[#3ea57f]">fully automated</span> workflow.
          </h2>

          <p className="mt-6 text-[#f8f1e1]/70 text-lg max-w-lg">
            One simple form triggers a complete AI-powered automation pipeline — no manual work required.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div
              key={s.tag}
              className="relative bg-[#0f2a23] border border-[#16604a]/40 p-6 hover:border-[#3ea57f] transition-colors group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-mono text-xs text-[#3ea57f]">
                {s.tag}
              </span>

              <s.icon
                className="w-8 h-8 mt-4 text-[#fdfaf3] group-hover:text-[#3ea57f] transition-colors"
                strokeWidth={1.5}
              />

              <h3 className="text-2xl mt-3 font-serif">{s.title}</h3>
              <p className="text-sm text-[#f8f1e1]/60 mt-1">{s.sub}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#16604a]" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3 font-mono text-xs">
          {[
            "Instant processing",
            "AI-powered scoring",
            "No manual work",
            "Real-time sync",
            "Automated emails",
          ].map((t) => (
            <span
              key={t}
              className="border border-[#16604a]/50 px-3 py-1.5 text-[#f8f1e1]/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}