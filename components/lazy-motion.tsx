"use client"

import { useEffect, useState, type ReactNode } from "react"
import dynamic from "next/dynamic"
import { useInView } from "react-intersection-observer"
import type { ComponentType } from "react"
import type { MotionProps } from "framer-motion"

// Definir tipos más específicos para los componentes de Framer Motion
type MotionComponent = ComponentType<MotionProps> & {
  [key: string]: ComponentType<MotionProps>
}


interface AnimatePresenceProps {
  children: ReactNode
  mode?: "sync" | "wait" | "popLayout"
  initial?: boolean
  onExitComplete?: () => void
  exitBeforeEnter?: boolean
  presenceAffectsLayout?: boolean
}

// Placeholder component to show while loading
const LoadingPlaceholder = ({ className = "", height = "300px" }: { className?: string; height?: string }) => (
  <div className={`animate-pulse bg-muted/50 rounded-lg ${className}`} style={{ height }} />
)

// Definir un componente wrapper para Framer Motion
const MotionWrapper = ({
  children,
}: {
  children: (components: {
    motion: MotionComponent
    AnimatePresence: ComponentType<AnimatePresenceProps>
  }) => ReactNode
}) => {
  // Usamos una función asíncrona para importar framer-motion
  const [components, setComponents] = useState<{
    motion: MotionComponent | null
    AnimatePresence: ComponentType<AnimatePresenceProps> | null
  }>({
    motion: null,
    AnimatePresence: null,
  })

  useEffect(() => {
    const loadComponents = async () => {
      const framerMotion = await import("framer-motion")
      setComponents({
        motion: framerMotion.motion as unknown as MotionComponent,
        AnimatePresence: framerMotion.AnimatePresence as ComponentType<AnimatePresenceProps>,
      })
    }

    loadComponents()
  }, [])

  if (!components.motion || !components.AnimatePresence) {
    return <LoadingPlaceholder />
  }

  return (
    <>{children(components as { motion: MotionComponent; AnimatePresence: ComponentType<AnimatePresenceProps> })}</>
  )
}

// Dynamic import del wrapper
const DynamicMotion = dynamic(() => Promise.resolve(MotionWrapper), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
})

interface LazyMotionProps {
  children: (components: {
    motion: MotionComponent
    AnimatePresence: ComponentType<AnimatePresenceProps>
  }) => ReactNode
  threshold?: number
  rootMargin?: string
}

export function LazyMotion({ children, threshold = 0.1, rootMargin = "100px" }: LazyMotionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  })

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (inView && !isLoaded) {
      setIsLoaded(true)
    }
  }, [inView, isLoaded])

  return (
    <div ref={ref}>
      {isLoaded ? <DynamicMotion>{(components) => children(components)}</DynamicMotion> : <LoadingPlaceholder />}
    </div>
  )
}
