import type React from "react"
import { Mulish } from "next/font/google"
import { getTranslations, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import "@/app/globals.css"

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-mulish",
})

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: {
      template: `%s | ${t("siteName")}`,
      default: t("siteName"),
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author") }],
    metadataBase: new URL("https://yourchurchwebsite.com"),
    openGraph: {
      type: "website",
      locale,
      url: "https://yourchurchwebsite.com",
      title: t("siteName"),
      description: t("description"),
      siteName: t("siteName"),
    },
  }
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { children } = props
  const { locale } = await props.params
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning className={mulish.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}