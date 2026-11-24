import styles from './Education.module.css';

function Education() {
    return (
        <div className={styles.education}>
            <h3>Education</h3>
            <ul>
                <li>
                    <p className={styles.title}>Self-Education in Web Development</p>
                    <p>2021 – 2022</p>
                </li>
                <li>
                    <p className={styles.title}>Lorem ipsum dolor sit amet.</p>
                    <p>8/2019 – 7/2021</p>
                    <p className={styles.location}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione!</p>
                </li>
            </ul>
        </div>
    );
}

export default Education;
