import { useEffect, useRef, useState } from 'react'

/** Marks an element visible once it enters the viewport. Content is visible
 *  by default for SSR / no-JS / reduced-motion; JS opts in to the entrance. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      setVisible(true)
      return
    }
    setArmed(true)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, armed, visible }
}
