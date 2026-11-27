import useLanguage from '../hooks/useLanguage';
import styles from './Education.module.css';

const education = ['self', 'course'] as const;

function Education() {
    const { t } = useLanguage();

    return (
        <div className={styles.education}>
            <h3>{t.education.title}</h3>
            <ul>
                {education.map((id) => {
                    const item = t.education.items[id];

                    return (
                        <li key={id}>
                            <p className={styles.title}>{item.title}</p>
                            <p>{item.period}</p>
                            {'detail' in item ? <p className={styles.location}>{item.detail}</p> : null}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Education;
