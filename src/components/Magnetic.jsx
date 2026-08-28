import { useRef } from 'react'
import { gsap } from '../gsapSetup.js'

// Wraps any element (button, link) and gives it a subtle "magnetic" pull
// toward the cursor on hover, powered by GSAP's quickTo for buttery-smooth
// interpolation. Strength controls how far it can travel.
export default function Magnetic({ as: Tag = 'div', strength = 16, className = '', children, ...rest }) {
  const ref = useRef(null)
  const quickX = useRef(null)
  const quickY = useRef(null)

  const ensureQuick = () => {
    if (!quickX.current && ref.current) {
      quickX.current = gsap.quickTo(ref.current, 'x', { duration: 0.5, ease: 'power3' })
      quickY.current = gsap.quickTo(ref.current, 'y', { duration: 0.5, ease: 'power3' })
    }
  }

  const handleMouseMove = (e) => {
    ensureQuick()
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    quickX.current(relX * (strength / 100))
    quickY.current(relY * (strength / 100))
  }

  const handleMouseLeave = () => {
    ensureQuick()
    quickX.current(0)
    quickY.current(0)
  }

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  )
}
