import Project from '../components/Project';
import useLanguage from '../hooks/useLanguage';
import styles from './Projects.module.css';

const projects = [
    { id: 'quiz', link: 'https://vercel.com/', img: '/reactquiz.png', tech: ['React', 'HTML', 'CSS', 'TypeScript', 'Vite'], repo: 'https://github.com/' },

    { id: 'popcorns', link: 'https://netlify.com/', img: '/usepopcorns.png', tech: ['React', 'HTML', 'CSS Modules', 'TypeScript', 'Vite'], repo: 'https://github.com/' },
] as const;

function Projects() {
    const { t } = useLanguage();

    return (
        <div className={styles.projects}>
            <h2>{t.projects.title}</h2>
            <ul>
                {projects.map((project) => {
                    const details = t.projects.items[project.id];

                    return <Project key={project.id} title={details.title} link={project.link} img={project.img} description={details.description} tech={[...project.tech]} repo={project.repo} />;
                })}
            </ul>
        </div>
    );
}

export default Projects;
