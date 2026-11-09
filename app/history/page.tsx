import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { DiyaDivider, KolamMark } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Temple History",
  description:
    "The true legend of Sri Bandlamma Talli (Bagalamukhi) of Chandole — the bullock carts she stilled, the vigraham found beneath them, and the history of Dhanadapura, capital of the Velanati Chodas.",
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="క్షేత్ర చరిత్ర"
        title="History & Legend"
        lede="The bullock carts that could not move — the true story of how Bandlamma Thalli chose Chandole, and the royal city she watched over."
        image="/images/bandlamma-carts.webp"
      />

      {/* ── THE LEGEND ── */}
      <section className="section">
        <div className="shell split">
          <Reveal>
            <span className="eyebrow">ఆవిర్భావం · బండ్లమ్మ పేరు వెనుక</span>
            <h2 className="sec-title">The Mother who stopped the carts</h2>
            <DiyaDivider />
            <div className="prose mt-3">
              <p>
                Centuries ago, stone was being carted through Chandole for the
                construction of the Sri Chennakesava Swamy temple. When two
                bullock carts — <em>rendu edla bandlu</em> — reached the spot
                where the devastanam stands today, they simply
                <strong> stopped</strong>. However hard the carters pushed and
                the oxen strained, the wheels would not turn another inch.
              </p>
              <p>
                Sensing the divine, the villagers dug at that very place — and
                from the earth emerged the <strong>moola vigraham of the
                Ammavaru</strong>. The temple was raised from those same
                cart-stones, and because she had stilled the <em>bandlu</em>,
                she has been worshipped ever since as <strong>Bandlamma</strong> —
                the Mother of the carts. A plaque in the temple pranganam still
                records this story.
              </p>
              <p>
                Her first miracle at Chandole was itself
                <strong> stambhana</strong> — the stilling that is the very power
                of <strong>Bagalamukhi</strong>, eighth of the Dasha Mahavidyas.
                In puranic telling she rose golden from the
                <em> Haridra Sarovaram</em> to calm a cosmic storm; here she
                stilled the carts that carried the stones — the same shakti,
                revealed on a village path.
              </p>
              <p>
                Because she rose from turmeric, <strong>pasupu</strong> is her
                essence: devotees offer yellow cloth, yellow flowers, turmeric
                and kumkuma — and she is called <em>Pitambara</em>, the
                yellow-clad one.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="arch" style={{ aspectRatio: "16/13" }}>
              <img src="/images/bandlamma-carts.webp" alt="The legend of Bandlamma — bullock carts laden with temple stones halted while villagers unearth the Ammavaru vigraham" />
            </div>
            <div className="notice mt-3">
              <div>
                <b>బండ్లమ్మ</b> — <em>bandlu</em> (bullock carts) + <em>amma</em>:
                the Mother who would not let the carts pass. Her very name
                remembers the stilling — a Dravidian gramadevata worshipped
                here in the form of Bagalamukhi.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OFFICIAL CHARITRA VIDEO ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal>
            <div className="panel video-feature" data-sparkle>
              <div className="video-feature__frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/PSYooJT7cqw"
                  title="Prachina Sri Bandlamma — Sri Bagalamukhi Ammavari Charitra, official temple video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="video-feature__txt">
                <span className="eyebrow">అమ్మవారి చరిత్ర</span>
                <h3>The Charitra, told by the devastanam</h3>
                <p>
                  Watch <em>Prachina Sri Bandlamma — Sri Bagalamukhi Ammavari
                  Charitra</em>, the temple's own telling of the legend — from
                  the carts that stood still to the centuries of worship that
                  followed.
                </p>
                <a
                  href="https://youtube.com/@bagalamukhitemplechandole416"
                  target="_blank" rel="noreferrer" className="link-gold"
                >
                  More on the official channel →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE GODDESS ── */}
      <section className="section belief">
        <img src="/images/kolam-pattern.webp" alt="" aria-hidden="true" className="kolam-mark" />
        <div className="shell split split--rev">
          <Reveal delay={150}>
            <div className="arch" style={{ aspectRatio: "3/4" }}>
              <img src="/images/goddess-bhagalamukhi.webp" alt="Iconography of Sri Bagalamukhi — four-armed, golden, holding the demon's tongue and mudgara" />
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">అమ్మవారి రూపం</span>
            <h2 className="sec-title">Chaturbhuja, golden as dawn</h2>
            <DiyaDivider />
            <div className="prose mt-3" style={{ color: "rgba(251,241,218,.85)" }}>
              <p style={{ color: "rgba(251,241,218,.85)" }}>
                At Chandole the Ammavaru blesses devotees in her
                <strong> chaturbhuja</strong> (four-armed) form, glowing with a
                turmeric-golden complexion. In one hand she stills the tongue of
                a demon — the silencing of slander, false testimony and hostile
                words. In another she bears the <em>mudgara</em>, the club of
                righteous force. Her remaining hands extend <em>abhaya</em> —
                fearlessness — and <em>varada</em>, the granting of boons.
              </p>
              <p style={{ color: "rgba(251,241,218,.85)" }}>
                The white crane that stands beside her, the <em>bagula</em>
                (heron), gives the Goddess her name. Like the crane that waits
                motionless for its prey, her stillness is watchful power — the
                power that ends quarrels, wins disputes, and brings restless
                minds to peace.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DHANADAPURA / TIMELINE ── */}
      <section className="section">
        <div className="shell">
          <div className="sec-head">
            <KolamMark />
            <span className="eyebrow">ధనదపుర</span>
            <h2 className="sec-title">Chandole — the city compared to Alakapuri</h2>
            <p className="lede">
              Long before it became a quiet village on the Krishna delta, Chandole
              was <strong>Dhanadapura</strong> — the capital of the Velanati Chodas,
              a city 12th-century poets likened to Kubera's own Alakapuri for its
              wealth and splendour.
            </p>
            <DiyaDivider />
          </div>

          <div className="split" style={{ alignItems: "start" }}>
            <Reveal>
              <div className="timeline">
                <div className="tl-item">
                  <span className="yr">Ancient era</span>
                  <h3>On the banks of the Krishna</h3>
                  <p>The Krishna-delta land around Chandole is ancient — at nearby Bhattiprolu archaeologists uncovered a stupa of the 3rd–2nd century BCE, and at Buddham a bronze Buddha dated to the 8th century CE. A mound outside the village may yet hold Buddhist remains.</p>
                </div>
                <div className="tl-item">
                  <span className="yr">12th century CE</span>
                  <h3>Capital of the Velanati Chodas</h3>
                  <p>Chandole — then called Dhanadapura or Tsandavolu — was the seat of the Velanati Choda chiefs of the Durjaya family, of whom Rajendra Choda I is the most celebrated. The Keyura-bahu-charitramu praised its opulent markets; scholars like Mallikarjuna Panditaradhyudu debated in its royal court.</p>
                </div>
                <div className="tl-item">
                  <span className="yr">1154 · 1171 · 1176 CE</span>
                  <h3>The temple inscriptions</h3>
                  <p>Four stone inscriptions are preserved in the temple — three bearing these dates — epigraphic proof that the kshetram was thriving and royally patronised nearly nine centuries ago.</p>
                </div>
                <div className="tl-item">
                  <span className="yr">Chola era</span>
                  <h3>A sacred complex of three temples</h3>
                  <p>The royal past left Chandole three historic temples — the Shiva temple of Sri Lingodbhava Swamy, the Vishnu temple of Sri Chennakesava Swamy, and the Bandlamma devastanam — all enduring monuments of the era.</p>
                </div>
                <div className="tl-item">
                  <span className="yr">2019 CE</span>
                  <h3>An 855-year-old record resurfaces</h3>
                  <p>A Telugu pillar inscription of Kulotthunga Rajendra Choda — a Velanati chief who ruled from Chandolu — was rediscovered at Enikepadu near Vijayawada, reaffirming how far Dhanadapura's writ once ran.</p>
                </div>
                <div className="tl-item">
                  <span className="yr">Today</span>
                  <h3>A protected monument, a living kshetram</h3>
                  <p>Both the Bandlamma devastanam and a ruined 15th–16th-century fort nearby are recognised protected monuments. The temple remains a living seat of Shakti worship — daily sevas, monthly Amavasya homams, and Jayanthi and Navaratri utsavams drawing devotees from across the Telugu states and beyond.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="arch arch--sm" style={{ aspectRatio: "4/3" }}>
                <img src="/images/temple-chandole.webp" alt="Sri Bandlamma Talli Devastanam, Chandole — the temple at dawn with oil lamps and offerings" />
              </div>
              <div className="notice mt-3">
                <div>
                  <b>Also in the kshetra complex:</b> Sri Lingodbhava Swamy (Shiva)
                  and Sri Chennakesava Swamy (Vishnu) temples, both built in the
                  Chola period — ask at the devastanam office for a guided darshan.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY DEVOTEES COME ── */}
      <section className="section" style={{ background: "linear-gradient(180deg, rgba(227,171,41,.08), transparent)" }}>
        <div className="shell">
          <div className="sec-head">
            <span className="eyebrow">విశేషం</span>
            <h2 className="sec-title">What devotees pray for here</h2>
            <DiyaDivider />
          </div>
          <div className="grid grid--4">
            {[
              { t: "Court cases & disputes", te: "కోర్టు కేసులు", d: "The stambhana shakti stills hostile testimony — devotees come for justice and verdicts in their favour." },
              { t: "Victory over rivals", te: "శత్రు జయం", d: "As Shatru-Nashini, Bandlamma is invoked to overcome enemies, competition and unseen ill-will." },
              { t: "Freedom from debts", te: "అప్పుల విముక్తి", d: "The Goddess of Dhanadapura is prayed to for release from debt and the return of prosperity." },
              { t: "Marriage & peace of mind", te: "వివాహం & శాంతి", d: "Young people seeking marriage, and restless minds seeking shanti, find their prayers answered here." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100} className="panel" style={{ padding: "1.5rem 1.4rem" }}>
                <span className="telugu" style={{ color: "var(--kumkum)", fontWeight: 700 }}>{c.te}</span>
                <h3 style={{ fontSize: "1.3rem", margin: ".3rem 0 .5rem" }}>{c.t}</h3>
                <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: ".93rem" }}>{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
