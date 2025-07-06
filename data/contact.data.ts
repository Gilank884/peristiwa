import { Lang, MetaDataProps } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const META_CONTACT: Lang<MetaDataProps> = {
    en: {
        title: `Contact | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    id: {
        title: `Contact | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const CONTACT_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: 'Contact',
        content: 'We at Peristiwa Agency are ready to bring your ideas and projects to life. Feel free to reach out for discussions, collaborations, or any inquiries.'
    },
    id: {
        title: 'Contact',
        content: 'Kami di Peristiwa Agency siap membantu mewujudkan ide dan proyek Anda menjadi kenyataan. Jangan ragu untuk menghubungi kami untuk diskusi, kolaborasi, atau pertanyaan lebih lanjut.'
    }
};