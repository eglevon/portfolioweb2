import { useEffect, useRef, useState } from 'react';
import styles from './PageNav.module.css';
import ToggleDarkMode from './ToggleDarkMode';
import MenuBtn from './MenuBtn';
import SelectLanguage from './SelectLanguage';
import useDarkMode from '../hooks/useDarkMode';
import useLanguage from '../hooks/useLanguage';

const navigation = [
    { id: 'home', link: '#home', img: '/home.svg' },

    { id: 'about', link: '#about', img: '/aboutme.svg', imgDark: '/aboutme-dark.svg' },

    { id: 'projects', link: '#projects', img: '/projects.svg', imgDark: '/projects-dark.svg' },

    { id: 'contact', link: '#contact', img: '/contact.svg', imgDark: '/contact-dark.svg' },
] as const;

function PageNav() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { language, setLanguage, t } = useLanguage();

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

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 36em)');

        function handleBreakpointChange(event: MediaQueryListEvent) {
            if (event.matches) {
                setIsOpen(false);
            }
        }

        mediaQuery.addEventListener('change', handleBreakpointChange);

        return () => {
            mediaQuery.removeEventListener('change', handleBreakpointChange);
        };
    }, []);

    return (
        <nav className={isOpen ? styles.isOpen : ''}>
            <ul className={isOpen ? styles.isOpen : ''} ref={navRef}>
                {navigation.map((nav) => {
                    const label = t.nav[nav.id];

                    return (
                        <li key={nav.id} data-title={label} className={nav.id === 'home' ? styles.home : ''}>
                            <a href={nav.link} onClick={handleClose}>
                                <picture className={isDarkMode ? styles.dark : ''}>
                                    {'imgDark' in nav && <source media='(min-width: 36rem)' srcSet={nav.imgDark} />}
                                    <img src={nav.img} alt={label} /> <p className={styles.text}>{label}</p>
                                </picture>
                            </a>
                        </li>
                    );
                })}
            </ul>

            <div className={styles.btns} ref={btnsRef}>
                <SelectLanguage language={language} onChange={setLanguage} label={t.controls.language} />

                <ToggleDarkMode onClick={toggleDarkMode} isDarkMode={isDarkMode} />

                <MenuBtn onClick={handleToggle} isOpen={isOpen} isDarkMode={isDarkMode} />
            </div>
        </nav>
    );
}

export default PageNav;
