import { useEffect, useRef, useState } from 'react';
import styles from './PageNav.module.css';
import ToggleDarkMode from './ToggleDarkMode';
import MenuBtn from './MenuBtn';
import useDarkMode from '../hooks/useDarkMode';

const navigation = [
    { link: '#home', img: '/home.svg', text: 'Home' },

    { link: '#about', img: '/aboutme.svg', imgDark: '/aboutme-dark.svg', text: 'About Me' },

    { link: '#projects', img: '/projects.svg', imgDark: '/projects-dark.svg', text: 'Projects' },

    { link: '#contact', img: '/contact.svg', imgDark: '/contact-dark.svg', text: 'Contact' },
];

function PageNav() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const navRef = useRef<HTMLUListElement>(null);
    const btnsRef = useRef<HTMLDivElement>(null);

    function handleToggle() {
        setIsOpen((open) => !open);
    }

    function handleClose(event: React.MouseEvent): void {
        event.stopPropagation();

        setIsOpen(false);
    }

    function handleClickOutside(event: MouseEvent): void {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }

        if (btnsRef.current && btnsRef.current.contains(event.target as Node)) {
            setIsOpen(true);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className={isOpen ? styles.isOpen : ''}>
            <ul className={isOpen ? styles.isOpen : ''} ref={navRef}>
                {navigation.map((nav) => (
                    <li key={nav.text} className={nav.text === 'Home' ? styles.home : ''}>
                        <a href={nav.link} onClick={handleClose}>
                            <picture className={isDarkMode ? styles.dark : ''}>
                                {nav.imgDark && <source media='(min-width: 36rem)' srcSet={nav.imgDark} />}
                                <img src={nav.img} alt={nav.text} /> <p className={styles.text}>{nav.text}</p>
                            </picture>
                        </a>
                    </li>
                ))}
            </ul>

            <div className={styles.btns} ref={btnsRef}>
                <ToggleDarkMode onClick={toggleDarkMode} isDarkMode={isDarkMode} />

                <MenuBtn onClick={handleToggle} isOpen={isOpen} isDarkMode={isDarkMode} />
            </div>
        </nav>
    );
}

export default PageNav;
