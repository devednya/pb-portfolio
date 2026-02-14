import { useScrollReveal } from '../hooks/useScrollReveal'
import './ScrollReveal.css'

/**
 * Wraps children and animates them into view when they scroll into the viewport.
 * @param {string} animation - 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
 * @param {number} delay - Optional delay in ms for staggered animations
 */
export default function ScrollReveal({ children, animation = 'fade-up', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation} ${isVisible ? 'scroll-reveal--visible' : ''}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
