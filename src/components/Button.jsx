import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ to, href, children, variant = 'primary', onClick, type = 'button', className = '' }) {
  const baseClass = `btn btn--${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {children}
    </button>
  )
}
