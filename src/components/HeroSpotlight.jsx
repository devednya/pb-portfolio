import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
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

const PASTELS = [
  'rgb(198, 186, 232)',
  'rgb(255, 205, 218)',
  'rgb(255, 224, 198)',
  'rgb(236, 210, 248)',
  'rgb(255, 228, 236)',
  'rgb(212, 188, 228)',
]

function pickPastelIndex(x, y, w, h) {
  const nx = x / Math.max(w, 1)
  const ny = y / Math.max(h, 1)
  return Math.floor((nx * 3 + ny * 5) * 2.7) % PASTELS.length
}

function makeRng(x0, y0, x1, y1) {
  let s = (x0 * 12.9898 + y0 * 78.233 + x1 * 37.719 + y1 * 93.989) % 2147483647
  if (s < 0) s = -s
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

/**
 * Dry brush: many short thin bristle marks + broken dashed center line.
 * No wide fills, no blob at the tip (not wet/airbrush).
 */
function paintBrushSegment(ctx, x0, y0, x1, y1, w, h) {
  const dx = x1 - x0
  const dy = y1 - y0
  const len = Math.hypot(dx, dy)
  if (len < 0.35) return

  const ux = dx / len
  const uy = dy / len
  const px = -uy
  const py = ux
  const stroke = PASTELS[pickPastelIndex((x0 + x1) / 2, (y0 + y1) / 2, w, h)]
  const rnd = makeRng(x0, y0, x1, y1)

  ctx.save()
  ctx.lineCap = 'butt'
  ctx.lineJoin = 'miter'

  let t = 0
  const stepBase = 4.5
  while (t <= len) {
    const cx = x0 + ux * t
    const cy = y0 + uy * t
    const bristles = 5 + Math.floor(rnd() * 5)

    for (let b = 0; b < bristles; b++) {
      const off = (rnd() - 0.5) * 22
      const bristleLen = 6 + rnd() * 16
      const skew = (rnd() - 0.5) * 0.35
      const jx = px * off
      const jy = py * off
      const lax = ux * Math.cos(skew) - uy * Math.sin(skew)
      const lay = ux * Math.sin(skew) + uy * Math.cos(skew)
      ctx.globalAlpha = 0.06 + rnd() * 0.11
      ctx.strokeStyle = stroke
      ctx.lineWidth = 0.6 + rnd() * 1.1
      ctx.beginPath()
      ctx.moveTo(cx + jx - lax * bristleLen * 0.35, cy + jy - lay * bristleLen * 0.35)
      ctx.lineTo(cx + jx + lax * bristleLen * 0.65, cy + jy + lay * bristleLen * 0.65)
      ctx.stroke()
    }

    t += stepBase + rnd() * 6
  }

  ctx.globalAlpha = 0.11 + rnd() * 0.06
  ctx.strokeStyle = stroke
  ctx.lineWidth = 1.2 + rnd() * 0.8
  ctx.setLineDash([2, 5 + rnd() * 6, 1, 8])
  ctx.beginPath()
  ctx.moveTo(x0, y0)
  ctx.lineTo(x1, y1)
  ctx.stroke()
  ctx.setLineDash([])

  ctx.restore()
}

export default function HeroSpotlight() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const lastRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas || typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resize = () => {
      const rect = section.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cw = Math.max(1, Math.floor(rect.width * dpr))
      const ch = Math.max(1, Math.floor(rect.height * dpr))
      canvas.width = cw
      canvas.height = ch
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(section)

    const setDecoMouse = (e) => {
      const rect = section.getBoundingClientRect()
      if (rect.width < 1 || rect.height < 1) return
      const mx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const my = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      section.style.setProperty('--mouse-x', String(mx))
      section.style.setProperty('--mouse-y', String(my))
    }

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setDecoMouse(e)

      const last = lastRef.current
      if (last) {
        paintBrushSegment(ctx, last.x, last.y, x, y, rect.width, rect.height)
      }
      lastRef.current = { x, y }
    }

    const handleLeave = () => {
      lastRef.current = null
      section.style.setProperty('--mouse-x', '0')
      section.style.setProperty('--mouse-y', '0')
    }

    section.addEventListener('mousemove', handleMove)
    section.addEventListener('mouseleave', handleLeave)

    return () => {
      ro.disconnect()
      section.removeEventListener('mousemove', handleMove)
      section.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero hero--collage">
      <canvas className="hero__paint-canvas" ref={canvasRef} aria-hidden />
      <div className="hero__inner">
        <div className="hero__collage-wrap">
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
