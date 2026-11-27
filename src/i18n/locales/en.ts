import { placeholders } from '../placeholders';
import type { Translation } from '../types';

export const en: Translation = {
    controls: {
        language: 'Language',
        menu: 'Menu button',
        theme: 'Dark/Light mode',
        logo: 'Logo',
    },
    nav: {
        home: 'Home',
        about: 'About Me',
        projects: 'Projects',
        contact: 'Contact',
    },
    home: {
        role: 'Frontend Developer',
    },
    intro: {
        greeting: 'Hello! My name is EV.',
        paragraphs: placeholders.intro,
    },
    skills: {
        title: 'Skills',
    },
    work: {
        title: 'Work experience',
        jobs: {
            frontend: {
                title: 'Frontend Developer',
                location: 'Czech Republic',
                period: '9/2024 – present',
                points: placeholders.jobPoints,
                website: 'The website',
                websiteAlt: 'Preview the website',
            },
            junior: {
                title: 'Junior Frontend Developer',
                location: 'Czech Republic',
                period: '1/2023 – 6/2023',
                points: placeholders.jobPoints,
                website: 'The website',
                websiteAlt: 'Preview the website',
            },
        },
    },
    education: {
        title: 'Education',
        items: {
            self: {
                title: 'Self-Education in Web Development',
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
        title: 'Projects',
        repo: 'GitHub repository',
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
        title: 'Contact',
        location: 'Czech Republic',
        locationLabel: 'Location',
        channels: {
            email: 'Email: ev@gmail.com',
            linkedin: 'LinkedIn',
            github: 'GitHub',
        },
    },
};
