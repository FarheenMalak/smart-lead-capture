"use client";

import LeadForm from "./components/LeadForm";
import FlowDiagram from "./components/FlowDiagram";
import { Marquee } from "./components/Marquee";
import { ArrowDown, Gift, Sun } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#fdfaf3]">
      {/* NAV */}
      <nav className="max-w-[1400px] mx-auto px-4 flex items-center justify-between py-6">
        <a href="/" className="text-2xl font-semibold tracking-tight font-serif text-[#0a1f1a]">
          Lumen<span className="text-[#0a3d2e]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-mono text-[#0a1f1a]">
          <a href="#flow" className="hover:text-[#0a3d2e]">How it works</a>
          <a href="#stack" className="hover:text-[#0a3d2e]">Tech</a>
          <a href="#capture" className="hover:text-[#0a3d2e]">Try it</a>
        </div>

        <a
          href="#capture"
          className="hidden md:inline-block bg-[#0a1f1a] text-[#fdfaf3] px-4 py-2 text-xs uppercase tracking-wider font-mono hover:bg-[#0a3d2e] transition-colors"
        >
          Try it →
        </a>
      </nav>

      {/* HERO */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 max-w-[1400px] mx-auto px-4">
        <div className="absolute top-20 right-0 w-72 h-72 bg-[#3ea57f]/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#d97706]/20 rounded-full blur-3xl -z-10" />

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#0a3d2e] border-2 border-[#0a1f1a] bg-[#f8f1e1] px-3 py-1.5 font-mono">
              ▸ AI-powered automation demo
            </span>

            <h1 className="text-[clamp(3rem,9vw,8.5rem)] leading-[0.88] mt-6 font-serif text-[#0a1f1a]">
              Capture leads.
              <br />
              <span className="italic text-[#0a3d2e]">Automate</span> everything.
            </h1>

            <p className="mt-10 text-lg md:text-xl text-[#16382f] max-w-xl leading-relaxed">
              Turn a simple form into a fully automated pipeline — score leads with AI, store them instantly, and trigger emails and notifications without lifting a finger.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#capture"
                className="group bg-[#0a1f1a] text-[#fdfaf3] px-7 py-4 text-xl flex items-center gap-3 hover:bg-[#0a3d2e] transition-colors font-serif"
              >
                Try it now
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#flow"
                className="text-sm uppercase underline underline-offset-4 font-mono text-[#0a1f1a]"
              >
                See how it works ↓
              </a>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="lg:col-span-5">
            <div className="bg-[#0a1f1a] text-[#fdfaf3] p-8 border-2 border-[#0a1f1a]">
              <pre className="font-mono text-sm">
                {`{
                  "trigger": "form submit",
                  "automation": [
                  "validate data",
                  "ai scoring",
                  "store in sheets",
                  "send email",
                  "notify team"
                 ],
                "status": "instant"
               }`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <Marquee />
      <FlowDiagram />

      {/* CAPTURE */}
      <section id="capture" className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#0a1f1a]">
              Try it live. <br />
              Get <span className="italic text-[#0a3d2e]">instant results</span>.
            </h2>

            <p className="mt-6 text-[#16382f] text-lg max-w-md">
              Fill out the form and watch the automation pipeline run in real time.
            </p>
          </div>

          <LeadForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1f1a] text-[#fdfaf3] py-16">
        <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-3xl font-serif">Built to automate.</h3>
            <p className="mt-3 text-[#f8f1e1]/60">
              A demo project showcasing modern automation workflows with AI.
            </p>
          </div>

          <div>
            <span className="text-xs uppercase text-[#3ea57f] font-mono">
              What happens
            </span>
            <ol className="mt-3 space-y-2 text-sm font-mono">
              <li>1. You submit the form</li>
              <li>2. AI scores the lead</li>
              <li>3. Data is stored & shared</li>
            </ol>
          </div>

          <div>
            <span className="text-xs uppercase text-[#3ea57f] font-mono">
              Explore
            </span>

            <div className="mt-3 space-y-2">
              <a className="flex items-center gap-2 hover:text-[#3ea57f]">
                <Gift className="w-4 h-4" /> View code
              </a>
              <a className="flex items-center gap-2 hover:text-[#3ea57f]">
                <Sun className="w-4 h-4" /> Live demo
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;