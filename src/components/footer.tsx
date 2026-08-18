import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { practices } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-extrabold text-ink">C</span>
              <div>
                <div className="font-extrabold">CSR Global</div>
                <div className="text-xs text-white/50">Specialist advisory group</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              A group structure designed to make specialist expertise easier to find, understand and access across distinct markets and needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
              <span className="inline-flex items-center gap-2"><Mail size={15} /> info@csrglobal.com</span>
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Africa & United States</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[.14em] text-white/40">Practices</div>
            <div className="mt-4 grid gap-3">
              {practices.map((p) => (
                <Link key={p.slug} href={p.href} className="text-sm text-white/70 hover:text-white">{p.legalName}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[.14em] text-white/40">Explore</div>
            <div className="mt-4 grid gap-3">
              <Link href="/#about" className="text-sm text-white/70 hover:text-white">About the group</Link>
              <Link href="/#process" className="text-sm text-white/70 hover:text-white">How we work</Link>
              <Link href="/#contact" className="text-sm text-white/70 hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} CSR Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
