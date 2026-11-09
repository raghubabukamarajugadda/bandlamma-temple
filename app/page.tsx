import Link from "next/link";
import Reveal from "@/components/Reveal";
import TempleStatus from "@/components/TempleStatus";
import { Diya, DiyaDivider, KolamMark } from "@/components/Ornaments";
import { SEVAS, FESTIVALS, VIDEOS, TEMPLE } from "@/lib/data";
import StatBlock from "@/components/StatBlock";

export default function Home() {
  const featuredSevas = SEVAS.filter((s) =>
    ["kumkumarchana", "abhishekam", "amavasya-homam"].includes(s.id)
  );
  const upcoming = FESTIVALS.filter((f) => f.highlight).slice(0, 3);
  const videos = VIDEOS.slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__img">
          <img src="/images/hero-sannidhi.webp" alt="Divya darshanam of Sri Bandlamma Ammavaru in the golden prabhavali, Chandole" fetchPriority="high" />
        </div>
        <div className="shell hero__content">
          <div className="hero__invocation">॥ {TEMPLE.invocation} ॥</div>
          <h1 className="hero__title">
            Sri Bhagalamukhi Devi
            <span className="bandlamma">శ్రీ బండ్లమ్మ తల్లి దేవస్థానము</span>
          </h1>
          <div className="hero__place">Chandole · Bapatla Dt · Andhra Pradesh</div>
          <p className="hero__lede">
            The eighth Mahavidya, golden as turmeric — seek the blessings of
            Bandlamma Thalli for victory over every obstacle.
          </p>
          <div className="hero__ctas">
            <Link href="/booking" className="btn">Book a Seva · సేవ నమోదు</Link>
            <Link href="/videos" className="btn btn--ghost">Watch Archana Videos</Link>
          </div>
        </div>
        <div className="shell hero__tilebar">
          <div className="hero__tiles">
          <Link href="/contact" className="hero-tile" data-sparkle>
            <span className="tile-ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span>
            <span className="tile-txt"><b>Darshan Timings</b><span>6–12 · 4:30–8</span></span>
          </Link>
          <Link href="/sevas" className="hero-tile" data-sparkle>
            <span className="tile-ic"><svg viewBox="0 0 24 24"><path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z"/><path d="M5 19h14"/><path d="M7 16v3M17 16v3"/></svg></span>
            <span className="tile-txt"><b>Online Sevas</b><span>అర్చన · అభిషేకం · హోమం</span></span>
          </Link>
          <Link href="/booking?seva=amavasya-homam" className="hero-tile" data-sparkle>
            <span className="tile-ic"><svg viewBox="0 0 24 24"><path d="M12 3c2 3 4 4.6 4 7.5a4 4 0 0 1-8 0C8 7.6 10 6 12 3z"/><path d="M6 17h12l-1.5 3.5h-9z"/></svg></span>
            <span className="tile-txt"><b>Amavasya Homam</b><span>ప్రతి అమావాస్య</span></span>
          </Link>
          <Link href="/videos" className="hero-tile" data-sparkle>
            <span className="tile-ic"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="3"/><path d="M10 9.5v6l5-3z"/></svg></span>
            <span className="tile-txt"><b>Seva Videos</b><span>రోజువారీ అర్చనలు</span></span>
          </Link>
          <Link href="/donations" className="hero-tile" data-sparkle>
            <span className="tile-ic"><svg viewBox="0 0 24 24"><path d="M6 8h12v11H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M12 12v4"/></svg></span>
            <span className="tile-txt"><b>Hundi · Donate</b><span>అన్నదానం & హుండీ</span></span>
          </Link>
          <Link href="/history" className="hero-tile" data-sparkle>
            <span className="tile-ic"><svg viewBox="0 0 24 24"><path d="M4 20h16M6 20V9l6-4 6 4v11"/><path d="M10 20v-5h4v5"/></svg></span>
            <span className="tile-txt"><b>Temple History</b><span>ధనదపుర క్షేత్రం</span></span>
          </Link>
          </div>
        </div>
      </section>

      {/* ── WELCOME / ABOUT ──────────────────────────────────── */}
      <section className="section">
        <div className="shell split">
          <Reveal>
            <span className="eyebrow">క్షేత్ర మహిమ</span>
            <h2 className="sec-title">The goddess who stills<br />every storm</h2>
            <DiyaDivider />
            <div className="prose mt-3">
              <p>
                In the ancient capital of the Velanati Chodas — Dhanadapura, today's
                Chandole — resides <strong>Sri Bhagalamukhi Devi</strong>, the eighth of the
                Dasha Mahavidyas, lovingly called <strong>Bandlamma Thalli</strong> by her
                devotees. Golden as turmeric, four-armed and radiant, she is the
                Shatru-Nashini: the power that paralyses malice and grants victory.
              </p>
              <p>
                For centuries devotees have come here seeking justice in court cases,
                relief from debts, success over rivals, and peace of mind — and they
                leave with <em>pasupu</em> on their foreheads and her grace in their hearts.
              </p>
            </div>
            <div className="flex wrap mt-3">
              <Link href="/history" className="btn btn--maroon">Explore the legend</Link>
              <TempleStatus />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="arch" style={{ aspectRatio: "3/4" }}>
              <img src="/images/goddess-darshan.webp" alt="Divya darshanam of Sri Bandlamma Ammavaru with flower alankaram" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TIMINGS ──────────────────────────────────────────── */}
      <section className="section--tight">
        <div className="shell">
          <div className="timing-cards">
            <Reveal sparkle className="panel timing-card">
              <div className="card-diya"><Diya /></div>
              <div className="telugu">ఉదయ దర్శనం</div>
              <div className="big">Morning</div>
              <div className="time">6:00 AM – 12:00 PM</div>
              <small>Suprabhata seva, abhishekam & alankaram</small>
            </Reveal>
            <Reveal sparkle className="panel timing-card" delay={120}>
              <div className="card-diya"><Diya /></div>
              <div className="telugu">సాయంత్ర దర్శనం</div>
              <div className="big">Evening</div>
              <div className="time">4:30 PM – 8:00 PM</div>
              <small>Nivedana, doopa seva & mangala harathi</small>
            </Reveal>
            <Reveal sparkle className="panel timing-card" delay={240}>
              <div className="card-diya"><Diya /></div>
              <div className="telugu">ప్రత్యేకత</div>
              <div className="big">Amavasya</div>
              <div className="time">Divya Homam · evening</div>
              <small>The signature homam of this kshetram</small>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SEVAS PREVIEW ────────────────────────────────────── */}
      <section className="section" style={{ background: "linear-gradient(180deg, transparent, rgba(227,171,41,.08))" }}>
        <div className="shell">
          <div className="sec-head">
            <KolamMark />
            <span className="eyebrow">సేవలు & హోమాలు</span>
            <h2 className="sec-title">Offerings to Ammavaru</h2>
            <p className="lede">Book sevas online and receive prasadam and the Goddess's blessings from wherever you are.</p>
            <DiyaDivider />
          </div>
          <div className="grid grid--3">
            {featuredSevas.map((s, i) => (
              <Reveal key={s.id} delay={i * 120} sparkle className="panel seva-card">
                <div className="seva-card__img">
                  <img src={s.image} alt={s.name} loading="lazy" />
                  <span className="tag">{s.category === "homam" ? "Homam" : "Nitya Seva"}</span>
                </div>
                <div className="seva-card__body">
                  <h3>{s.name}</h3>
                  <span className="te">{s.nameTe} · {s.when}</span>
                  <p>{s.desc}</p>
                  <div className="seva-card__foot">
                    <span className="price">₹{s.price.toLocaleString("en-IN")}<small>per seva</small></span>
                    <Link href={`/booking?seva=${s.id}`} className="btn btn--sm">Book</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link href="/sevas" className="btn btn--line">View all sevas & darshan tickets</Link>
          </div>
        </div>
      </section>

      {/* ── BELIEF STRIP ─────────────────────────────────────── */}
      <section className="section belief">
        <img src="/images/kolam-pattern.webp" alt="" aria-hidden="true" className="kolam-mark" />
        <div className="shell">
          <div className="sec-head">
            <span className="eyebrow">భక్తుల నమ్మకం</span>
            <h2 className="sec-title">Why devotees seek Bandlamma</h2>
            <p className="lede">
              వాక్ స్తంభన — she silences the voice of the unjust. Her devotees
              believe one sincere prayer here turns the tide.
            </p>
            <DiyaDivider />
          </div>
          <div className="stat-row">
            <StatBlock icon="lotus" value={8} suffix="th" en="of the Dasha Mahavidyas" te="దశమహావిద్యలో" />
            <StatBlock icon="gopuram" value={850} suffix="+" en="years of recorded history" te="శాసనాల చరిత్ర" delay={100} />
            <StatBlock icon="flame" value={12} en="Amavasya homams a year" te="నెలకో దివ్య హోమం" delay={200} />
            <StatBlock icon="star" value={4.8} decimals={1} suffix="★" en="devotee rating on Google" te="భక్తుల ప్రశంసలు" delay={300} />
          </div>
        </div>
      </section>

      {/* ── FESTIVALS PREVIEW ────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <div className="sec-head">
            <span className="eyebrow">ఉత్సవాలు</span>
            <h2 className="sec-title">Days the kshetram glows</h2>
            <DiyaDivider />
          </div>
          <div className="fest-list">
            {upcoming.map((f, i) => (
              <Reveal key={f.name} delay={i * 100} sparkle className="panel fest highlight">
                <div className="moon">{f.nameTe}</div>
                <div>
                  <h3>{f.name}</h3>
                  <div className="when">{f.when}</div>
                  <p>{f.desc}</p>
                </div>
                <span className="tagline">Utsavam</span>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link href="/festivals" className="btn btn--line">Full utsavam calendar</Link>
          </div>
        </div>
      </section>

      {/* ── VIDEOS PREVIEW ───────────────────────────────────── */}
      <section className="section dark">
        <div className="shell">
          <div className="sec-head">
            <span className="eyebrow">దైనందిన సేవలు</span>
            <h2 className="sec-title">From our YouTube channel</h2>
            <p className="lede">Daily archanas, alankarams and Amavasya homams — streamed from the sannidhi.</p>
            <DiyaDivider />
          </div>
          <div className="grid grid--3">
            {videos.map((v, i) => (
              <Reveal key={v.id} delay={i * 120}>
                <Link href="/videos" className="video-card" data-sparkle style={{ textDecoration: "none" }}>
                  <div className="thumb">
                    <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" />
                    <span className={`badge ${v.tag === "live" ? "live" : ""}`}>{v.tag === "live" ? "Live" : v.tag}</span>
                    <span className="play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span></span>
                  </div>
                  <div className="meta">
                    <b>{v.title}</b>
                    {v.titleTe && <span className="te">{v.titleTe}</span>}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-3">
            <a href={TEMPLE.youtube} target="_blank" rel="noreferrer" className="btn btn--ghost">Subscribe on YouTube</a>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ───────────────────────────────────────── */}
      <section className="section">
        <div className="shell split split--rev">
          <Reveal delay={120}>
            <div className="arch" style={{ aspectRatio: "16/11" }}>
              <img src="/images/annadanam.webp" alt="Annadanam — devotees served prasadam on banana leaves" />
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">అన్నదాన మహిమ</span>
            <h2 className="sec-title">Annadānam — the highest offering</h2>
            <div className="prose mt-2">
              <p>
                Of all gifts, the gift of food is the greatest. Sponsor a day's
                anna-prasadam at the kshetram in your family's name, in memory of
                your elders, or simply out of gratitude to Bandlamma Thalli.
              </p>
            </div>
            <div className="flex wrap mt-3">
              <Link href="/donations" className="btn">Donate · విరాళం</Link>
              <Link href="/booking?seva=annadanam" className="btn btn--line">Sponsor a day · ₹5,016</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
