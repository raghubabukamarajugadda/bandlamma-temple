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
        lede="Choose a seva, pick your date, and our archakas will perform it in your name and gotram at the sannidhi of Bandlamma Thalli."
        image="/images/deepalu.webp"
      />
      <section className="section">
        <div className="shell">
          <SevaExplorer />

          <div className="notice mt-4" style={{ maxWidth: 760, margin: "3rem auto 0" }}>
            <div>
              <b>How online seva works:</b> book your seva and date here; the
              archaka performs it with your <em>nama-gotra-nakshatra</em> sankalpam;
              prasadam is sent by post within India (or collect at the counter).
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
