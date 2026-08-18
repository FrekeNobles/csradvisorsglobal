"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { practices } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="container-shell">
        <div className="glass rounded-2xl px-4 py-3 sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <div className="grid h-9 w-9 place-items-center">
                <img
                  src="/images/logo.png"
                  alt="CSR Global"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <span>
                <span className="block text-sm font-extrabold tracking-tight text-ink">CSR Advisors</span>
                <span className="hidden text-[10px] font-semibold uppercase tracking-[.14em] text-slate-500 sm:block">Specialist Advisory Group</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-ink">Home</Link>
              <Link href="/#about" className="text-sm font-medium text-slate-600 transition hover:text-ink">About</Link>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setPracticeOpen((v) => !v)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-ink"
                >
                  Practices <ChevronDown size={15} />
                </button>
                {practiceOpen && (
                  <div className="absolute right-0 top-9 w-80 rounded-2xl border border-line bg-white p-2 shadow-glass">
                    {practices.map((p) => (
                      <Link
                        key={p.slug}
                        href={p.href}
                        onClick={() => setPracticeOpen(false)}
                        className="block rounded-xl p-3 transition hover:bg-mist"
                      >
                        <div className="text-sm font-bold text-ink">{p.legalName}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-500">{p.label}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/#process" className="text-sm font-medium text-slate-600 transition hover:text-ink">Process</Link>
              <Link href="/#contact" className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5">Get in touch</Link>
            </nav>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/60 md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <nav className="mt-3 grid gap-1 border-t border-line pt-3 md:hidden">
              <Link href="/" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-mist">Home</Link>
              <Link href="/#about" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-mist">About</Link>
              <Link href="/#process" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-mist">Process</Link>
              {practices.map((p) => (
                <Link key={p.slug} href={p.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-mist">
                  {p.legalName}
                </Link>
              ))}
              <Link href="/#contact" onClick={() => setOpen(false)} className="mt-1 rounded-xl bg-ink px-3 py-3 text-center text-sm font-bold text-white">Get in touch</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
