import { getTranslations } from "next-intl/server"
import HomeContent from "@/components/home/home-content"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "home.hero" });

  return {
    title: t("title"),
    description: t("subtitle"),
  }
}

export default async function Home() {
  return <HomeContent />
}
