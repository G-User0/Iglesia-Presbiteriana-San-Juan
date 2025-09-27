import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es', 'ko'] as const;

export const { Link, useRouter, usePathname, redirect } =
  createNavigation({ locales });