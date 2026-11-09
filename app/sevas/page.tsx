import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SevaExplorer from "@/components/SevaExplorer";
import { DiyaDivider } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Online Sevas",
  description:
    "Book sevas, homams and darshan tickets online at Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole — archana, kumkumarchana, abhishekam, Amavasya divya homam and more.",
};

export default function SevasPage() {
  return (
    <>
      <PageHero
        eyebrow="సేవలు & హోమాలు"
        title="Online Sevas"
        lede="Darshan tickets, nitya sevas, homams, vahana pooja, accommodation and postal prasadam — book online and everything is arranged for you at the sannidhi of Bandlamma Thalli."
        image="/images/deepalu.webp"
      />
      <section className="section">
        <div className="shell">
          <SevaExplorer />

          <div className="notice mt-4" style={{ maxWidth: 760, margin: "3rem auto 0" }}>
            <div>
              <b>How booking works:</b> pick a seva, darshan slot, room or prasadam
              pack here — sevas are performed with your <em>nama-gotra-nakshatra</em>{" "}
              sankalpam, and prasadam is dispatched by post within India.
              For same-day or urgent sankalpam call the devastanam office at{" "}
              <b>086432 55155</b>.
            </div>
          </div>
          <DiyaDivider />
        </div>
      </section>
    </>
  );
}
