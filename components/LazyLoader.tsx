"use client"

import { Suspense, lazy, ComponentType } from 'react'

interface LazyLoaderProps {
  component: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  [key: string]: any
}

export default function LazyLoader({ 
  component, 
  fallback = (
    <div className="flex items-center justify-center p-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
          <span className="mono-font text-sm text-terminal-text-dim ml-2">loading@portfolio:~$</span>
        </div>
        <div className="terminal-content p-4">
          <div className="mono-font text-sm text-terminal-text">Loading component...</div>
        </div>
      </div>
    </div>
  ),
  ...props 
}: LazyLoaderProps) {
  const LazyComponent = lazy(component)

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
} 