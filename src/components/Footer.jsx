import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__stripe" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__links">
          {footerLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="footer__link">
              {label}
            </Link>
          ))}
        </div>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/artandcheers_/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram"
          >
            <svg className="footer__instagram-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
        </div>
        <p className="footer__copy">
          Art and Cheers © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
