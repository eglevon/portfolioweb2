import { placeholders } from './placeholders';
import type { Translation } from './types';

export const cs = {
    controls: {
        language: 'Vyberte jazyk',
        menu: 'Tlačítko nabídky',
        theme: 'Tmavý/světlý režim',
        logo: 'Logo',
    },
    nav: {
        home: 'Domů',
        about: 'O mně',
        projects: 'Projekty',
        contact: 'Kontakt',
    },
    home: {
        role: 'Frontend vývojářka',
    },
    intro: {
        greeting: 'Ahoj! Jmenuji se EV.',
        paragraphs: placeholders.intro,
    },
    skills: {
        title: 'Dovednosti',
    },
    work: {
        title: 'Pracovní zkušenosti',
        jobs: {
            frontend: {
                title: 'Frontend vývojářka',
                location: 'Česká republika',
                period: '9/2024 – dosud',
                points: placeholders.jobPoints,
                website: 'Webová stránka',
                websiteAlt: 'Náhled webové stránky',
            },
            junior: {
                title: 'Junior frontend vývojářka',
                location: 'Česká republika',
                period: '1/2023 – 6/2023',
                points: placeholders.jobPoints,
                website: 'Webová stránka',
                websiteAlt: 'Náhled webové stránky',
            },
        },
    },
    education: {
        title: 'Vzdělání',
        items: {
            self: {
                title: 'Samostudium webového vývoje',
                period: '2021 – 2022',
            },
            course: {
                title: placeholders.educationCourse,
                period: '8/2019 – 7/2021',
                detail: placeholders.educationDetail,
            },
        },
    },
    projects: {
        title: 'Projekty',
        repo: 'Repozitář na GitHubu',
        items: {
            quiz: {
                title: 'Quiz',
                description: placeholders.quizDescription,
            },
            popcorns: {
                title: 'Popcorns',
                description: placeholders.popcornsDescription,
            },
        },
    },
    contact: {
        title: 'Kontakt',
        location: 'Česká republika',
        locationLabel: 'Poloha',
        channels: {
            email: 'E-mail: ev@gmail.com',
            linkedin: 'LinkedIn',
            github: 'GitHub',
        },
    },
} satisfies Translation;
