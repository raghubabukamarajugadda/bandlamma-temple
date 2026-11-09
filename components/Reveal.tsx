"use client";

import { useEffect, useRef } from "react";

/** Adds .in when the element scrolls into view. Optional --d stagger delay (ms). */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  style,
  sparkle = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "figure" | "li";
  style?: React.CSSProperties;
  sparkle?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ "--d": `${delay}ms`, ...style } as React.CSSProperties}
      {...(sparkle ? { "data-sparkle": "" } : {})}
    >
      {children}
    </Tag>
  );
}
