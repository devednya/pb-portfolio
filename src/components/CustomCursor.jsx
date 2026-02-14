import { useEffect, useState } from 'react'
import { Paintbrush } from 'lucide-react'
import './CustomCursor.css'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hide on touch devices (no hover/mouse)
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (hasTouch) return

    setIsVisible(true)
    document.body.classList.add('custom-cursor-active')

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea')
      setIsHovering(!!isInteractive)
    }

    const handleMouseOut = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`custom-cursor custom-cursor--icon ${isHovering ? 'custom-cursor--hover' : ''}`}
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    >
      <Paintbrush
        size={28}
        strokeWidth={2}
        className="custom-cursor__icon"
      />
    </div>
  )
}
