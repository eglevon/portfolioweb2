import useDarkMode from '../hooks/useDarkMode';
import styles from './Work.module.css';

function Work() {
    const { isDarkMode } = useDarkMode();

    return (
        <div className={styles.work}>
            <h3>Work experience</h3>

            <div className={styles.job}>
                <p className={styles.title}>Front-End Developer</p>
                <p className={styles.location}>Czech Republic</p>
                <p>9/2024 – present</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cumque nemo dolor repudiandae ea aliquam assumenda quos ipsam, consequuntur rerum reprehenderit recusandae natus consectetur voluptatibus! Non praesentium a fugiat assumenda.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ullam qui suscipit molestiae impedit libero doloremque quaerat fugit placeat dolores.</li>
                    <li>
                        <a href='https://www.google.com/' target='_blank' className={styles.link}>
                            The website
                            <img src={isDarkMode ? '/arrow-right-light.svg' : '/arrow-right.svg'} alt='Preview the website' />
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.job}>
                <p className={styles.title}>Junior Front-End Developer</p>
                <p className={styles.location}>Czech Republic</p>
                <p>1/2023 – 6/2023</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cumque nemo dolor repudiandae ea aliquam assumenda quos ipsam, consequuntur rerum reprehenderit recusandae natus consectetur voluptatibus! Non praesentium a fugiat assumenda.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ullam qui suscipit molestiae impedit libero doloremque quaerat fugit placeat dolores.</li>
                    <li>
                        <a href='https://www.google.com/' target='_blank' className={styles.link}>
                            The website
                            <img src={isDarkMode ? '/arrow-right-light.svg' : '/arrow-right.svg'} alt='Preview the website' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Work;
