"use client"

import { useEffect, useRef } from 'react'

export function usePerformanceMonitor() {
  const frameCountRef = useRef(0)
  const lastTimeRef = useRef(performance.now())
  const isMonitoringRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const monitorPerformance = () => {
      if (!isMonitoringRef.current) return

      frameCountRef.current++
      const currentTime = performance.now()
      const deltaTime = currentTime - lastTimeRef.current

      if (frameCountRef.current % 60 === 0) {
        const fps = Math.round(1000 / (deltaTime / 60))
        
        if (fps < 30) {
          console.warn(`🚨 Low FPS detected: ${fps} fps`)
        }

        if ('memory' in performance) {
          const memory = (performance as any).memory
          const memoryUsageMB = memory.usedJSHeapSize / 1024 / 1024
          
          if (memoryUsageMB > 100) {
            console.warn(`🚨 High memory usage: ${memoryUsageMB.toFixed(2)} MB`)
          }
        }

        frameCountRef.current = 0
        lastTimeRef.current = currentTime
      }

      requestAnimationFrame(monitorPerformance)
    }

    const startMonitoring = setTimeout(() => {
      isMonitoringRef.current = true
      requestAnimationFrame(monitorPerformance)
    }, 5000)

    return () => {
      clearTimeout(startMonitoring)
      isMonitoringRef.current = false
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          console.warn(`🚨 Long task detected: ${entry.duration.toFixed(2)}ms`, entry)
        }
      }
    })

    try {
      observer.observe({ entryTypes: ['longtask'] })
    } catch (e) {
      console.warn('PerformanceObserver not supported')
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if ((entry as any).value > 0.1) {
          console.warn(`🚨 Layout shift detected: ${(entry as any).value.toFixed(3)}`, entry)
        }
      }
    })

    try {
      observer.observe({ entryTypes: ['layout-shift'] })
    } catch (e) {
      console.warn('Layout shift observer not supported')
    }

    return () => observer.disconnect()
  }, [])
} 