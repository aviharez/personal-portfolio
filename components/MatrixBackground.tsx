"use client"

import { useEffect, useRef, useCallback } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const frameCountRef = useRef<number>(0)

  const codeSnippets = [
    "const developer = 'Syifa';",
    "function buildApp() {",
    "return 'success';",
    "} catch (error) {",
    "console.log('debug');",
    "import React from 'react';",
    "class Component {",
    "public void main() {",
    "SELECT * FROM projects;",
    "git commit -m 'feat';",
    "npm install",
    "docker build .",
    "kubectl apply",
    "terraform plan",
    "yarn dev",
    "mvn clean install",
    "gradle build",
    "pip install",
    "composer install",
    "go mod tidy",
    "async/await",
    "Promise.resolve()",
    "useState()",
    "useEffect()",
    "componentDidMount()",
    "render() {",
    "export default",
    "import { useState }",
    "const [state, setState]",
    "onClick={() => {",
    "map((item, index) =>",
    "filter(item => item.id)",
    "reduce((acc, curr) =>",
    "Object.keys(data)",
    "JSON.stringify()",
    "localStorage.getItem()",
    "fetch('/api/data')",
    "response.json()",
    "try { await api.call() }",
    "if (condition) {",
    "for (let i = 0; i < length; i++)",
    "while (isRunning) {",
    "switch (type) {",
    "case 'success':",
    "break;",
    "default:",
    "throw new Error()",
    "console.error(err)",
    "process.env.NODE_ENV",
    "module.exports = {",
  ]

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"

  interface Drop {
    x: number
    y: number
    text: string
    speed: number
    opacity: number
    fontSize: number
    type: "code" | "chars"
    trail: Array<{ char: string; opacity: number }>
  }

  const createDrop = useCallback((canvas: HTMLCanvasElement): Drop => {
    const isCodeDrop = Math.random() < 0.25
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      text: isCodeDrop
        ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        : characters[Math.floor(Math.random() * characters.length)],
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.3,
      fontSize: isCodeDrop ? 10 : 13,
      type: isCodeDrop ? "code" : "chars",
      trail: [],
    }
  }, [codeSnippets, characters])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const drops: Drop[] = []
    const maxDrops = Math.min(Math.floor(canvas.width / 25), 60)

    for (let i = 0; i < maxDrops; i++) {
      drops.push(createDrop(canvas))
    }

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true })

    const animate = (currentTime: number) => {
      if (currentTime - lastTimeRef.current < 33) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastTimeRef.current = currentTime

      frameCountRef.current++
      const shouldProcessFrame = frameCountRef.current % 3 === 0

      ctx.fillStyle = "rgba(13, 17, 23, 0.12)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop, index) => {
        if (shouldProcessFrame) {
          const distanceToMouse = Math.sqrt(Math.pow(drop.x - mouseX, 2) + Math.pow(drop.y - mouseY, 2))
          if (distanceToMouse < 80) {
            const angle = Math.atan2(drop.y - mouseY, drop.x - mouseX)
            drop.x += Math.cos(angle) * 1.5
            drop.speed *= 0.7
          }
        }

        if (drop.type === "code") {
          ctx.font = `${drop.fontSize}px "Fira Code", monospace`
          ctx.fillStyle = `rgba(126, 231, 135, ${drop.opacity * 0.7})`
        } else {
          ctx.font = `${drop.fontSize}px "Fira Code", monospace`
          ctx.fillStyle = `rgba(57, 208, 214, ${drop.opacity * 0.9})`
        }

        ctx.fillText(drop.text, drop.x, drop.y)

        if (drop.type === "chars" && shouldProcessFrame) {
          drop.trail.unshift({ char: drop.text, opacity: drop.opacity })
          if (drop.trail.length > 6) {
            drop.trail.pop()
          }

          drop.trail.forEach((trailItem, trailIndex) => {
            const trailY = drop.y - (trailIndex + 1) * 15
            const trailOpacity = trailItem.opacity * (1 - trailIndex / 6) * 0.4
            ctx.fillStyle = `rgba(57, 208, 214, ${trailOpacity})`
            ctx.fillText(trailItem.char, drop.x, trailY)
          })
        }

        drop.y += drop.speed
        drop.opacity *= 0.999

        if (drop.type === "chars" && Math.random() < 0.02) {
          drop.text = characters[Math.floor(Math.random() * characters.length)]
        }

        if (drop.y > canvas.height + 50 || drop.opacity < 0.01) {
          drops[index] = createDrop(canvas)
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      resizeCanvas()
      const newMaxDrops = Math.min(Math.floor(canvas.width / 25), 60)
      while (drops.length < newMaxDrops) {
        drops.push(createDrop(canvas))
      }
      while (drops.length > newMaxDrops) {
        drops.pop()
      }
    }

    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [createDrop])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-35"
      style={{ background: "transparent" }}
    />
  )
}
