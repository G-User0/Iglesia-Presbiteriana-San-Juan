import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale || 'es'

  const namespaces = [
    "home",
    "about",
    "contact",
    "events",
    "ministries",
    "services",
    "contact",
    "sermons",
    "chouse",
    "metadata",
    "common",
  ]

  const messages: Record<string, Record<string, string>> = {}

  for (const ns of namespaces) {
    messages[ns] = (await import(`../messages/${safeLocale}/${ns}.json`)).default
  }

  return {
    messages,
    locale: safeLocale
  }
})
