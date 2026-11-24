import Education from '../components/Education';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Work from '../components/Work';
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <div className={styles.about}>
            <Intro />

            <Skills />

            <Work />

            <Education />
        </div>
    );
}

export default AboutMe;
