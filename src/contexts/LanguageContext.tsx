import { createContext, useEffect, type ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { isLanguage, translations, type Language, type Translation } from '../i18n';

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: Translation;
};

type LanguageProviderProps = {
    children: ReactNode;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function LanguageProvider({ children }: LanguageProviderProps) {
    const [storedLanguage, setStoredLanguage] = useLocalStorage('en', 'language');
    const language: Language = isLanguage(storedLanguage) ? storedLanguage : 'en';

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    function setLanguage(next: Language) {
        setStoredLanguage(next);
    }

    return <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
}

export { LanguageProvider, LanguageContext };
