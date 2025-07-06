import { Lang, MetaDataProps } from '@/types/components/global';
import { ProjectsTabsType } from '@/types/projects/tabs';
import { ProjectProps, Projects, ProjectsList, ProjectsType } from '@/types/projects';
import { toTwoDigits } from '@/utils/number';

export const META_PROJECTS: Lang<MetaDataProps> = {
    en: {
        title: `Projects | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    id: {
        title: `Proyek | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const PROJECTS: Lang<Projects> = {
    en: [
        {
            title: 'Event',
            description: 'An event organizer service plans and manages events, handling logistics, vendors, and schedules.',
            image: '/static/images/projects/acolyte.jpg',
            url: 'https://acolyte.ws/'
        },
        {
            title: 'Event Documentation',
            description: 'An Event Documentation Events service captures and documents event details, including schedules, speakers, and activities.',
            image: '/static/images/projects/lsm.jpg',
            url: 'https://bijouterielsm.com/'
        },
        {
            title: 'Photo And Video Editing',
            description: 'A photo and video editing service enhances raw images and footage using professional software.',
            image: '/static/images/projects/cartv.jpg',
            url: 'https://cartv.gouv.qc.ca/en/'
        },
        {
            title: 'Photo Product',
            description: 'A product photography service captures high-quality images of items for marketing or sales purposes.',
            image: '/static/images/projects/dici.jpg',
            url: 'https://dici.ca/'
        },
        {
            title: 'Visual Branding',
            description: 'A visual branding service crafts a cohesive visual identity for businesses, including logos, color schemes, and design elements.',
            image: '/static/images/projects/mondoux-en.jpg',
            url: 'https://mondoux.ca/en/'
        },
        {
            title: 'Web Dev',
            description: 'A web development agency designs websites, secure solutions, often with UI/UX, SEO, or e-commerce features.',
            image: '/static/images/projects/sogetel.jpg',
            url: 'https://sogetel.com/'
        }
    ],
    id: [
        {
            title: 'Event Organizer',
            description: 'Agensi pemasaran di Trois‑Rivières yang mendukung merek, konten, dan aksi Anda di web dan media',
            image: '/static/images/projects/acolyte.jpg',
            url: 'https://acolyte.ws/'
        },
        {
            title: 'Bijouterie LSM',
            description: 'Toko perhiasan online yang dibangun dengan Shopify',
            image: '/static/images/projects/lsm.jpg',
            url: 'https://bijouterielsm.com/'
        },
        {
            title: 'Cartv',
            description: 'Organisasi yang menjaga dan membela keaslian produk makanan yang diakui oleh Pemerintah Quebec',
            image: '/static/images/projects/cartv.jpg',
            url: 'https://cartv.gouv.qc.ca/'
        },
        {
            title: 'Dici',
            description: 'Majalah dan etalase budaya di Mauricie, Quebec (Kanada)',
            image: '/static/images/projects/dici.jpg',
            url: 'https://dici.ca/'
        },
        {
            title: 'Mondoux',
            description: 'Perusahaan Kanada terkemuka dalam pengemasan dan distribusi permen dan cokelat berkualitas tinggi',
            image: '/static/images/projects/mondoux-fr.jpg',
            url: 'https://mondoux.ca/'
        },
        {
            title: 'Sogetel',
            description: 'Perusahaan telekomunikasi Kanada yang melayani berbagai wilayah di Quebec',
            image: '/static/images/projects/sogetel.jpg',
            url: 'https://sogetel.com/'
        }
    ]
};

export const PERSONAL_PROJECTS: Lang<Projects> = {
    en: [
        {
            title: 'Portfolio',
            description: 'Portfolio built with Next.js, Typescript and GSAP',
            image: '/static/images/projects/portfolio-en.jpg',
            githubUrl: 'https://github.com/gcolombi/personal-website'
        },
        {
            title: 'Linklist',
            description: 'Linktree clone built with Next.js, typescript and Tailwind',
            image: '/static/images/projects/linklist.jpg',
            url: 'https://linklist-domain.vercel.app/',
            githubUrl: 'https://github.com/gcolombi/linklist'
        },
        {
            title: 'Next.js TS starter',
            description: 'Next.js TypeScript starter that includes a collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP',
            image: '/static/images/projects/nextjs-typescript-starter.jpg',
            url: 'https://nextjs-typescript-gsap-starter.vercel.app/',
            githubUrl: 'https://github.com/gcolombi/nextjs-typescript-starter'
        },
        {
            title: 'Next.js starter',
            description: 'Next.js starter that includes a collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP',
            image: '/static/images/projects/nextjs-starter.jpg',
            url: 'https://nextjs-gsap-starter.vercel.app/',
            githubUrl: 'https://github.com/gcolombi/nextjs-starter'
        }
    ],
    id: [
        {
            title: 'Portfolio',
            description: 'Portofolio dibuat dengan Next.js, Typescript, dan GSAP',
            image: '/static/images/projects/portfolio-fr.jpg',
            githubUrl: 'https://github.com/gcolombi/personal-website'
        },
        {
            title: 'Linklist',
            description: 'Clone Linktree yang dibuat dengan Next.js, Typescript, dan Tailwind',
            image: '/static/images/projects/linklist.jpg',
            url: 'https://linklist-domain.vercel.app/',
            githubUrl: 'https://github.com/gcolombi/linklist'
        },
        {
            title: 'Next.js TS starter',
            description: 'Starter Next.js dan TypeScript yang berisi kumpulan komponen, hooks, dan utilitas yang dapat digunakan ulang untuk membangun proyek luar biasa dengan animasi kompleks dan transisi halaman menggunakan GSAP',
            image: '/static/images/projects/nextjs-typescript-starter.jpg',
            url: 'https://nextjs-typescript-gsap-starter.vercel.app/',
            githubUrl: 'https://github.com/gcolombi/nextjs-typescript-starter'
        },
        {
            title: 'Next.js starter',
            description: 'Starter Next.js yang berisi kumpulan komponen, hooks, dan utilitas yang dapat digunakan ulang untuk membangun proyek luar biasa dengan animasi kompleks dan transisi halaman menggunakan GSAP',
            image: '/static/images/projects/nextjs-starter.jpg',
            url: 'https://nextjs-gsap-starter.vercel.app/',
            githubUrl: 'https://github.com/gcolombi/nextjs-starter'
        }
    ]
};

export const FEATURED_PROJECT: Lang<ProjectProps> = {
    en: {
        title: 'Acolyte',
        description: 'Marketing agency in Trois-Rivières that supports your brand, your content and your actions on the web and in the media',
        image: '/static/images/projects/acolyte.jpg',
        url: 'https://acolyte.ws/',
        type: ProjectsType.PROJECTS
    },
    id: {
        title: 'Acolyte',
        description: 'Agensi pemasaran di Trois‑Rivières yang mendukung merek, konten, dan aksi Anda di web dan media',
        image: '/static/images/projects/acolyte.jpg',
        url: 'https://acolyte.ws/',
        type: ProjectsType.PROJECTS
    }
};

export const LATEST_PERSONAL_PROJECT: Lang<ProjectProps> = {
    en: {
        title: 'Linklist',
        description: 'Linktree clone built with Next.js, typescript and Tailwind',
        image: '/static/images/projects/linklist.jpg',
        url: 'https://linklist-domain.vercel.app/',
        githubUrl: 'https://github.com/gcolombi/linklist',
        type: ProjectsType.PERSONAL_PROJECTS
    },
    id: {
        title: 'Linklist',
        description: 'Clone Linktree yang dibuat dengan Next.js, Typescript, dan Tailwind',
        image: '/static/images/projects/linklist.jpg',
        url: 'https://linklist-domain.vercel.app/',
        githubUrl: 'https://github.com/gcolombi/linklist',
        type: ProjectsType.PERSONAL_PROJECTS
    }
};

export const TOTAL_PROJECTS = {
    en: PROJECTS['en'].length,
    id: PROJECTS['id'].length
};

export const TOTAL_PERSONAL_PROJECTS = {
    en: PERSONAL_PROJECTS['en'].length,
    id: PERSONAL_PROJECTS['id'].length
};

export const PROJECTS_TABS: Lang<ProjectsTabsType> = {
    en: [
        {
            title: 'Services',
            description: "A selected set of service I've built on our teams in the last few years.",
            type: ProjectsType.PROJECTS,
            total: toTwoDigits(TOTAL_PROJECTS['en'])
        },
        {
            title: 'Portofolio',
            description: "A selected set of personal projects I'm building as I navigate through ideas and technologies.",
            type: ProjectsType.PERSONAL_PROJECTS,
            total: toTwoDigits(TOTAL_PERSONAL_PROJECTS['en'])
        }
    ],
    id: [
        {
            title: 'Servis',
            description: 'Beberapa proyek pilihan yang saya buat sendiri atau bersama tim dalam beberapa tahun terakhir.',
            type: ProjectsType.PROJECTS,
            total: toTwoDigits(TOTAL_PROJECTS['id'])
        },
        {
            title: 'Portofolio',
            description: 'Beberapa proyek pribadi pilihan yang saya buat sambil menjelajahi ide dan teknologi.',
            type: ProjectsType.PERSONAL_PROJECTS,
            total: toTwoDigits(TOTAL_PERSONAL_PROJECTS['id'])
        }
    ]
};

export const PROJECTS_LIST: Lang<ProjectsList> = {
    en: {
        [ProjectsType.PROJECTS]: PROJECTS['en'],
        [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS['en']
    },
    id: {
        [ProjectsType.PROJECTS]: PROJECTS['id'],
        [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS['id']
    }
};
