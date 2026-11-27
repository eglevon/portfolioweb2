import { ChangeEvent } from 'react';
import styles from './SelectLanguage.module.css';
import { isLanguage, languages, type Language } from '../i18n';

type SelectLanguageProps = {
    language: Language;
    onChange: (language: Language) => void;
    label: string;
};

function SelectLanguage({ language, onChange, label }: SelectLanguageProps) {
    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const next = event.target.value;
        if (isLanguage(next)) onChange(next);
    }

    return (
        <select value={language} onChange={handleChange} className={styles.button} aria-label={label}>
            {languages.map((code) => (
                <option key={code} value={code}>
                    {code.toUpperCase()}
                </option>
            ))}
        </select>
    );
}

export default SelectLanguage;
