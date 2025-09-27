"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { getWeeklyVerse } from "@/lib/get-weekly-verse"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"

// Definir el tipo BibleVerse ya que no podemos importarlo
interface BibleVerse {
  text: string
  reference: string
  translation: string
}

export default function HeroSection() {
  const [verse, setVerse] = useState<BibleVerse | null>(null)
  const [loading, setLoading] = useState(true)
  const t = useTranslations("home.hero")
  const locale = useLocale()

  useEffect(() => {
    // Obtener el versículo de la semana con el locale actual
    const weeklyVerse = getWeeklyVerse(locale)
    setVerse(weeklyVerse)
    setLoading(false)
  }, [locale])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-primary/10 to-background pt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4">{t("title")}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#staff">
                <Button size="lg" className="rounded-full">
                  {t("join")}
                </Button>
              </Link>
              <Link href="/sermons">
                <Button size="lg" variant="outline" className="rounded-full">
                  {t("latestSermon")}
                </Button>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Bible verse positioned at bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-8 right-8 max-w-md"
      >
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hidden md:block">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">{t("weeklyVerse")}</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-full mb-2"></div>
                <div className="h-4 bg-muted rounded w-2/3 mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/3 ml-auto"></div>
              </div>
            ) : verse ? (
              <>
                <p className="italic text-sm">{verse.text}</p>
                <p className="text-right text-sm text-muted-foreground mt-4">
                  {verse.reference} - {verse.translation}
                </p>
              </>
            ) : (
              <p className="text-muted-foreground">No se pudo cargar el versículo.</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
