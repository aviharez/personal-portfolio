"use client"

import { useEffect, useState, useRef, useCallback } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<number>(0)
  const lastUpdateRef = useRef<number>(0)
  const animationFrameRef = useRef<number>()

  const updatePosition = useCallback((e: MouseEvent) => {
    const now = Date.now()
    if (now - lastUpdateRef.current < 16) return
    
    lastUpdateRef.current = now
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setPosition(newPosition)

      if (trailRef.current % 3 === 0) {
        setTrail((prevTrail) => {
          const newTrail = [
            { x: newPosition.x, y: newPosition.y, id: trailRef.current++ },
            ...prevTrail.slice(0, 4),
          ]
          return newTrail
        })
      } else {
        trailRef.current++
      }
    })
  }, [])

  const checkHover = useCallback((e: Event) => {
    const target = e.target as HTMLElement
    const isInteractive = 
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.role === "button" ||
      target.classList.contains("cursor-pointer") ||
      target.classList.contains("pixel-button") ||
      target.closest("a") ||
      target.closest("button") ||
      target.closest('[role="button"]') ||
      target.closest(".retro-card") ||
      target.closest(".game-card") ||
      target.closest(".tech-tag")
    
    setIsHovering(isInteractive)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || "ontouchstart" in window
      setIsMobile(isMobileDevice)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile, { passive: true })

    if (isMobile) return

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", checkHover, { passive: true })
    document.addEventListener("mouseout", checkHover, { passive: true })

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", checkHover)
      document.removeEventListener("mouseout", checkHover)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile, updatePosition, checkHover])

  if (isMobile) return null

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: ((trail.length - index) / trail.length) * 0.3,
            transform: `translate(-50%, -50%) scale(${(trail.length - index) / trail.length})`,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? "hover" : ""} ${isClicking ? "click" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}
