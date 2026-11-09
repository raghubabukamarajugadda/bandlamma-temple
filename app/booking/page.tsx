import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import BookingWizard from "@/components/BookingWizard";

export const metadata: Metadata = {
  title: "Book Seva & Darshan",
  description:
    "Online seva, darshan ticket and donation booking for Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="సేవ నమోదు"
        title="Book Seva & Darshan"
        lede="Reserve your seva, darshan or Amavasya homam online — sankalpam in your name and gotram at the sannidhi."
        image="/images/deepalu.webp"
      />
      <section className="section">
        <div className="shell">
          <Suspense fallback={<div className="text-center">Loading…</div>}>
            <BookingWizard />
          </Suspense>
        </div>
      </section>
    </>
  );
}
