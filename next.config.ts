import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

// Crea el plugin next-intl usando la ubicación del archivo de configuración
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Importante: Asegúrate de que las rutas a archivos estáticos no estén localizadas
  // Si necesitas configurar rutas adicionales que no deben tener prefijo de idioma, añádelas aquí
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
};

export default withNextIntl(nextConfig);