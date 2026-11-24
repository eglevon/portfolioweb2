import Skill from './Skill';
import styles from './Skills.module.css';

const skills = [
    { name: 'HTML', img: '/html.svg', imgLight: '/html-light.svg' },

    { name: 'CSS', img: '/css.svg', imgLight: '/css-light.svg' },

    { name: 'JavaScript', img: '/js.svg', imgLight: '/js-light.svg' },

    { name: 'TypeScript', img: '/ts.svg', imgLight: '/ts-light.svg' },

    { name: 'React', img: '/react.svg', imgLight: '/react-light.svg' },

    { name: 'TailwindCSS', img: '/tailwind.svg', imgLight: '/tailwind-light.svg' },

    { name: 'Git', img: '/git.svg', imgLight: '/git-light.svg' },
];

function Skills() {
    return (
        <div className={styles.skills}>
            <h3>Skills</h3>
            <ul>
                {skills.map((skill) => (
                    <Skill key={skill.name} name={skill.name} img={skill.img} imgDark={skill.imgLight} />
                ))}
            </ul>
        </div>
    );
}

export default Skills;
