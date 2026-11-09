"use client";

import { useCallback, useEffect, useState } from "react";
import { VIDEOS, TEMPLE, type TempleVideo } from "@/lib/data";
import Reveal from "./Reveal";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "live", label: "Live / Homam" },
  { key: "seva", label: "Sevas" },
  { key: "darshan", label: "Darshan & Alankaram" },
  { key: "special", label: "Special" },
] as const;

const yt = (id: string) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

export default function VideoGrid() {
  const [f, setF] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [play, setPlay] = useState<TempleVideo | null>(null);
  const featured = VIDEOS[0];
  const list = VIDEOS.filter((v) => f === "all" || v.tag === f).filter((v) => v.id !== featured.id);

  const close = useCallback(() => setPlay(null), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = play ? "hidden" : "";
  }, [play]);

  return (
    <>
      {/* featured live embed */}
      <div className="video-featured" style={{ maxWidth: 900, margin: "0 auto 2.6rem" }}>
        <iframe
          src={yt(featured.id)}
          title={featured.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="text-center" style={{ marginTop: "-1.6rem", marginBottom: "2.4rem" }}>
        <span className="tagline">Featured · {featured.title}</span>
      </p>

      <div className="chips" role="tablist" aria-label="Filter videos">
        {FILTERS.map((c) => (
          <button key={c.key} role="tab" aria-selected={f === c.key}
            className={`chip ${f === c.key ? "on" : ""}`} onClick={() => setF(c.key)}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid--3">
        {list.map((v, i) => (
          <Reveal key={v.id} delay={(i % 3) * 90}>
            <button className="video-card" data-sparkle onClick={() => setPlay(v)} aria-label={`Play ${v.title}`}>
              <div className="thumb">
                <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
                <span className={`badge ${v.tag === "live" ? "live" : ""}`}>{v.tag === "live" ? "Live" : v.tag}</span>
                <span className="play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span></span>
              </div>
              <div className="meta">
                <b>{v.title}</b>
                {v.titleTe && <span className="te"> {v.titleTe}</span>}
                {v.date && <div><small>{v.date}</small></div>}
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-4">
        <a className="btn btn--wrap" href={TEMPLE.youtube} target="_blank" rel="noreferrer">
          Visit official channel
          <span style={{ fontWeight: 500, opacity: .8 }}>@bagalamukhitemplechandole416</span>
        </a>
      </div>

      {play && (
        <div className="video-modal" onClick={close} role="dialog" aria-modal="true" aria-label={play.title}>
          <div className="video-modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal__close" onClick={close}>✕ Close</button>
            <iframe src={yt(play.id)} title={play.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </div>
        </div>
      )}
    </>
  );
}
