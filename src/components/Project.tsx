import useDarkMode from '../hooks/useDarkMode';
import useLanguage from '../hooks/useLanguage';
import styles from './Project.module.css';

type ProjectProps = {
    title: string;
    link: string;
    img: string;
    description: string;
    tech: string[];
    repo: string;
};

function Project({ title, link, img, description, tech, repo }: ProjectProps) {
    const { isDarkMode } = useDarkMode();
    const { t } = useLanguage();

    return (
        <li className={styles.project}>
            <h3>{title}</h3>
            <a href={link} target='_blank' className={styles.imageLink}>
                <img src={img} alt={title} className={styles.image} />
            </a>
            <p>{description}</p>
            <ul className={styles.list}>
                {tech.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <a href={repo} target='_blank' className={styles.link}>
                {t.projects.repo}
                <img src={isDarkMode ? '/arrow-right-light.svg' : '/arrow-right.svg'} />
            </a>
        </li>
    );
}

export default Project;
