import useLanguage from '../hooks/useLanguage';
import styles from './ToggleDarkMode.module.css';

type ToggleDarkModeProps = {
    onClick: () => void;
    isDarkMode: boolean;
};

function ToggleDarkMode({ onClick, isDarkMode }: ToggleDarkModeProps) {
    const { t } = useLanguage();

    return (
        <button type='button' onClick={onClick} className={styles.button}>
            <img src={isDarkMode ? '/sun.svg' : '/moon.svg'} alt={t.controls.theme} />
        </button>
    );
}

export default ToggleDarkMode;
