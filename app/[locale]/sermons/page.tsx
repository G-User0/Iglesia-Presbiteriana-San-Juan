import { getTranslations } from "next-intl/server"
import SermonsContent from "@/components/sermons-copy/sermons-content"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "sermons.hero" })

  return {
    title: t("title"),
    description: t("subtitle"),
  }
}

export default async function SermonsPage() {
  return <SermonsContent />
}