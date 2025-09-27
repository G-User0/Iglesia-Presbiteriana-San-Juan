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
      // Método 1: Usar document.cookie para forzar la persistencia
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=lax`;
      
      // Método 2: Construir la nueva ruta correctamente
      // Remover el locale actual del pathname si existe
      let newPathname = pathname;
      
      // Si el pathname comienza con un locale, removerlo
      if (pathname.startsWith(`/${locale}`)) {
        newPathname = pathname.slice(`/${locale}`.length) || '/';
      }
      
      // Agregar el nuevo locale
      const finalPath = `/${newLocale}${newPathname === '/' ? '' : newPathname}`;
      
      // Usar router.push en lugar de router.replace para mejor UX
      router.push(finalPath);
      
      // Opcional: forzar un refresh para asegurar que el cambio persista
      // router.refresh();
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