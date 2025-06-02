import { getTranslations } from "next-intl/server"
import AboutContent from "@/components/about/about-content"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "about" })

  return {
    title: t("hero.title"),
    description: t("hero.subtitle"),
  }
}

export default async function AboutPage() {
  return <AboutContent />
}