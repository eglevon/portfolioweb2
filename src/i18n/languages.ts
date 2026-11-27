export const languages = ['en', 'cs'] as const;

export type Language = (typeof languages)[number];

export function isLanguage(value: unknown): value is Language {
    return typeof value === 'string' && languages.some((language) => language === value);
}
