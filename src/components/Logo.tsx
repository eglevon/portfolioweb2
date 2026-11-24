import useDarkMode from '../hooks/useDarkMode';
import styles from './Logo.module.css';

function Logo() {
    const { isDarkMode } = useDarkMode();

    return (
        <a href='/' className={styles.logo}>
            <img src={isDarkMode ? '/logo-light.png' : '/logo.png'} alt='Logo' />
        </a>
    );
}

export default Logo;
