import { FEATURED_PROJECT, LATEST_PERSONAL_PROJECT } from './projects.data';
import { Lang } from '@/types/components/global';
import { HomeHeaderProps } from '@/types/components/headers';
import { HomeIntroductionContent } from '@/types/components/introductions';
import { HomeFeaturedProjectContent } from '@/types/components/sections';

export const HOME_HEADER: Lang<HomeHeaderProps> = {
    en: {
        titles: ['Front-end', 'Developer'],
        subfield: 'Full stack capable',
        image: '/static/images/peristiwa-home.jpg',
        content: 'Maker of things with passion and excellence',
        name: ['PERISTIWA', 'AGENCY']
    },
    id: {
        titles: ['Perayaan', 'Istimewa'],
        subfield: 'Rayakan',
        image: '/static/images/peristiwa-home.jpg',
        content: 'kamu Layak Dirayakan',
        name: ['PERISTIWA', 'AGENCY']
    }
};

export const HOME_INTRODUCTION: Lang<HomeIntroductionContent> = {
    en: {
        titles: [
            'Passionate about web technologies, I have always been excited about the entire development spectrum. Front-end addicted and frequently engage in backend.',
            'When I\'m not coding or exploring new web technologies, I am playing video games or watching the latest movies and tv shows released.'
        ],
        content: [
            'Over the years I have spent time converting designs into pixel-perfect, performant, accessible and responsive applications/websites. Each project is an opportunity to learn new concepts across multiple domains.',
            'I simply love working on ambitious projects on my own or with positive people.'
        ],
        button: {
            label: 'More about me',
            href: '/about'
        }
    },
    id: {
        titles: [
            'Saya sangat antusias dengan teknologi web dan selalu tertarik dengan seluruh spektrum pengembangan. Saya sangat menyukai front-end dan sering terlibat di backend.',
            'Saat saya tidak ngoding atau menjelajahi teknologi web baru, saya biasanya bermain game atau menonton film dan acara TV terbaru.'
        ],
        content: [
            'Selama bertahun-tahun, saya telah mengubah desain menjadi aplikasi/situs web yang pixel-perfect, berkinerja tinggi, mudah diakses, dan responsif. Setiap proyek adalah kesempatan untuk belajar hal baru di berbagai bidang.',
            'Saya sangat senang mengerjakan proyek ambisius baik secara mandiri maupun dengan orang-orang yang positif.'
        ],
        button: {
            label: 'Lebih lanjut tentang saya',
            href: '/about'
        }
    }
};

export const HOME_FEATURED_PROJECT_CONTENT: Lang<HomeFeaturedProjectContent> = {
    en: {
        title: 'Featured work',
        button: {
            label: 'See all projects',
            href: {
                pathname: '/projects',
                query: {
                    type: FEATURED_PROJECT['en'].type
                }
            }
        }
    },
    id: {
        title: 'Proyek unggulan',
        button: {
            label: 'Lihat semua proyek',
            href: {
                pathname: '/projects',
                query: {
                    type: FEATURED_PROJECT['id'].type
                }
            }
        }
    }
};

export const HOME_LATEST_PROJECT_CONTENT: Lang<HomeFeaturedProjectContent> = {
    en: {
        title: 'Latest personnal project',
        button: {
            label: 'See all personal projects',
            href: {
                pathname: '/projects',
                query: {
                    type: LATEST_PERSONAL_PROJECT['en'].type
                }
            }
        }
    },
    id: {
        title: 'Proyek pribadi terbaru',
        button: {
            label: 'Lihat semua proyek pribadi',
            href: {
                pathname: '/projects',
                query: {
                    type: LATEST_PERSONAL_PROJECT['id'].type
                }
            }
        }
    }
};
