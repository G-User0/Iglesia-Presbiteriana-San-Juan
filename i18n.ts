// import { getRequestConfig } from "next-intl/server"
// import type { RequestConfig } from "next-intl/server"

// export const locales = ["en", "es", "ko"]
// export const defaultLocale = "en"

// export default getRequestConfig(async ({ locale }) => {
//   // Asegurar que locale sea siempre un string
//   const safeLocale = locale || defaultLocale

//   // Cargar solo los mensajes comunes para el layout principal
//   const messages = await import(`./messages/${safeLocale}/common.json`)
//     .then((module) => module.default)
//     .catch(() => ({}))

//   // Devolver un objeto que cumpla con el tipo RequestConfig
//   const config: RequestConfig = {
//     locale: safeLocale,
//     messages,
//     timeZone: "America/Los_Angeles",
//   }

//   return config
// })





// Solo para compatibilidad o referencia:
import { locales, defaultLocale } from './next-intl.config';

export { locales, defaultLocale };
