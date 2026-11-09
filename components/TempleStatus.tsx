"use client";

import { useEffect, useState } from "react";

/** Live open/closed status from temple hours: 6:00–12:00 and 16:30–20:00. */
export default function TempleStatus() {
  const [state, setState] = useState<"open" | "closed" | null>(null);

  useEffect(() => {
    const check = () => {
      const h = new Date().getHours() + new Date().getMinutes() / 60;
      setState((h >= 6 && h < 12) || (h >= 16.5 && h < 20) ? "open" : "closed");
    };
    check();
    const t = setInterval(check, 60_000);
    return () => clearInterval(t);
  }, []);

  if (state === null) return <span className="status-pill">Checking…</span>;
  return (
    <span className={`status-pill ${state === "closed" ? "closed" : ""}`}>
      <span className="dot" />
      {state === "open" ? "Temple open now" : "Temple closed · opens 6 AM / 4:30 PM"}
    </span>
  );
}
