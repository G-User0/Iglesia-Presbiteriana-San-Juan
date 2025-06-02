import { getTranslations } from "next-intl/server"
import EventsContent from "@/components/events/events-content"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "events.hero" })

  return {
    title: t("title"),
    description: t("subtitle"),
  }
}

export default async function EventsPage() {
  return <EventsContent />
}