import styles from './Footer.module.css';
import Socials from './Socials';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.date}>&copy; {new Date().getFullYear()}</p>
            <Socials />
        </footer>
    );
}

export default Footer;
