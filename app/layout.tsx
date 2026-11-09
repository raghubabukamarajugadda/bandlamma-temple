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

const SITE_URL = "https://bandlamma-temple.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sri Bandlamma Talli Devastanam, Chandole",
    template: "%s · Sri Bandlamma Talli Devastanam, Chandole",
  },
  description:
    "Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole — the ancient Shakti kshetram of the eighth Dasha Mahavidya. Book sevas, darshan tickets and Amavasya homams online, watch daily archana videos, and learn the history of Dhanadapura.",
  keywords: [
    "Bandlamma", "Bagalamukhi", "Chandole", "temple", "devastanam",
    "Bapatla", "Andhra Pradesh", "seva booking", "Amavasya homam",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sri Bandlamma Talli Devastanam, Chandole",
    title: "శ్రీ బండ్లమ్మ తల్లి దేవస్థానము · Sri Bandlamma Talli Devastanam",
    description:
      "The ancient Shakti kshetram at Chandole, Andhra Pradesh — book sevas & darshan online, watch daily archana videos, and learn the legend of the Mother who stopped the carts.",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Sri Bandlamma Talli Devastanam emblem — Chandole" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Bandlamma Talli Devastanam, Chandole",
    description:
      "The ancient Shakti kshetram at Chandole — online sevas & darshan, archana videos, temple history.",
    images: ["/images/og.png"],
  },
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
