import { useEffect, useRef } from 'react'

import mlStyles from '@/styles/mouselight.module.scss'

export function Mouselight() {
  const mlRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: MouseEvent) => {
    if (mlRef.current) {
      mlRef.current.animate(
        {
          left: `${event.clientX}px`,
          top: `${event.clientY}px`
        },
        { duration: 200, fill: 'forwards' }
      )
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={mlStyles.container}>
      <div className={mlStyles.blur} />
      <div className={mlStyles.light} ref={mlRef} />
    </div>
  )
}
