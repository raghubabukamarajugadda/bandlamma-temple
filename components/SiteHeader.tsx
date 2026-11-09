"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MantraRibbon from "./MantraRibbon";

const LINKS = [
  { href: "/", label: "Home", te: "హోమ్" },
  { href: "/history", label: "History", te: "చరిత్ర" },
  { href: "/sevas", label: "Sevas", te: "సేవలు" },
  { href: "/festivals", label: "Festivals", te: "ఉత్సవాలు" },
  { href: "/videos", label: "Videos", te: "వీడియోలు" },
  { href: "/gallery", label: "Gallery", te: "గ్యాలరీ" },
  { href: "/donations", label: "Donations", te: "విరాళాలు" },
  { href: "/contact", label: "Contact", te: "సంప్రదింపులు" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled || open ? "scrolled" : ""}`}>
        <div className="header-strip" aria-hidden="true">
          <MantraRibbon />
        </div>
        <div className="shell header-inner">
          <Link href="/" className="brand" aria-label="Sri Bandlamma Talli Devastanam — home">
            <img src="/images/emblem.webp" alt="" className="brand__mark brand__emblem" />
            <span className="brand__text">
              <span className="telugu">శ్రీ బండ్లమ్మ తల్లి దేవస్థానము</span>
              <span className="en">Sri Bandlamma Talli Devastanam</span>
              <small>Chandole, Andhra Pradesh</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/booking" className="btn btn--sm">
              Book Seva
            </Link>
          </nav>

          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`drawer ${open ? "open" : ""}`} aria-label="Mobile">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label} <span className="telugu">{l.te}</span>
          </Link>
        ))}
        <Link href="/booking" className="btn mt-2" style={{ alignSelf: "flex-start" }}>
          Book Seva · సేవ నమోదు
        </Link>
      </nav>
    </>
  );
}
