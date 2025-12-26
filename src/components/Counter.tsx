import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  target: number
  suffix: string
  duration?: number
}

const Counter = ({ target, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted.current) {
        hasStarted.current = true

        const startTime = Date.now()
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const currentCount = Math.floor(progress * target)
          setCount(currentCount)

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        animate()
      }
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [target, duration])

  return <div ref={elementRef}>{count.toLocaleString()}{suffix}</div>
}

export default Counter
