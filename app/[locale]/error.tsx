"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Link from "next/link"
import * as LucideIcons from "lucide-react"
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations("common.error")

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
        <LucideIcons.AlertTriangle className="h-10 w-10 text-red-600" />
      </div>
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="text-muted-foreground max-w-md mb-8">{t("message")}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} variant="default">
          {t("tryAgain")}
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">{t("goHome")}</Link>
        </Button>
      </div>
    </div>
  )
}