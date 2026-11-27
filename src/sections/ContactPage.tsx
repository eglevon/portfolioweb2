import Contact from '../components/Contact';
import useDarkMode from '../hooks/useDarkMode';
import useLanguage from '../hooks/useLanguage';
import styles from './ContactPage.module.css';

const contact = [
    { id: 'email', link: 'mailto:ev@gmail.com', icon: '/envelope-icon.svg', iconLight: '/envelope-icon-light.svg' },

    { id: 'linkedin', link: 'https://www.linkedin.com/', icon: '/linkedin.svg', iconLight: '/linkedin-light.svg' },

    { id: 'github', link: 'https://github.com/', icon: '/github.svg', iconLight: '/github-light.svg' },
] as const;

function ContactPage() {
    const { isDarkMode } = useDarkMode();
    const { t } = useLanguage();

    return (
        <div className={styles.contact}>
            <h2>{t.contact.title}</h2>
            <ul>
                {contact.map((item) => (
                    <Contact key={item.id} link={item.link} icon={item.icon} iconLight={item.iconLight} text={t.contact.channels[item.id]} />
                ))}

                <li className={styles.location}>
                    <img src={isDarkMode ? '/location-light.svg' : '/location.svg'} alt={t.contact.locationLabel} />
                    <span>{t.contact.location}</span>
                </li>
            </ul>
        </div>
    );
}

export default ContactPage;
