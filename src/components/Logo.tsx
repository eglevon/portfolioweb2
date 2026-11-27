import useDarkMode from '../hooks/useDarkMode';
import useLanguage from '../hooks/useLanguage';
import styles from './Logo.module.css';

function Logo() {
    const { isDarkMode } = useDarkMode();
    const { t } = useLanguage();

    return (
        <a href='/' className={styles.logo}>
            <img src={isDarkMode ? '/logo-light.png' : '/logo.png'} alt={t.controls.logo} />
        </a>
    );
}

export default Logo;
