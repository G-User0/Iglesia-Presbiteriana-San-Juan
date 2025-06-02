import { getTranslations } from "next-intl/server"
import ServicesContent from "@/components/services/services-content"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "services.hero" })

  return {
    title: t("title"),
    description: t("subtitle"),
  }
}

export default async function ServicesPage() {
  return <ServicesContent />
}