import { cs } from './cs';
import { en } from './locales/en';
import type { Language } from './languages';
import type { Translation } from './types';

export const translations: Record<Language, Translation> = {
    en,
    cs,
};

export { isLanguage, languages } from './languages';
export type { Language } from './languages';
export type { Translation } from './types';
