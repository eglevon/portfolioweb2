import styles from './Socials.module.css';

const socials = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/', img: '/linkedin.svg' },

    { name: 'GitHub', link: 'https://github.com/', img: '/github.svg' },
];

function Socials() {
    return (
        <ul className={styles.socials}>
            {socials.map((social) => (
                <li key={social.name}>
                    <a href={social.link} target='_blank'>
                        <img src={social.img} alt={social.name} />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Socials;
