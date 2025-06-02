"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// Rutas más comunes que queremos precargar
const commonRoutes = ["/", "/about", "/services", "/sermons", "/events", "/ministries", "/contact"]

export function RoutePrefetcher() {
  const router = useRouter()

  useEffect(() => {
    // Precargar las rutas más comunes después de que la página se haya cargado completamente
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        // Esperar a que la página se cargue completamente y luego precargar las rutas
        setTimeout(() => {
          commonRoutes.forEach((route) => {
            router.prefetch(route)
          })
        }, 1000)
      })
    }
  }, [router])

  // Este componente no renderiza nada visible
  return null
}
