"use client"

import { useTransition } from "react"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      const newPathname = `/${newLocale}${pathname.startsWith(`/${locale}`) ? pathname.slice(locale.length + 1) : pathname}`; // Remove the current locale from the pathname
      router.replace(newPathname); // Update the URL to include the new locale
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="Change language"
          disabled={isPending}
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("es")} className={locale === "es" ? "bg-muted" : ""}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("en")} className={locale === "en" ? "bg-muted" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("ko")} className={locale === "ko" ? "bg-muted" : ""}>
          한국어
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
