import { en } from './en';
import { es } from './es';
import type { Dictionary } from './types';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui: Record<Lang, Dictionary> = { en, es };

export type { Dictionary };
