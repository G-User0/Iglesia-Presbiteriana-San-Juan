"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { useInView } from "react-intersection-observer"

type OptimizedImageProps = Omit<ImageProps, "onLoadingComplete"> & {
  lowQuality?: boolean
  lazyLoadingThreshold?: number
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  lowQuality = false,
  lazyLoadingThreshold = 0.1,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: lazyLoadingThreshold,
  })

  // Si priority es true, no usamos lazy loading
  const shouldLoad = priority || inView

  // Calidad de imagen basada en la prop lowQuality
  const quality = lowQuality ? 60 : 80

  return (
    <div
      ref={!priority ? ref : undefined}
      className={`relative overflow-hidden ${className || ""} ${!isLoaded ? "bg-muted animate-pulse" : ""}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {shouldLoad && (
        <Image
          src={src} // Cambia esto por la URL de la imagen de la casa iglesia || "/image.svg"
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          {...props}
        />
      )}
    </div>
  )
}
