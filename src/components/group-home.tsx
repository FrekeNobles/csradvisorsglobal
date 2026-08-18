import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { Header } from "./header";
import { Footer } from "./footer";
import { PracticeSwitcher } from "./practice-switcher";
import { process } from "@/data/site";

export function GroupHome() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-mist pt-36 sm:pt-40">
          <div className="absolute inset-0 grid-fade opacity-70" />
          <div className="hero-orb -right-24 top-28 h-72 w-72 bg-teal/10" />
          <div className="hero-orb -left-24 bottom-0 h-64 w-64 bg-blue-500/10" />
          <div className="container-shell relative pb-16 sm:pb-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-3.5 py-2 text-xs font-bold text-slate-600 shadow-sm">
                  <Sparkles size={14} className="text-teal" /> One group. Two specialist practices.
                </div>
                <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.045em] text-ink sm:text-6xl lg:text-[4.6rem]">
                  The right expertise for the <span className="text-teal">right challenge.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  CSR Advisors brings together two distinct professional practices. Choose the specialist team that matches your industry, market and goals.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/#practices" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5">
                    Explore our practices <ArrowRight size={17} />
                  </Link>
                  <Link href="/#about" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-mist">
                    About CSR Advisors
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-teal/10 via-transparent to-blue-500/10 blur-2xl" />
                <div className="relative rounded-[2.5rem] border border-white/80 bg-white/75 p-4 shadow-soft backdrop-blur">
                  <div className="rounded-[2rem] bg-ink p-5 text-white sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[.15em] text-white/45">CSR Advisors</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                    </div>
                    <div className="mt-12 grid gap-3">
                      <Link href="/africa" className="rounded-2xl bg-white/[.07] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                        <div className="text-xs font-bold uppercase tracking-[.12em] text-cyan">CSR Advisors Ltd</div>
                        <div className="mt-2 text-xl font-bold">Social Performance & Development</div>
                        <div className="mt-2 text-sm leading-6 text-white/55">CSR, Sust, RAP, research and impact expertise.</div>
                      </Link>
                      <Link href="/usa" className="ml-8 rounded-2xl bg-white/[.07] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                        <div className="text-xs font-bold uppercase tracking-[.12em] text-blue-300">CSR Advisors LLC</div>
                        <div className="mt-2 text-xl font-bold">Business, Tax & Financial</div>
                        <div className="mt-2 text-sm leading-6 text-white/55">Business setup, tax, accounting, funding and financial support.</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-3 sm:grid-cols-3">
              {[
                ["Specialist expertise", "Each practice speaks directly to its own audience and industry needs."],
                ["Clearer client journeys", "No more guessing which company or service is the right fit."],
                ["Shared group strength", "Distinct teams, connected by a common standard of professionalism."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-line bg-white/75 p-5 backdrop-blur">
                  <div className="flex items-center gap-2 text-sm font-bold text-ink"><CheckCircle2 size={17} className="text-teal" /> {title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="practices" className="container-shell scroll-mt-28 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="section-kicker">Choose your practice</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Two businesses. Two clear experiences.</h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              The group homepage introduces the relationship. From here, each subsidiary gets its own language, services and calls to action so visitors immediately see what applies to them.
            </p>
          </div>
          <div className="mt-10"><PracticeSwitcher /></div>
        </section>

        <section id="about" className="scroll-mt-28 border-y border-line bg-white">
          <div className="container-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <div className="section-kicker">About the group</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">One group structure without forcing two industries into one message.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Layers3, "Distinct positioning", "Each subsidiary can lead with the problems its own clients are actually trying to solve."],
                [ShieldCheck, "Professional consistency", "Shared standards across the group while keeping each practice's expertise clear."],
                [Sparkles, "Better discovery", "Visitors can self-select into the right practice within seconds."],
                [CheckCircle2, "Room to grow", "New services, insights and industries can be added without rebuilding the information architecture."],
              ].map(([Icon, title, text]) => (
                <div key={String(title)} className="rounded-3xl border border-line bg-mist/60 p-6">
                  <Icon size={22} className="text-teal" />
                  <h3 className="mt-5 font-bold text-ink">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{String(text)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-28 bg-mist py-20 sm:py-28">
          <div className="container-shell">
            <div className="max-w-2xl">
              <div className="section-kicker">How we work</div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">A clear path from context to action.</h2>
              <p className="mt-4 text-base leading-7 text-slate-500">The delivery model stays simple even when the work itself is complex.</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {process.map(([number, title, text]) => (
                <div key={number} className="relative rounded-3xl border border-line bg-white p-6">
                  <span className="text-xs font-black tracking-[.16em] text-teal">{number}</span>
                  <h3 className="mt-6 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                  {number !== "04" && <ChevronRight className="absolute right-5 top-6 hidden text-slate-300 md:block" size={18} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
          <div className="container-shell">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-7 py-12 text-white sm:px-12 sm:py-14">
              <div className="hero-orb -right-24 -top-24 h-72 w-72 bg-teal/20" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-cyan">Start with the right team</div>
                  <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Tell us what you are trying to solve.</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">We can direct your enquiry to the specialist practice best positioned to help.</p>
                </div>
                <a href="mailto:info@csrAdvisors.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5">
                  Get in touch <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
