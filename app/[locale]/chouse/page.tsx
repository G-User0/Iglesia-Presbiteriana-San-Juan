import { getTranslations } from "next-intl/server"
import ChouseContent from "@/components/chouse/chouse-content"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "chouse.hero" })

  return {
    title: t("title"),
    description: t("subtitle"),
  }
}

export default async function ChousePage() {
  return <ChouseContent />
}