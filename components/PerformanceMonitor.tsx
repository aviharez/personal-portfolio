"use client"

import { usePerformanceMonitor } from "@/hooks/use-performance-monitor"

export default function PerformanceMonitor() {
  usePerformanceMonitor()
  
  if (process.env.NODE_ENV !== 'development') {
    return null
  }
  
  return null
} 