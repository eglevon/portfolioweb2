import useDarkMode from '../hooks/useDarkMode';
import useLanguage from '../hooks/useLanguage';
import styles from './Work.module.css';

const experience = [
    { id: 'frontend', href: 'https://www.google.com/' },
    { id: 'junior', href: 'https://www.google.com/' },
] as const;

function Work() {
    const { isDarkMode } = useDarkMode();
    const { t } = useLanguage();

    return (
        <div className={styles.work}>
            <h3>{t.work.title}</h3>

            {experience.map((job) => {
                const details = t.work.jobs[job.id];

                return (
                    <div className={styles.job} key={job.id}>
                        <p className={styles.title}>{details.title}</p>
                        <p className={styles.location}>{details.location}</p>
                        <p>{details.period}</p>
                        <ul>
                            {details.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                            <li>
                                <a href={job.href} target='_blank' className={styles.link}>
                                    {details.website}
                                    <img src={isDarkMode ? '/arrow-right-light.svg' : '/arrow-right.svg'} alt={details.websiteAlt} />
                                </a>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default Work;
