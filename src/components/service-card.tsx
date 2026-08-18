"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Service } from "@/data/site";
import { ServiceIcon } from "./icons";

export function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`rounded-3xl border bg-white p-6 transition-all duration-300 ${expanded ? "border-teal/30 shadow-soft" : "border-line hover:-translate-y-1 hover:shadow-soft"}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mist text-teal">
          <ServiceIcon name={service.icon} />
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition ${expanded ? "rotate-180 bg-ink text-white" : "bg-white text-ink hover:bg-mist"}`}
        >
          <ChevronDown size={17} />
        </button>
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{service.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{service.short}</p>

      <div className={`grid transition-[grid-template-rows] duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-line pt-4 text-sm leading-6 text-slate-600">
            {service.details}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-5 text-sm font-bold text-teal hover:underline"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </article>
  );
}
