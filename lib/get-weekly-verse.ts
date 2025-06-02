// Importar los versículos según el idioma
import { bibleVerses as bibleVersesEn } from "@/data/bible-verses-en"
import { bibleVerses as bibleVersesEs } from "@/data/bible-verses-es"
import { bibleVerses as bibleVersesKo } from "@/data/bible-verses-ko"

// Definir el tipo BibleVerse
export interface BibleVerse {
  text: string
  reference: string
  translation: string
}

// Función para obtener el versículo de la semana según el idioma
export function getWeeklyVerse(locale: string): BibleVerse {
  // Seleccionar los versículos según el idioma
  let verses: BibleVerse[]
  switch (locale) {
    case "es":
      verses = bibleVersesEs
      break
    case "ko":
      verses = bibleVersesKo
      break
    case "en":
    default:
      verses = bibleVersesEn
      break
  }

  // Obtener la semana actual del año (0-51)
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const oneWeek = 1000 * 60 * 60 * 24 * 7
  const weekNumber = Math.floor(diff / oneWeek) % verses.length

  // Devolver el versículo correspondiente a la semana actual
  return verses[weekNumber]
}
