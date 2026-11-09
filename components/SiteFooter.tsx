import Link from "next/link";
import { TEMPLE } from "@/lib/data";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <div className="flex">
            <img src="/images/emblem.webp" alt="" className="brand__mark brand__emblem" />
            <div>
              <div className="telugu">శ్రీ బండ్లమ్మ తల్లి దేవస్థానము</div>
              <div style={{ fontSize: ".85rem", opacity: .8 }}>Sri Bandlamma Talli Devastanam · Chandole, Andhra Pradesh</div>
            </div>
          </div>
          <p>
            The ancient Shakti kshetram of the eighth Dasha Mahavidya at Chandole —
            the Dhanadapura of the Velanati Chodas. సకలాభీష్ట సిద్ధి క్షేత్రం.
          </p>
          <p className="mt-2" style={{ fontSize: ".85rem" }}>
            {TEMPLE.address}
          </p>
        </div>

        <div>
          <h4>Temple</h4>
          <Link href="/history">History & Legend</Link>
          <Link href="/festivals">Utsavams</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/videos">Archana Videos</Link>
          <Link href="/contact">Reach Us</Link>
        </div>

        <div>
          <h4>Devotee Services</h4>
          <Link href="/sevas">Online Sevas</Link>
          <Link href="/booking">Book Seva / Darshan</Link>
          <Link href="/booking?tab=mybookings">My Bookings</Link>
          <Link href="/donations">Donations</Link>
          <a href={TEMPLE.youtube} target="_blank" rel="noreferrer">YouTube Channel</a>
        </div>

        <div>
          <h4>Darshan Timings</h4>
          <p style={{ fontSize: ".93rem", margin: 0 }}>
            Morning · 6:00 AM – 12:00 PM<br />
            Evening · 4:30 PM – 8:00 PM<br />
            <span style={{ opacity: .7 }}>Amavasya homam: every new moon, evening.</span>
          </p>
          <h4 className="mt-2">Contact</h4>
          <p style={{ fontSize: ".93rem", margin: 0 }}>
            {TEMPLE.phone}<br />
            {TEMPLE.mobile}<br />
            <a href={`mailto:${TEMPLE.email}`} style={{ padding: 0, display: "inline" }}>{TEMPLE.email}</a>
          </p>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {year} Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole. All rights reserved.</span>
        <span className="telugu">శ్రీ బగళాముఖ్యై నమః ॥</span>
        <span className="footer-credit">
          Designed &amp; developed by{" "}
          <a href="https://anvino.tech" target="_blank" rel="noreferrer">
            Anvino Tech Software Solution
          </a>
        </span>
      </div>
    </footer>
  );
}
