import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.svg" alt="Art and Cheers" className="header__logo-img" />
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/events"
            className="header__cta"
            onClick={() => setMenuOpen(false)}
          >
            Book now
          </Link>
        </nav>

        <button
          type="button"
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__hamburger-line" />
          <span className="header__hamburger-line" />
          <span className="header__hamburger-line" />
        </button>
      </div>
      <div className="header__divider" />
    </header>
  )
}
