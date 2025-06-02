import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './next-intl.config';
 
export default createMiddleware({
  // Lista de todos los idiomas soportados
  locales,
  // Usado cuando no hay coincidencia de idioma
  defaultLocale,
  // Reducir el tamaño de la cookie guardando solo el locale
  localePrefix: 'as-needed',
  // Optimizar el tamaño de la cookie usando un nombre más corto
  localeDetection: true,
  pathnames: {
    '/': '/',
    // Añade más rutas si es necesario
  },
});
 
export const config = {
  // Hacer coincidir solo rutas internacionalizadas
   matcher: ['/((?!api|_next|.*\\..*).*)'],
  // Ignorar rutas que no necesitan internacionalización
};