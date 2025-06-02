import { getTranslations } from "next-intl/server"
import ContactContent from "@/components/contact/contact-content"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "contact.hero" })

  return {
    title: t("title"),
    description: t("subtitle"),
  }
}

export default async function ContactPage() {
  return <ContactContent />
}