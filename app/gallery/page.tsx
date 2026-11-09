import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryLightbox, { type GImage } from "@/components/GalleryLightbox";
import { DiyaDivider } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Glimpses of Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole — the sannidhi, sevas, utsavams and the golden kshetram.",
};

const IMAGES: GImage[] = [
  { src: "/images/hero-temple.webp", caption: "The devastanam at dawn — gopuram, dwajasthambam and deepalu", captionTe: "ఉదయం ఆలయ దర్శనం" },
  { src: "/images/goddess-darshan.webp", caption: "Divya darshanam — Ammavaru in full alankaram", captionTe: "అమ్మవారి దివ్య దర్శనం" },
  { src: "/images/festival-utsavam.webp", caption: "Utsavam night — ratham, lamps and the village in celebration", captionTe: "ఉత్సవ సందడి" },
  { src: "/images/haridra-sarovaram.webp", caption: "The legend — emergence from the Haridra Sarovaram", captionTe: "హరిద్రా సరోవరం" },
  { src: "/images/homam.webp", caption: "Amavasya divya homam at the homa kundam", captionTe: "దివ్య హోమం" },
  { src: "/images/deepalu.webp", caption: "Rows of deepalu before the sannidhi", captionTe: "దీపాల వెలుగు" },
  { src: "/images/abhishekam.webp", caption: "Pasupu, kumkuma and pushpa — the day's offerings", captionTe: "పూజా సామగ్రి" },
  { src: "/images/temple-chandole.webp", caption: "The devastanam at dawn — deepalu and pasupu at the threshold", captionTe: "ఉదయ దర్శనం" },
  { src: "/images/annadanam.webp", caption: "Nitya annadanam — prasadam on banana leaves", captionTe: "అన్నదానం" },
  { src: "/images/kolam-pattern.webp", caption: "Kolam — the geometry of auspiciousness", captionTe: "ముగ్గు" },
  { src: "/images/goddess-bhagalamukhi.webp", caption: "Sri Bagalamukhi — the eighth Mahavidya, golden as turmeric", captionTe: "శ్రీ బగళాముఖి" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="చిత్రమాలిక"
        title="Gallery"
        lede="Golden mornings, glowing deepalu and the Goddess in her splendour — moments from the kshetram."
        image="/images/goddess-darshan.webp"
      />
      <section className="section">
        <div className="shell">
          <GalleryLightbox images={IMAGES} />
          <DiyaDivider />
        </div>
      </section>
    </>
  );
}
