type JobCopy = {
    title: string;
    location: string;
    period: string;
    points: readonly [string, string, string];
    website: string;
    websiteAlt: string;
};

type EducationItem = {
    title: string;
    period: string;
};

export type Translation = {
    controls: {
        language: string;
        menu: string;
        theme: string;
        logo: string;
    };
    nav: {
        home: string;
        about: string;
        projects: string;
        contact: string;
    };
    home: {
        role: string;
    };
    intro: {
        greeting: string;
        paragraphs: readonly [string, string];
    };
    skills: {
        title: string;
    };
    work: {
        title: string;
        jobs: {
            frontend: JobCopy;
            junior: JobCopy;
        };
    };
    education: {
        title: string;
        items: {
            self: EducationItem;
            course: EducationItem & { detail: string };
        };
    };
    projects: {
        title: string;
        repo: string;
        items: {
            quiz: { title: string; description: string };
            popcorns: { title: string; description: string };
        };
    };
    contact: {
        title: string;
        location: string;
        locationLabel: string;
        channels: {
            email: string;
            linkedin: string;
            github: string;
        };
    };
};
