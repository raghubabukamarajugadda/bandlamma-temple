"use client";

import { useCallback, useEffect, useState } from "react";

export type GImage = { src: string; caption: string; captionTe?: string };

export default function GalleryLightbox({ images }: { images: GImage[] }) {
  const [idx, setIdx] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const move = useCallback(
    (dir: 1 | -1) => setIdx((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, move]);

  return (
    <>
      <div className="masonry">
        {images.map((im, i) => (
          <figure key={im.src} className="g-item" onClick={() => setIdx(i)}>
            <img src={im.src} alt={im.caption} loading="lazy" />
            <figcaption>{im.caption}</figcaption>
          </figure>
        ))}
      </div>

      {idx !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <button className="lb-btn lb-close" onClick={close}>✕ Close</button>
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous">‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={images[idx].src} alt={images[idx].caption} />
            <figcaption>{images[idx].captionTe || images[idx].caption}</figcaption>
          </figure>
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
