import Link from "next/link";
import { ArrowUpRight, Globe2, Landmark } from "lucide-react";
import { practices } from "@/data/site";

export function PracticeSwitcher() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {practices.map((p, index) => (
        <Link
          href={p.href}
          key={p.slug}
          className="group relative overflow-hidden rounded-[2rem] border border-line bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1"
        >
          <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full ${index === 0 ? "bg-teal/10" : "bg-blue-500/10"}`} />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${index === 0 ? "bg-teal/10 text-teal" : "bg-blue-50 text-blue-700"}`}>
                {index === 0 ? <Globe2 size={22} /> : <Landmark size={22} />}
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-line transition group-hover:bg-ink group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[.14em] text-slate-400">{p.legalName}</p>
            <h3 className="mt-2 max-w-md text-2xl font-extrabold tracking-tight text-ink">{p.label}</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">{p.audience}</p>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{p.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal">Explore this practice <ArrowUpRight size={16} /></span>
          </div>
        </Link>
      ))}
    </div>
  );
}
