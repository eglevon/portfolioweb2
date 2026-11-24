import styles from './Circle.module.css';

function Circle() {
    return (
        <a href='#about' className={styles.outerCircle}>
            <div className={styles.innerCircle}>
                <img src='/emv-dark.png' alt='EMV' />
            </div>
        </a>
    );
}

export default Circle;
