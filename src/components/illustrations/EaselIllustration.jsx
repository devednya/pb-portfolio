// Hand-drawn style easel illustration – sketch-like outlines
export default function EaselIllustration({ className = '', size = 80 }) {
  return (
    <svg
      className={`easel-illustration ${className}`}
      width={size}
      height={size * 1.2}
      viewBox="0 0 60 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Canvas on easel */}
      <rect
        x="8"
        y="4"
        width="44"
        height="36"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
      {/* Abstract wavy shape on canvas */}
      <path
        d="M18 18 Q28 12 38 18 T58 22"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        style={{ strokeLinecap: 'round' }}
      />
      {/* Easel legs */}
      <path
        d="M26 40 L20 72 M34 40 L40 72 M30 40 L30 72"
        stroke="currentColor"
        strokeWidth="2"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
      {/* Cross bar */}
      <path
        d="M18 42 L42 42"
        stroke="currentColor"
        strokeWidth="2"
        style={{ strokeLinecap: 'round' }}
      />
    </svg>
  )
}
