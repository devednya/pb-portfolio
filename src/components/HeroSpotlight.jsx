import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import './HeroSpotlight.css'

// Decorative SVGs – in margins, move with cursor
const HERO_SVGS = [
  { src: '/images/hero/image%2011.svg', alt: '', className: 'hero__deco hero__deco--1' },
  { src: '/images/hero/image%2012.svg', alt: '', className: 'hero__deco hero__deco--2' },
  { src: '/images/hero/image%2013.svg', alt: '', className: 'hero__deco hero__deco--3' },
  { src: '/images/hero/image%2014.svg', alt: '', className: 'hero__deco hero__deco--4' },
]

// Three hero photos: outdoor paint event, group session, ART & CHEERS clay
const HERO_IMAGES = [
  { src: '/images/events/sip-and-paint/IMG-20260213-WA0001.jpg', alt: 'Art and Cheers outdoor paint event', className: 'hero__collage-img hero__collage-img--main' },
  { src: '/images/events/sip-and-paint/IMG-20250511-WA0035.jpg', alt: 'Group paint and sip session', className: 'hero__collage-img hero__collage-img--top' },
  { src: '/images/events/sip-and-paint/IMG-20250719-WA0007.jpg', alt: 'ART & CHEERS', className: 'hero__collage-img hero__collage-img--right' },
]

export default function HeroSpotlight() {
  const wrapRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      setMouse({ x, y })
    }

    const handleLeave = () => setMouse({ x: 0, y: 0 })

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <section className="hero hero--collage">
      <div className="hero__inner">
        <div ref={wrapRef} className="hero__collage-wrap" style={{ '--mouse-x': mouse.x, '--mouse-y': mouse.y }}>
          <div className="hero__collage">
            {HERO_IMAGES.map((img, i) => (
              <div key={i} className={img.className} style={{ animationDelay: `${i * 0.15}s` }}>
                <img src={img.src} alt={img.alt} loading="eager" />
              </div>
            ))}
          </div>
          <div className="hero__decos" aria-hidden="true">
            {HERO_SVGS.map(({ src, alt, className }, i) => (
              <img key={i} src={src} alt={alt} className={className} loading="eager" />
            ))}
          </div>
        </div>

        <h1 className="hero__title">
          Come for the paint, <em>stay for the feeling.</em>
        </h1>
        <p className="hero__text">
          Where art meets celebration. Creative workshops and community experiences.
        </p>
        <div className="hero__ctas">
          <Link to="/events" className="hero__cta hero__cta--primary">
            Book now
          </Link>
          <Link to="/about" className="hero__cta hero__cta--secondary">
            Know about us
          </Link>
        </div>
      </div>
    </section>
  )
}
