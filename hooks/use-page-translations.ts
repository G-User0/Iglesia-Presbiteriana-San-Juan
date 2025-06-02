"use client"

import { useEffect, useState } from "react"
import { useLocale } from "next-intl"
import { loadTranslationsWithCache } from "@/lib/translation-cache"

// Redefinir el tipo para evitar la referencia circular
type TranslationValue = string | Record<string, unknown>
type TranslationRecord = Record<string, TranslationValue>

export function usePageTranslations(namespace: string) {
  const locale = useLocale()
  const [translations, setTranslations] = useState<TranslationRecord | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadTranslations() {
      try {
        setIsLoading(true)
        // Cargar traducciones con caché
        const pageTranslations = await loadTranslationsWithCache(locale, namespace)
        // Asegurar que el tipo sea compatible
        setTranslations(pageTranslations as TranslationRecord)
        setIsLoading(false)
      } catch (err) {
        console.error(`Failed to load translations for ${namespace}:`, err)
        setError(err instanceof Error ? err : new Error(String(err)))
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [locale, namespace])

  return { translations, isLoading, error }
}
