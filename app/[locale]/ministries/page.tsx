import { getTranslations } from "next-intl/server"
import MinistriesContent from "@/components/ministries/ministries-content"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "ministries.hero" })

  return {
    title: t("title"),
    description: t("subtitle"),
  }
}

export default async function MinistriesPage() {
  return <MinistriesContent />
}