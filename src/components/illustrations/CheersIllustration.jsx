// Hand-drawn style cheers / wine glasses illustration
export default function CheersIllustration({ className = '', size = 80 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.1}
      viewBox="0 0 70 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Wine glass 1 */}
      <path
        d="M12 4 L12 32 Q12 42 22 42 L22 72"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
      <ellipse cx="17" cy="32" rx="10" ry="4" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Wine glass 2 */}
      <path
        d="M35 4 L35 28 Q35 38 45 38 L45 72"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
      <ellipse cx="40" cy="28" rx="10" ry="4" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Wine glass 3 */}
      <path
        d="M58 4 L58 32 Q58 42 68 42 L68 72"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
      <ellipse cx="63" cy="32" rx="10" ry="4" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}
