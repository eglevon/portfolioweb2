import styles from './Homepage.module.css';
import Circle from '../components/Circle';
import useLanguage from '../hooks/useLanguage';

function Homepage() {
    const { t } = useLanguage();

    return (
        <div className={styles.homepage}>
            <div className={styles.text}>
                <h1>EV</h1>
                <h2>{t.home.role}</h2>
            </div>
            <Circle />
        </div>
    );
}

export default Homepage;
