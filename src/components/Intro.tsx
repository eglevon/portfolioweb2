import useLanguage from '../hooks/useLanguage';
import styles from './Intro.module.css';

function Intro() {
    const { t } = useLanguage();

    return (
        <div className={styles.intro}>
            <div className={styles.introText}>
                <h3>{t.intro.greeting}</h3>
                <div>
                    <p>{t.intro.paragraphs[0]}</p>

                    <p>{t.intro.paragraphs[1]}</p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src='/emv.png' alt='EMV' />
                </div>
            </div>
        </div>
    );
}

export default Intro;
