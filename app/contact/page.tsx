import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { DiyaDivider } from "@/components/Ornaments";
import { TEMPLE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Reach",
  description:
    "Reach Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole — address, phone, directions by road, rail and air.",
};

const I = { stroke: "currentColor", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="సంప్రదింపులు"
        title="Contact & How to Reach"
        lede="Chandole sits on NH-216 in the Krishna delta — an easy, scenic drive from Guntur, Vijayawada and Bapatla."
        image="/images/hero-temple.webp"
      />

      <section className="section">
        <div className="shell">
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <div className="grid" style={{ gap: "1rem" }}>
                <Reveal sparkle className="panel contact-card">
                  <div className="ic"><svg viewBox="0 0 24 24" {...I}><path d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg></div>
                  <div>
                    <b>Address</b>
                    <p>{TEMPLE.address}</p>
                  </div>
                </Reveal>
                <Reveal sparkle className="panel contact-card" delay={100}>
                  <div className="ic"><svg viewBox="0 0 24 24" {...I}><path d="M4 4h4l2 5-3 2a13 13 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 2 6a2 2 0 0 1 2-2z"/></svg></div>
                  <div>
                    <b>Phone & WhatsApp</b>
                    <p>Devastanam office: {TEMPLE.phone}<br />Mobile / WhatsApp: {TEMPLE.mobile}</p>
                  </div>
                </Reveal>
                <Reveal sparkle className="panel contact-card" delay={200}>
                  <div className="ic"><svg viewBox="0 0 24 24" {...I}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></div>
                  <div>
                    <b>Email & Channel</b>
                    <p>{TEMPLE.email}<br />YouTube: @bagalamukhitemplechandole416</p>
                  </div>
                </Reveal>
                <Reveal sparkle className="panel contact-card" delay={300}>
                  <div className="ic"><svg viewBox="0 0 24 24" {...I}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></div>
                  <div>
                    <b>Darshan timings</b>
                    <p>Morning 6:00 AM – 12:00 PM · Evening 4:30 – 8:00 PM<br />Amavasya homam: new-moon evening</p>
                  </div>
                </Reveal>
              </div>

              <Reveal sparkle className="panel" style={{ padding: "1.8rem", marginTop: "1rem" }}>
                <span className="eyebrow">దారి చూపు</span>
                <h3 className="sub-title" style={{ fontSize: "1.35rem" }}>Getting here</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: ".6rem" }}>
                  <tbody>
                    {[
                      ["By road", "On NH-216 (Ongole–Kathipudi coastal highway). ~10 km from Ponnur, ~45 km from Guntur, ~60 km from Vijayawada. Buses toward Chandole / Nagaram alight at the temple stop."],
                      ["By rail", "Nearest stations: Nidubrolu & Machavaram (~12 km) on the Guntur–Tenali–Ongole line. Autos available at the station."],
                      ["By air", "Vijayawada International (Gannavaram) ~65 km — taxis and buses via Ponnur."],
                    ].map(([k, v]) => (
                      <tr key={k} style={{ verticalAlign: "top" }}>
                        <td style={{ padding: ".55rem .8rem .55rem 0", fontWeight: 700, color: "var(--maroon-800)", whiteSpace: "nowrap", borderBottom: "1px dashed var(--line)" }}>{k}</td>
                        <td style={{ padding: ".55rem 0", color: "var(--ink-soft)", fontSize: ".93rem", borderBottom: "1px dashed var(--line)" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="map-frame">
                <iframe
                  src={TEMPLE.mapsEmbed}
                  title="Map — Sri Bhagalamukhi Devi Devastanam, Chandole"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-1">
                <a className="link-gold" href={TEMPLE.mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
              </p>

              <h3 className="sub-title mt-3" style={{ fontSize: "1.35rem" }}>Write to us</h3>
              <div className="mt-1"><ContactForm /></div>
            </Reveal>
          </div>
          <DiyaDivider />
        </div>
      </section>
    </>
  );
}
