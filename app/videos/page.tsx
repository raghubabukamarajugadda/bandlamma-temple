import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VideoGrid from "@/components/VideoGrid";
import { DiyaDivider } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Archana Videos",
  description:
    "Daily archanas, alankarams and Amavasya divya homams from Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole — watch on the temple's official YouTube channel.",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="దైనందిన సేవలు"
        title="Archana & Seva Videos"
        lede="The devastanam streams daily sevas, alankarams and the Amavasya divya homam on its official YouTube channel — darshan from wherever you are."
        image="/images/festival-utsavam.webp"
      />
      <section className="section">
        <div className="shell">
          <VideoGrid />
          <div className="notice mt-4" style={{ maxWidth: 700, margin: "3rem auto 0" }}>
            <div>
              <b>Never miss a seva:</b> subscribe and tap the bell on the channel —
              the <b>Amavasya Divya Homam</b> is streamed live every new-moon
              evening, and daily archanas are uploaded each morning.
            </div>
          </div>
          <DiyaDivider />
        </div>
      </section>
    </>
  );
}
