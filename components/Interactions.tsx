'use client'

import { useEffect } from 'react'

export default function Interactions() {
  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    const motionMin = () => document.documentElement.getAttribute('data-motion') === 'min'
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n
    const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))

    let cursorRaf = 0
    let canvasRaf = 0

    /* ---------------- Custom cursor ---------------- */
    function initCursor() {
      if (isTouch) return
      const dot = document.querySelector('.cursor-dot') as HTMLElement | null
      const ring = document.querySelector('.cursor-ring') as HTMLElement | null
      if (!dot || !ring) return
      let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my
      addEventListener('mousemove', (e) => {
        mx = e.clientX; my = e.clientY
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
      })
      addEventListener('mousedown', () => ring.classList.add('pressed'))
      addEventListener('mouseup', () => ring.classList.remove('pressed'))
      document.addEventListener('mouseleave', () => document.body.classList.add('cursor-hide'))
      document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-hide'))
      const hoverables = 'a, button, .mag, .chip, .rail-item, .clink, .proj, .stat, [data-cursor]'
      document.addEventListener('mouseover', (e) => {
        if ((e.target as Element).closest(hoverables)) ring.classList.add('hovering')
      })
      document.addEventListener('mouseout', (e) => {
        if ((e.target as Element).closest(hoverables)) ring.classList.remove('hovering')
      })
      ;(function loop() {
        if (!motionMin()) {
          rx = lerp(rx, mx, 0.18); ry = lerp(ry, my, 0.18)
          ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
        }
        cursorRaf = requestAnimationFrame(loop)
      })()
    }

    /* ---------------- Magnetic ---------------- */
    function initMagnetic() {
      if (isTouch) return
      document.querySelectorAll<HTMLElement>('.mag').forEach((el) => {
        const strength = parseFloat(el.dataset.mag || '0.35')
        el.addEventListener('mousemove', (e) => {
          if (motionMin()) return
          const r = el.getBoundingClientRect()
          const x = e.clientX - (r.left + r.width / 2)
          const y = e.clientY - (r.top + r.height / 2)
          el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
        })
        el.addEventListener('mouseleave', () => { el.style.transform = '' })
      })
    }

    /* ---------------- Hero canvas — drifting field ---------------- */
    function initHeroCanvas() {
      const cv = document.querySelector('.hero-canvas') as HTMLCanvasElement | null
      if (!cv) return
      const ctx = cv.getContext('2d')!
      let w = 0, h = 0, dpr = 1
      let pts: { x: number; y: number; vx: number; vy: number; r: number }[] = []
      const mouse = { x: -9999, y: -9999 }

      function accentRGB(): [number, number, number] {
        const fallback: [number, number, number] = [128, 188, 154]
        const probe = document.createElement('span')
        probe.style.color = (getComputedStyle(document.documentElement).getPropertyValue('--accent') || '').trim()
        document.body.appendChild(probe)
        const c = getComputedStyle(probe).color
        probe.remove()
        // Guard: only parse when browser resolves to rgb/rgba; OKLCH returned verbatim
        // would give wrong channel values (e.g. hue=158 parsed as blue channel)
        if (!c.startsWith('rgb')) return fallback
        const m = c.match(/\d+/g)
        return m && m.length >= 3 ? [+m[0], +m[1], +m[2]] : fallback
      }
      let acc: [number, number, number] = [128, 188, 154]

      function size() {
        dpr = Math.min(devicePixelRatio || 1, 2)
        const host = cv.parentElement || cv
        w = cv.clientWidth || host.clientWidth || innerWidth
        h = cv.clientHeight || host.clientHeight || innerHeight
        cv.width = w * dpr; cv.height = h * dpr
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        const count = Math.round(clamp((w * h) / 12000, 64, 150))
        pts = Array.from({ length: count }, () => ({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.4,
        }))
        acc = accentRGB()
      }

      function draw() {
        ctx.clearRect(0, 0, w, h)
        const isLight = document.documentElement.getAttribute('data-theme') === 'light'
        const base = isLight ? '20,30,24' : '230,238,232'
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i]
          if (!motionMin() && !prefersReduce) { p.x += p.vx; p.y += p.vy }
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
          const dx = mouse.x - p.x, dy = mouse.y - p.y
          const md = Math.hypot(dx, dy)
          if (md < 160) {
            const f = (1 - md / 160) * 0.04
            p.x += dx * f * 0.04; p.y += dy * f * 0.04
          }
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${base},${isLight ? 0.5 : 0.55})`
          ctx.fill()
        }
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i], b = pts[j]
            const d = Math.hypot(a.x - b.x, a.y - b.y)
            if (d < 132) {
              const near = Math.min(
                Math.hypot(mouse.x - a.x, mouse.y - a.y),
                Math.hypot(mouse.x - b.x, mouse.y - b.y),
              )
              const useAcc = near < 180
              const alpha = (1 - d / 132) * (useAcc ? 0.6 : (isLight ? 0.17 : 0.22))
              ctx.beginPath()
              ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = useAcc
                ? `rgba(${acc[0]},${acc[1]},${acc[2]},${alpha})`
                : `rgba(${base},${alpha})`
              ctx.lineWidth = useAcc ? 0.8 : 0.5
              ctx.stroke()
            }
          }
        }
        canvasRaf = requestAnimationFrame(draw)
      }

      const hero = document.querySelector('.hero')!
      hero.addEventListener('mousemove', (e) => {
        const r = cv.getBoundingClientRect()
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
      })
      hero.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999 })
      size(); draw()
      let rt = 0
      addEventListener('resize', () => { clearTimeout(rt); rt = window.setTimeout(size, 200) })
      addEventListener('load', size)
      setTimeout(size, 350); setTimeout(size, 1200)
      ;(window as { __heroResize?: () => void }).__heroResize = size
    }

    /* ---------------- Role rotator ---------------- */
    function initRoles() {
      const el = document.querySelector('.role-rot .cur') as HTMLElement | null
      if (!el) return
      const roles = ['Android · Kotlin', 'Jetpack Compose', 'React · TypeScript', 'Angular', 'SwiftUI · iOS', 'React Native']
      let i = 0
      el.textContent = roles[0]
      el.style.transition = 'opacity .26s ease, transform .26s ease'
      el.style.display = 'inline-block'
      setInterval(() => {
        if (motionMin()) return
        i = (i + 1) % roles.length
        el.style.opacity = '0'; el.style.transform = 'translateY(6px)'
        setTimeout(() => { el.textContent = roles[i]; el.style.opacity = '1'; el.style.transform = 'none' }, 260)
      }, 2200)
    }

    /* ---------------- Reveals (scroll-position based) ---------------- */
    function initReveals() {
      const els = [...document.querySelectorAll<HTMLElement>('.reveal, .tl-item')]
      function check() {
        const vh = innerHeight
        for (const el of els) {
          if (el.classList.contains('in')) continue
          const r = el.getBoundingClientRect()
          if (r.top < vh * 0.9 && r.bottom > -40) el.classList.add('in')
        }
      }
      check()
      addEventListener('scroll', check, { passive: true })
      addEventListener('resize', check)
      setTimeout(() => document.documentElement.classList.add('force-visible'), 2200)
    }

    /* ---------------- Scroll progress + rail ---------------- */
    function initScroll() {
      const bar = document.querySelector('.scrollbar') as HTMLElement | null
      const pct = document.querySelector('.rail-progress .num') as HTMLElement | null
      const sections = [...document.querySelectorAll<HTMLElement>('section[data-chapter]')]
      const items = [...document.querySelectorAll<HTMLElement>('.rail-item')]
      function onScroll() {
        const max = document.documentElement.scrollHeight - innerHeight
        const p = max > 0 ? scrollY / max : 0
        if (bar) bar.style.transform = `scaleX(${p})`
        if (pct) pct.textContent = String(Math.round(p * 100)).padStart(2, '0')
        const mid = scrollY + innerHeight * 0.4
        let active = 0
        sections.forEach((s, idx) => { if (s.offsetTop <= mid) active = idx })
        items.forEach((it, idx) => it.classList.toggle('active', idx === active))
      }
      addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      items.forEach((it) => it.addEventListener('click', () => {
        const target = document.querySelector(it.dataset.target || '')
        if (target) target.scrollIntoView({ behavior: prefersReduce ? 'auto' : 'smooth' })
      }))
    }

    /* ---------------- Horizontal work scroll ---------------- */
    function initWork() {
      const pin = document.querySelector('.work-pin') as HTMLElement | null
      const track = document.querySelector('.work-track') as HTMLElement | null
      if (!pin || !track) return
      function onScroll() {
        if (motionMin() || innerWidth <= 900) { track.style.transform = ''; return }
        const rect = pin.getBoundingClientRect()
        const total = pin.offsetHeight - innerHeight
        const scrolled = clamp(-rect.top, 0, total)
        const p = total > 0 ? scrolled / total : 0
        const dist = track.scrollWidth - innerWidth + 40
        track.style.transform = `translateX(${-p * Math.max(dist, 0)}px)`
      }
      addEventListener('scroll', onScroll, { passive: true })
      addEventListener('resize', onScroll)
      onScroll()
    }

    /* ---------------- Timeline fill ---------------- */
    function initTimeline() {
      const line = document.querySelector('.tl-line .fill') as HTMLElement | null
      const tl = document.querySelector('.tl') as HTMLElement | null
      if (!line || !tl) return
      function onScroll() {
        const r = tl.getBoundingClientRect()
        const start = innerHeight * 0.6
        const p = clamp((start - r.top) / r.height, 0, 1)
        line.style.height = (p * 100) + '%'
      }
      addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    }

    /* ---------------- Local time ---------------- */
    function initClock() {
      const el = document.querySelector('[data-clock]') as HTMLElement | null
      if (!el) return
      function tick() {
        try {
          el.textContent = new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'Asia/Jakarta', hour12: false,
          }).format(new Date()) + ' WIB'
        } catch { el.textContent = '' }
      }
      tick(); setInterval(tick, 1000)
    }

    /* ---------------- Hero headline reveal ---------------- */
    function initHeroReveal() {
      document.querySelectorAll<HTMLElement>('.hero .line-mask').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 150 + i * 130)
      })
      document.querySelectorAll<HTMLElement>('.hero [data-fade]').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 480 + i * 110)
      })
    }

    /* ---------------- Back to top ---------------- */
    function initTop() {
      document.querySelectorAll('[data-top]').forEach((el) =>
        el.addEventListener('click', () => scrollTo({ top: 0, behavior: prefersReduce ? 'auto' : 'smooth' }))
      )
    }

    /* ---------------- Hero parallax ---------------- */
    function initParallax() {
      if (prefersReduce) return
      const center = document.querySelector('.hero-center') as HTMLElement | null
      const canvas = document.querySelector('.hero-canvas') as HTMLElement | null
      const top = document.querySelector('.hero-top') as HTMLElement | null
      function onScroll() {
        if (motionMin()) {
          if (center) center.style.transform = ''
          if (canvas) canvas.style.transform = ''
          return
        }
        const y = scrollY
        if (y > innerHeight * 1.2) return
        if (center) {
          center.style.transform = `translateY(${y * 0.28}px)`
          center.style.opacity = String(clamp(1 - y / (innerHeight * 0.75), 0, 1))
        }
        if (canvas) canvas.style.transform = `translateY(${y * 0.14}px) scale(1.02)`
        if (top) top.style.opacity = String(clamp(1 - y / (innerHeight * 0.5), 0, 1))
      }
      addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    }

    /* ---------------- Project card tilt ---------------- */
    function initTilt() {
      if (isTouch) return
      document.querySelectorAll<HTMLElement>('.proj').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          if (motionMin() || innerWidth <= 900) return
          const r = card.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          card.style.transform = `perspective(1200px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translateZ(0)`
        })
        card.addEventListener('mouseleave', () => {
          card.style.transform = ''
        })
      })
    }

    /* ---------------- Bootstrap ---------------- */
    const steps = {
      initCursor, initMagnetic, initHeroCanvas, initRoles, initReveals,
      initScroll, initWork, initTimeline, initClock, initHeroReveal,
      initParallax, initTilt, initTop,
    }
    for (const [name, fn] of Object.entries(steps)) {
      try { fn() } catch (err) { console.error('[portfolio] ' + name + ' failed:', err) }
    }

    return () => {
      if (cursorRaf) cancelAnimationFrame(cursorRaf)
      if (canvasRaf) cancelAnimationFrame(canvasRaf)
    }
  }, [])

  return null
}
