"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Solo habilitar en desarrollo
const isDev = process.env.NODE_ENV === "development"

// Definir tipos para las entradas de rendimiento
interface PerformanceEntryWithDetails extends PerformanceEntry {
  processingStart?: number
  hadRecentInput?: boolean
  value?: number
}

export function PerformanceMonitor() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [metrics, setMetrics] = useState<{
    fcp: number | null
    lcp: number | null
    fid: number | null
    cls: number | null
    ttfb: number | null
  }>({
    fcp: null, // First Contentful Paint
    lcp: null, // Largest Contentful Paint
    fid: null, // First Input Delay
    cls: null, // Cumulative Layout Shift
    ttfb: null, // Time to First Byte
  })

  useEffect(() => {
    if (!isDev || typeof window === "undefined" || !("performance" in window)) return

    // Medir TTFB
    const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
    if (navigationEntries.length > 0) {
      const ttfb = navigationEntries[0].responseStart
      setMetrics((prev) => ({ ...prev, ttfb }))
    }

    // Medir FCP
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const fcp = entries[0].startTime
        setMetrics((prev) => ({ ...prev, fcp }))
      }
    })
    fcpObserver.observe({ type: "paint", buffered: true })

    // Medir LCP
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      if (lastEntry) {
        const lcp = lastEntry.startTime
        setMetrics((prev) => ({ ...prev, lcp }))
      }
    })
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

    // Medir FID
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as PerformanceEntryWithDetails[]
      if (entries.length > 0 && entries[0].processingStart) {
        const fid = entries[0].processingStart - entries[0].startTime
        setMetrics((prev) => ({ ...prev, fid }))
      }
    })
    fidObserver.observe({ type: "first-input", buffered: true })

    // Medir CLS
    let clsValue = 0
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as PerformanceEntryWithDetails[]
      entries.forEach((entry) => {
        if (entry.hadRecentInput === false && typeof entry.value === "number") {
          clsValue += entry.value
          setMetrics((prev) => ({ ...prev, cls: clsValue }))
        }
      })
    })
    clsObserver.observe({ type: "layout-shift", buffered: true })

    // Limpiar observadores
    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [pathname, searchParams])

  if (!isDev) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 text-white text-xs p-1 z-50 font-mono">
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <span>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : "..."}</span>
        <span>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : "..."}</span>
        <span>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : "..."}</span>
        <span>FID: {metrics.fid ? `${metrics.fid.toFixed(1)}ms` : "..."}</span>
        <span>CLS: {metrics.cls !== null ? metrics.cls.toFixed(3) : "..."}</span>
      </div>
    </div>
  )
}
