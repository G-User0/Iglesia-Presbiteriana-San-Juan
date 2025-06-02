'use client';

import { useEffect } from 'react';
import { useRouter } from '@/navigation';

// Constante para páginas frecuentes que deberían precargarse
const FREQUENTLY_VISITED_PAGES = [
  '/about',
  '/contact',
  '/services',
  '/events',
  '/sermons',
  '/chouse',
  '/chouse-details',
  '/ministries',
];

// Hook personalizado para precarga de páginas
export function usePrefetchPages() {
  const router = useRouter();
  
  useEffect(() => {
    // Precargar rutas frecuentes
    FREQUENTLY_VISITED_PAGES.forEach(page => {
      router.prefetch(page);
    });
  }, [router]);
}

// Hook para preparar enlaces cuando se detecta hover
export function usePrefetchOnHover() {
  const router = useRouter();
  
  useEffect(() => {
    // Función para manejar el hover sobre los enlaces
    const handleLinkHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Buscar si el elemento o algún padre es un enlace
      let currentElement: HTMLElement | null = target;
      while (currentElement) {
        if (currentElement.tagName === 'A' && currentElement.hasAttribute('href')) {
          const href = currentElement.getAttribute('href');
          if (href && href.startsWith('/') && !href.includes('#')) {
            // Solo precargar enlaces internos y no anclas
            router.prefetch(href);
          }
          break;
        }
        currentElement = currentElement.parentElement;
      }
    };
    
    // Añadir un detector de eventos global para el hover
    document.addEventListener('mouseover', handleLinkHover);
    
    return () => {
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, [router]);
}

// Hook para optimizar la navegación general
export function useOptimizedNavigation() {
  // Combina ambos hooks
  usePrefetchPages();
  usePrefetchOnHover();
}