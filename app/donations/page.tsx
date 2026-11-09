import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { DiyaDivider } from "@/components/Ornaments";
import { DONATION_CAUSES, TEMPLE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Donations",
  description:
    "Support annadanam, Amavasya homams, deepa seva and temple development at Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole.",
};

export default function DonationsPage() {
  return (
    <>
      <PageHero
        eyebrow="విరాళాలు & దానధర్మం"
        title="Donations"
        lede="Every offering to Bandlamma Thalli becomes seva — a lamp lit, a devotee fed, a centuries-old sanctum kept standing."
        image="/images/annadanam.webp"
      />

      <section className="section">
        <div className="shell">
          <div className="grid grid--4">
            {DONATION_CAUSES.map((c, i) => (
              <Reveal key={c.id} delay={i * 100} sparkle className="panel don-card">
                <div className="img"><img src={c.image} alt={c.name} loading="lazy" /></div>
                <div className="body">
                  <h3>{c.name}</h3>
                  <span className="telugu" style={{ color: "var(--kumkum)", fontWeight: 700, fontSize: ".9rem" }}>{c.nameTe}</span>
                  <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: ".93rem", flex: 1 }}>{c.desc}</p>
                  <div className="amounts">
                    {c.suggested.map((a) => <span key={a}>₹{a.toLocaleString("en-IN")}</span>)}
                  </div>
                  <Link href={`/booking?type=donation&cause=${c.id}`} className="btn btn--sm" style={{ marginTop: ".4rem" }}>Donate</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="shell">
          <div className="split">
            <Reveal sparkle className="panel" style={{ padding: "2rem" }}>
              <span className="eyebrow">నేరుగా విరాళం</span>
              <h2 className="sub-title">Direct donation</h2>
              <div className="prose mt-2">
                <p>
                  Prefer to give directly? You may send your contribution by UPI or
                  bank transfer to the devastanam account, and WhatsApp the receipt
                  to <b>{TEMPLE.mobile}</b> for an acknowledgement and prasadam.
                </p>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", marginTop: ".8rem" }}>
                <tbody>
                  {[
                    ["Account name", "Sri Bhagalamukhi Devi Devastanam"],
                    ["Bank", "×××× Bank, Chandole branch"],
                    ["Account no.", "0000 0000 0000"],
                    ["IFSC", "XXXX0000000"],
                    ["UPI", "bandlamma@upi"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td style={{ padding: ".45rem 0", color: "var(--ink-soft)", borderBottom: "1px dashed var(--line)" }}>{k}</td>
                      <td style={{ padding: ".45rem 0", fontWeight: 700, textAlign: "right", borderBottom: "1px dashed var(--line)" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="notice mt-2">
                <div><b>Note:</b> bank details shown are placeholders — the devastanam office will publish the official account at launch. Donations may be eligible for 80G exemption.</div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <span className="eyebrow">నిజాయితీ</span>
              <h2 className="sub-title">Where your daanam goes</h2>
              <div className="prose mt-2">
                <p>
                  This is a village devastanam sustained entirely by devotion. Your
                  contribution directly funds the <strong>monthly Amavasya homams</strong>,
                  <strong> daily annadanam</strong>, ghee and oil for the deepalu,
                  archaka dakshina, and the slow, careful restoration of the
                  Chola-era prakaram and pushkarini steps.
                </p>
                <p>
                  Receipts are issued for every donation, and accounts are reviewed
                  by the devastanam committee each year during Jayanthi utsavam.
                </p>
              </div>
            </Reveal>
          </div>
          <DiyaDivider />
        </div>
      </section>
    </>
  );
}
