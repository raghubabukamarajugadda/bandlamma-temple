import type { Metadata } from "next";
import { Cormorant_Garamond, Karla, Noto_Serif_Telugu, Ramabhadra } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SparkleLayer from "@/components/SparkleLayer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const telugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-telugu",
});

const teluguDisplay = Ramabhadra({
  subsets: ["telugu"],
  weight: "400",
  variable: "--font-telugu-display",
});

export const metadata: Metadata = {
  title: {
    default: "Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole",
    template: "%s · Sri Bandlamma Devastanam, Chandole",
  },
  description:
    "Official website of Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole — the ancient Shakti kshetram of the eighth Dasha Mahavidya. Book sevas, darshan tickets and Amavasya homams online, watch daily archana videos, and learn the history of Dhanadapura.",
  keywords: [
    "Bandlamma", "Bagalamukhi", "Chandole", "temple", "devastanam",
    "Bapatla", "Andhra Pradesh", "seva booking", "Amavasya homam",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${telugu.variable} ${teluguDisplay.variable}`}>
      <body>
        <SparkleLayer />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
