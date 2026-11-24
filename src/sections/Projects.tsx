import Project from '../components/Project';
import styles from './Projects.module.css';

const projects = [
    { title: 'Quiz', link: 'https://vercel.com/', img: '/reactquiz.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget turpis odio. Praesent id augue ornare, malesuada magna eget, sagittis orci. Praesent ultrices, sapien dapibus ultricies faucibus, ligula magna varius dui, a lobortis dolor leo ac odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ', tech: ['React', 'HTML', 'CSS', 'TypeScript', 'Vite'], repo: 'https://github.com/' },

    { title: 'Popcorns', link: 'https://netlify.com/', img: '/usepopcorns.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget turpis odio. Praesent id augue ornare, malesuada magna eget, sagittis orci. Praesent ultrices, sapien dapibus ultricies faucibus, ligula magna varius dui, a lobortis dolor leo ac odio.', tech: ['React', 'HTML', 'CSS Modules', 'TypeScript', 'Vite'], repo: 'https://github.com/' },
];

function Projects() {
    return (
        <div className={styles.projects}>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <Project key={project.title} title={project.title} link={project.link} img={project.img} description={project.description} tech={project.tech} repo={project.repo} />
                ))}
            </ul>
        </div>
    );
}

export default Projects;
