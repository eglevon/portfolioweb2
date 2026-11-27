import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Language, Translation } from '../i18n';

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: Translation;
};

function useLanguage(): LanguageContextValue {
    const context = useContext(LanguageContext);
    if (context === undefined) throw new Error('LanguageContext was used outside of LanguageProvider');
    return context;
}

export default useLanguage;
