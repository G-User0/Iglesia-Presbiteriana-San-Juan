// Un simple servicio de caché en memoria para las traducciones
type CacheItem<T> = {
  value: T
  expiry: number
}

class TranslationCache {
  private cache: Map<string, CacheItem<Record<string, unknown>>> = new Map()
  private maxSize: number
  private ttl: number // tiempo de vida en milisegundos

  constructor(maxSize = 20, ttlMinutes = 60) {
    this.maxSize = maxSize
    this.ttl = ttlMinutes * 60 * 1000
  }

  get(key: string): Record<string, unknown> | null {
    const item = this.cache.get(key)
    if (!item) return null

    // Comprobar si el elemento ha expirado
    if (Date.now() > item.expiry) {
      this.cache.delete(key)
      return null
    }

    return item.value
  }

  set(key: string, value: Record<string, unknown>): void {
    // Si el caché está lleno, eliminar el elemento más antiguo
    if (this.cache.size >= this.maxSize) {
      const oldestKey = Array.from(this.cache.keys())[0]
      if (oldestKey) {
        this.cache.delete(oldestKey)
      }
    }

    // Establecer el nuevo elemento con tiempo de expiración
    this.cache.set(key, {
      value,
      expiry: Date.now() + this.ttl,
    })
  }

  clear(): void {
    this.cache.clear()
  }
}

// Exportar una instancia única del caché
export const translationCache = new TranslationCache()

// Función auxiliar para cargar traducciones con caché
export async function loadTranslationsWithCache(locale: string, namespace: string): Promise<Record<string, unknown>> {
  const cacheKey = `${locale}:${namespace}`

  // Intentar obtener del caché primero
  const cachedTranslations = translationCache.get(cacheKey)
  if (cachedTranslations) {
    return cachedTranslations
  }

  // Si no está en caché, cargar desde el archivo
  try {
    const translations = await import(`@/messages/${locale}/${namespace}.json`)

    // Guardar en caché para uso futuro
    translationCache.set(cacheKey, translations.default)

    return translations.default
  } catch (error) {
    console.error(`Failed to load translations for ${namespace} in ${locale}:`, error)
    return {}
  }
}
