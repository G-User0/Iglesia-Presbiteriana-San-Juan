import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './next-intl.config';
 
export default createMiddleware({
  // Lista de todos los idiomas soportados
  locales,
  // Usado cuando no hay coincidencia de idioma
  defaultLocale,
  // Reducir el tamaño de la cookie guardando solo el locale
  localePrefix: 'as-needed',
  // Habilitar detección de idioma desde cookies/headers
  localeDetection: true,
  // Opcional: personalizar el nombre de la cookie
  // alternateLinks: false, // Si tienes problemas con links alternos
});
 
export const config = {
  // Hacer coincidir solo rutas internacionalizadas
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
  // Excluir más rutas específicas de Vercel si es necesario
};