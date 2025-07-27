"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    const drops: Drop[] = []
    const columns = Math.floor(canvas.width / 20)

    // Create initial drops
    for (let i = 0; i < columns; i++) {
      const isCodeDrop = Math.random() < 0.3 // 30% chance for code snippets
      drops.push({
        x: i * 20,
        y: Math.random() * canvas.height,
        text: isCodeDrop
          ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
          : characters[Math.floor(Math.random() * characters.length)],
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        fontSize: isCodeDrop ? 10 : 14,
        type: isCodeDrop ? "code" : "chars",
        trail: [],
      })
    }

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(13, 17, 23, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop, index) => {
        // Mouse interaction - drops avoid mouse cursor
        const distanceToMouse = Math.sqrt(Math.pow(drop.x - mouseX, 2) + Math.pow(drop.y - mouseY, 2))

        if (distanceToMouse < 100) {
          const angle = Math.atan2(drop.y - mouseY, drop.x - mouseX)
          drop.x += Math.cos(angle) * 2
          drop.speed *= 0.5
        } else {
          drop.speed = Math.min(drop.speed * 1.02, Math.random() * 3 + 1)
        }

        // Set font and color based on type
        if (drop.type === "code") {
          ctx.font = `${drop.fontSize}px "Fira Code", monospace`
          ctx.fillStyle = `rgba(126, 231, 135, ${drop.opacity * 0.6})`
        } else {
          ctx.font = `${drop.fontSize}px "Fira Code", monospace`
          ctx.fillStyle = `rgba(57, 208, 214, ${drop.opacity})`
        }

        // Draw the main character/text
        ctx.fillText(drop.text, drop.x, drop.y)

        // Create trailing effect for character drops
        if (drop.type === "chars") {
          drop.trail.unshift({ char: drop.text, opacity: drop.opacity })
          if (drop.trail.length > 10) {
            drop.trail.pop()
          }

          drop.trail.forEach((trailItem, trailIndex) => {
            const trailY = drop.y - (trailIndex + 1) * 20
            const trailOpacity = trailItem.opacity * (1 - trailIndex / 10)
            ctx.fillStyle = `rgba(57, 208, 214, ${trailOpacity * 0.3})`
            ctx.fillText(trailItem.char, drop.x, trailY)
          })
        }

        // Update position
        drop.y += drop.speed
        drop.opacity *= 0.998

        // Random character change for character drops
        if (drop.type === "chars" && Math.random() < 0.05) {
          drop.text = characters[Math.floor(Math.random() * characters.length)]
        }

        // Reset drop when it goes off screen or fades out
        if (drop.y > canvas.height + 50 || drop.opacity < 0.01) {
          const isCodeDrop = Math.random() < 0.3
          drops[index] = {
            x: Math.random() * canvas.width,
            y: -50,
            text: isCodeDrop
              ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
              : characters[Math.floor(Math.random() * characters.length)],
            speed: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            fontSize: isCodeDrop ? 10 : 14,
            type: isCodeDrop ? "code" : "chars",
            trail: [],
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      resizeCanvas()
      // Adjust number of drops based on screen size
      const newColumns = Math.floor(canvas.width / 20)
      while (drops.length < newColumns) {
        const isCodeDrop = Math.random() < 0.3
        drops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          text: isCodeDrop
            ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
            : characters[Math.floor(Math.random() * characters.length)],
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          fontSize: isCodeDrop ? 10 : 14,
          type: isCodeDrop ? "code" : "chars",
          trail: [],
        })
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: "transparent" }}
    />
  )
}
