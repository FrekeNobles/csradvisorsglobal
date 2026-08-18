import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ServiceCard } from "./service-card";
import type { Practice } from "@/data/site";

export function PracticePage({ practice }: { practice: Practice }) {
  const isAfrica = practice.slug === "africa";

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-mist pt-36 sm:pt-40">
          <div className="absolute inset-0 grid-fade opacity-60" />
          <div className={`hero-orb -right-24 top-24 h-80 w-80 ${isAfrica ? "bg-teal/15" : "bg-blue-500/12"}`} />
          <div className="container-shell relative pb-16 sm:pb-24">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-ink">
              <ArrowLeft size={16} /> Back to CSR Advisors Homepage
            </Link>
            <div className="mt-8 max-w-4xl">
              <div className={`inline-flex rounded-full border px-3.5 py-2 text-xs font-bold uppercase tracking-[.12em] ${isAfrica ? "border-teal/20 bg-teal/10 text-teal" : "border-blue-200 bg-blue-50 text-blue-700"}`}>
                {practice.legalName}
              </div>
              <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-[-.04em] text-ink sm:text-6xl">
                {practice.label}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{practice.description}</p>
              <p className="mt-4 text-sm font-semibold text-slate-500">{practice.audience}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white">Explore services <ArrowRight size={17} /></a>
                <a href="mailto:info@csradvisorsglobal.com" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink">Contact us <Mail size={17} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="container-shell scroll-mt-28 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="section-kicker">What we do</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Specialist services, explained clearly.</h2>
            <p className="mt-4 text-base leading-7 text-slate-500">Select “Read more” on any service to see what the engagement can cover.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {practice.services.map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </section>

        <section className="border-y border-line bg-mist py-20 sm:py-28">
          <div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="section-kicker">Who we serve</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Built around the realities of your sector.</h2>
              <p className="mt-4 text-base leading-7 text-slate-500">The practice keeps its own industry language so the right audience can immediately recognize where we fit.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {practice.industries.map((industry) => (
                <div key={industry} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 text-sm font-semibold text-ink">
                  <CheckCircle2 size={18} className={isAfrica ? "text-teal" : "text-blue-600"} /> {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-shell">
            <div className="rounded-[2.5rem] border border-line bg-white p-8 shadow-soft sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="section-kicker">Need this practice?</div>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">Let&apos;s discuss what you need.</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Share your objectives, project context or business needs and we&apos;ll connect you with the appropriate specialist team.</p>
                </div>
                <a href="mailto:info@csrAdvisors.com" className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white ${isAfrica ? "bg-teal" : "bg-blue-700"}`}>Start a conversation <ArrowRight size={17} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
