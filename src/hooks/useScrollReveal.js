import { useEffect, useRef, useState } from 'react'

const defaultOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  triggerOnce: true,
}

/**
 * Hook that reveals an element when it enters the viewport.
 * Returns a ref to attach to the element and whether it's visible.
 */
export function useScrollReveal(options = {}) {
  const opts = { ...defaultOptions, ...options }
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (opts.triggerOnce && el) {
            observer.unobserve(el)
          }
        } else if (!opts.triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold: opts.threshold,
        rootMargin: opts.rootMargin,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [opts.threshold, opts.rootMargin, opts.triggerOnce])

  return [ref, isVisible]
}
