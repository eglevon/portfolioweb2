import styles from './Intro.module.css';

function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.introText}>
                <h3>Hello! My name is EV.</h3>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
