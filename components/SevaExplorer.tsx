"use client";

import Link from "next/link";
import { useState } from "react";
import { SEVAS, type Seva } from "@/lib/data";
import Reveal from "./Reveal";

const FILTERS = [
  { key: "all", label: "All Sevas" },
  { key: "darshan", label: "Darshan Tickets" },
  { key: "nitya", label: "Nitya Sevas" },
  { key: "homam", label: "Homams" },
  { key: "special", label: "Special Sevas" },
] as const;

const TAG: Record<Seva["category"], string> = {
  darshan: "Darshan",
  nitya: "Nitya Seva",
  homam: "Homam",
  special: "Special",
};

export default function SevaExplorer() {
  const [f, setF] = useState<(typeof FILTERS)[number]["key"]>("all");
  const list = SEVAS.filter((s) => f === "all" || s.category === f);

  return (
    <>
      <div className="chips" role="tablist" aria-label="Filter sevas">
        {FILTERS.map((c) => (
          <button
            key={c.key}
            role="tab"
            aria-selected={f === c.key}
            className={`chip ${f === c.key ? "on" : ""}`}
            onClick={() => setF(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid--3">
        {list.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 90} sparkle className="panel seva-card">
            <div className="seva-card__img">
              <img src={s.image} alt={s.name} loading="lazy" />
              <span className="tag">{TAG[s.category]}</span>
            </div>
            <div className="seva-card__body">
              <h3>{s.name}</h3>
              <span className="te">{s.nameTe}</span>
              <p>{s.desc}</p>
              <span className="when">◷ {s.when}</span>
              <div className="seva-card__foot">
                <span className="price">
                  {s.price === 0 ? "Free" : `₹${s.price.toLocaleString("en-IN")}`}
                  <small>{s.category === "darshan" ? "per person" : "per seva"}</small>
                </span>
                <Link href={`/booking?seva=${s.id}`} className="btn btn--sm">
                  {s.price === 0 ? "Get Ticket" : "Book"}
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
