import Contact from '../components/Contact';
import useDarkMode from '../hooks/useDarkMode';
import styles from './ContactPage.module.css';

const contact = [
    { link: 'mailto:ev@gmail.com', icon: '/envelope-icon.svg', iconLight: '/envelope-icon-light.svg', text: 'Email: ev@gmail.com' },

    { link: 'https://www.linkedin.com/', icon: '/linkedin.svg', iconLight: '/linkedin-light.svg', text: 'LinkedIn' },

    { link: 'https://github.com/', icon: '/github.svg', iconLight: '/github-light.svg', text: 'GitHub' },
];

function ContactPage() {
    const { isDarkMode } = useDarkMode();

    return (
        <div className={styles.contact}>
            <h2>Contact</h2>
            <ul>
                {contact.map((contact) => (
                    <Contact key={contact.text} link={contact.link} icon={contact.icon} iconLight={contact.iconLight} text={contact.text} />
                ))}

                <li className={styles.location}>
                    <img src={isDarkMode ? '/location-light.svg' : '/location.svg'} alt='Location' />
                    <span>Czech Republic</span>
                </li>
            </ul>
        </div>
    );
}

export default ContactPage;
