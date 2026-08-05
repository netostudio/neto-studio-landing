import { getRelativeLocaleUrl } from 'astro:i18n';
import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

export function getLocalizedPath(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  let path = url.pathname;
  if (currentLang !== defaultLang) {
    path = path.replace(new RegExp(`^/${currentLang}(?=/|$)`), '') || '/';
  }
  const subpath = path === '/' ? undefined : path.replace(/^\//, '');
  return getRelativeLocaleUrl(targetLang, subpath);
}
