interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

export default function imageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  // Implement image optimization logic here
  // For example, you could use a CDN or image optimization service
  if (src.startsWith("/")) {
    return src
  }

  // For external images, you could use an image optimization service
  return `${src}?w=${width}&q=${quality}`
}
