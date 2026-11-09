export function TempleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* golden kalasam atop a gopuram silhouette */}
      <g fill="#e3ab29">
        <path d="M32 2c1.5 2.3 2.5 3.6 2.5 5.1a2.5 2.5 0 1 1-5 0C29.5 5.6 30.5 4.3 32 2z" fill="#f2cd6d" />
        <path d="M28 12h8l-1.2 4h-5.6L28 12z" />
        <path d="M23 18h18l-2.2 5H25.2L23 18z" />
        <path d="M18 25h28l-2.6 5.5H20.6L18 25z" />
        <path d="M13 32h38l-3 6H16l-3-6z" />
        <path d="M9 40h46l-3.4 6.5H12.4L9 40z" />
        <path d="M6 48h52l-2.6 5H8.6L6 48z" />
        <rect x="10" y="54" width="44" height="8" rx="1.5" />
        {/* doorway */}
        <path d="M32 54a4.5 4.5 0 0 1 4.5 4.5V62h-9v-3.5A4.5 4.5 0 0 1 32 54z" fill="#43090e" />
      </g>
    </svg>
  );
}

export function Diya() {
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true">
      {/* flames */}
      <g className="flame">
        <path d="M30 2c3 4.5 5 7.1 5 10.1a5 5 0 1 1-10 0C25 9.1 27 6.5 30 2z" fill="#e3ab29" />
        <path d="M30 8.5c1.7 2.5 2.8 4 2.8 5.7a2.8 2.8 0 1 1-5.6 0c0-1.7 1.1-3.2 2.8-5.7z" fill="#f8e2a0" />
      </g>
      {/* bowl */}
      <path d="M12 26h36l-3.6 6a9 9 0 0 1-7.8 4.4H23.4A9 9 0 0 1 15.6 32L12 26z" fill="#b3271e" />
      <path d="M12 26h36l-1.2 2H13.2l-1.2-2z" fill="#d6472e" />
      <ellipse cx="30" cy="26" rx="19" ry="3" fill="#e3ab29" />
    </svg>
  );
}

export function DiyaDivider() {
  return (
    <div className="diya-divider" aria-hidden="true">
      <Diya />
    </div>
  );
}

export function KolamMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/kolam-pattern.webp"
      alt=""
      aria-hidden="true"
      className={`kolam-mark ${className}`}
      loading="lazy"
    />
  );
}

export function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 1 6 6c0 4 1.5 5.5 2.5 6.5H3.5C4.5 14.5 6 13 6 9a6 6 0 0 1 6-6z" />
      <path d="M10 19a2.2 2.2 0 0 0 4 0" />
    </svg>
  );
}
