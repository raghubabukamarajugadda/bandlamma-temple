import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { DiyaDivider } from "@/components/Ornaments";
import { FESTIVALS } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Festivals & Utsavams",
  description:
    "Bagalamukhi Jayanthi, Amavasya divya homams, Sharad Navaratri and all utsavams at Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole.",
};

export default function FestivalsPage() {
  return (
    <>
      <PageHero
        eyebrow="ఉత్సవాలు"
        title="Festivals & Utsavams"
        lede="Days when Chandole becomes Dhanadapura again — lamps, alankarams, homams and the Goddess in her finest splendour."
        image="/images/festival-utsavam.webp"
      />

      <section className="section">
        <div className="shell">
          <div className="fest-list">
            {FESTIVALS.map((f, i) => (
              <Reveal key={f.name} delay={Math.min(i, 3) * 80} sparkle className={`panel fest ${f.highlight ? "highlight" : ""}`}>
                <div className="moon">{f.nameTe}</div>
                <div>
                  <h3>{f.name} <span className="te">· {f.nameTe}</span></h3>
                  <div className="when">{f.when}</div>
                  <p>{f.desc}</p>
                </div>
                {f.highlight && <span className="tagline">Major</span>}
              </Reveal>
            ))}
          </div>

          <div className="split mt-4" style={{ marginTop: "4rem" }}>
            <Reveal>
              <div className="arch arch--sm" style={{ aspectRatio: "4/3" }}>
                <img src="/images/deepalu.webp" alt="Rows of glowing deepalu inside the temple" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <span className="eyebrow">ప్రతి అమావాస్య</span>
              <h2 className="sub-title">The Amavasya rhythm</h2>
              <div className="prose mt-2">
                <p>
                  More than any single festival, the heartbeat of this kshetram is the
                  <strong> Amavasya Divya Homam</strong>. Every new-moon evening the
                  homa kundam is lit, the mantras of Bagalamukhi rise with the smoke,
                  and devotees — in the mandapam and on the live stream — offer their
                  burdens into the fire. Prasadam follows for all who attend.
                </p>
              </div>
              <div className="flex wrap mt-2">
                <Link href="/booking?seva=amavasya-homam" className="btn btn--sm">Sponsor the homam</Link>
                <Link href="/videos" className="btn btn--line btn--sm">Watch live</Link>
              </div>
            </Reveal>
          </div>
          <DiyaDivider />
        </div>
      </section>
    </>
  );
}
