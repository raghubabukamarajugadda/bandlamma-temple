"use client";

import { useEffect, useRef, useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  lotus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4c1.5 2 2.2 3.6 2.2 5.2a2.2 2.2 0 0 1-4.4 0C9.8 7.6 10.5 6 12 4z" />
      <path d="M5.5 8.5c2.2.6 3.7 1.6 4.5 3M18.5 8.5c-2.2.6-3.7 1.6-4.5 3" />
      <path d="M3.5 13c1.8 3 5 4.5 8.5 4.5S18.7 16 20.5 13" />
      <path d="M7 20h10" />
    </svg>
  ),
  gopuram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3h4l-1 2.5h-2L10 3z" />
      <path d="M8 7h8l-1.5 3h-5L8 7z" />
      <path d="M6 12h12l-2 3.5H8L6 12z" />
      <path d="M5 17h14v5H5z" />
      <path d="M12 17a1.8 1.8 0 0 1 1.8 1.8V22h-3.6v-3.2A1.8 1.8 0 0 1 12 17z" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c2.2 3.2 4.2 5 4.2 7.8a4.2 4.2 0 0 1-8.4 0C7.8 8 9.8 6.2 12 3z" />
      <path d="M12 9.5c1 1.5 1.8 2.4 1.8 3.7a1.8 1.8 0 0 1-3.6 0c0-1.3.8-2.2 1.8-3.7z" />
      <path d="M7 18.5h10l-1.5 3h-7L7 18.5z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3.5z" />
    </svg>
  ),
};

export default function StatBlock({
  icon,
  value,
  suffix = "",
  en,
  te,
  decimals = 0,
  delay = 0,
}: {
  icon: keyof typeof ICONS;
  value: number;
  suffix?: string;
  en: string;
  te: string;
  decimals?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const t0 = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="reveal stat" data-sparkle style={{ "--d": `${delay}ms` } as React.CSSProperties}>
      <span className="stat__ic">{ICONS[icon]}</span>
      <b>
        {n.toFixed(decimals)}
        {suffix && <small>{suffix}</small>}
      </b>
      <span className="stat__en">{en}</span>
      <span className="stat__te">{te}</span>
    </div>
  );
}
