import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Las configuraciones de locales que ya definiste
export const locales = ['en', 'es', 'ko'];
export const defaultLocale = 'en';
 
export default getRequestConfig(async ({locale}) => {
  // Asegurar que locale sea siempre un string antes de validar
  const safeLocale = locale || defaultLocale;
  
  // Validar que el locale sea uno de los soportados
  if (safeLocale && !locales.includes(safeLocale)) notFound();

  // Cargar solo los mensajes comunes para el layout principal
  const messages = await import(`./messages/${safeLocale}/common.json`)
    .then((module) => module.default)
    .catch(() => ({}));
  
  return {
    locale: safeLocale, // Añadido el campo locale que es requerido
    messages,
    timeZone: 'America/Los_Angeles',
  };
});