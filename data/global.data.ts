import { CallToActionContent, FooterContent, Lang, MetaDataProps, NavigationRoutes, Translations } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const NAVIGATION_ROUTES: Lang<NavigationRoutes> = {
    en: [
        { href: '/projects', title: 'Projects' },
        { href: '/about', title: 'About' },
        { href: '/contact', title: 'Contact' }
    ],
    id: [
        { href: '/projects', title: 'Proyek' },
        { href: '/about', title: 'Tentang' },
        { href: '/contact', title: 'Kontak' }
    ]
};

export const FOOTER: Lang<FooterContent> = {
    en: {
        title: 'Front-end Developer'
    },
    id: {
        title: 'Perayaan Istimewa'
    }
};

export const CALL_TO_ACTION: Lang<CallToActionContent> = {
    en: {
        title: 'Get in touch',
        buttonLabel: 'Contact me',
        buttonHref: '/contact'
    },
    id: {
        title: 'Hubungi Saya',
        buttonLabel: 'Kontak saya',
        buttonHref: '/contact'
    }
};

export const META_404: Lang<MetaDataProps> = {
    en: {
        title: `Error 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    id: {
        title: `Kesalahan 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const PAGE_NOT_FOUND_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: 'Page not found',
        content: 'Cannot read properties of undefined. The page you are looking for could not be found.',
        button: {
            label: 'Please get me out of here'
        }
    },
    id: {
        title: 'Halaman tidak ditemukan',
        content: 'Tidak dapat membaca properti yang tidak terdefinisi. Halaman yang Anda cari tidak ditemukan.',
        button: {
            label: 'Tolong keluarkan saya dari sini'
        }
    }
};

export const TRANSLATIONS: Lang<Translations> = {
    en: [
        { key: 'Front-end Developer Full stack capable, passionate about building appealing and interactive web experiences.', value: 'Front-end Developer Full stack capable, passionate about building appealing and interactive web experiences.' },
        { key: 'Visit website', value: 'Visit website' },
        { key: 'All rights reserved', value: 'All rights reserved' },
        { key: 'First name', value: 'First name' },
        { key: 'Last name', value: 'Last name' },
        { key: 'Email', value: 'Email' },
        { key: 'Send', value: 'Send' },
        { key: 'Sending', value: 'Sending' },
        { key: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.', value: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.' },
        { key: 'Your message is on its way!', value: 'Your message is on its way!' },
        { key: 'Thank you, your message has been sent successfully.', value: 'Thank you, your message has been sent successfully.' },
        { key: 'Form has errors.', value: 'Form has errors.' },
        { key: 'This field is required.', value: 'This field is required.' },
        { key: 'The specified email address is invalid.', value: 'The specified email address is invalid.' },
        { key: 'An error occurred while sending the email.', value: 'An error occurred while sending the email.' },
        { key: 'Internal Server Error.', value: 'Internal Server Error.' },
        { key: 'ReCaptcha validation failed.', value: 'ReCaptcha validation failed.' },
        { key: 'Error validating captcha', value: 'Error validating captcha' },
        { key: 'Close', value: 'Close' }
    ],
    id: [
        {
            key: 'Front-end Developer Full stack capable, passionate about building appealing and interactive web experiences.',
            value: 'Pengembang Front-end dengan kemampuan Full Stack, antusias membangun pengalaman web yang menarik dan interaktif.'
        },
        { key: 'Visit website', value: 'Kunjungi situs' },
        { key: 'All rights reserved', value: 'Hak cipta dilindungi undang-undang' },
        { key: 'First name', value: 'Nama depan' },
        { key: 'Last name', value: 'Nama belakang' },
        { key: 'Email', value: 'Email' },
        { key: 'Send', value: 'Kirim' },
        { key: 'Sending', value: 'Mengirim' },
        {
            key: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.',
            value: 'Situs ini dilindungi oleh reCAPTCHA dan <a href="https://policies.google.com/privacy">Kebijakan Privasi</a> serta <a href="https://policies.google.com/terms">Ketentuan Layanan</a> Google berlaku.'
        },
        { key: 'Your message is on its way!', value: 'Pesan Anda sedang dikirim!' },
        { key: 'Thank you, your message has been sent successfully.', value: 'Terima kasih, pesan Anda telah berhasil dikirim.' },
        { key: 'Form has errors.', value: 'Formulir memiliki kesalahan.' },
        { key: 'This field is required.', value: 'Kolom ini wajib diisi.' },
        { key: 'The specified email address is invalid.', value: 'Alamat email yang dimasukkan tidak valid.' },
        { key: 'An error occurred while sending the email.', value: 'Terjadi kesalahan saat mengirim email.' },
        { key: 'Internal Server Error.', value: 'Kesalahan Server Internal.' },
        { key: 'ReCaptcha validation failed.', value: 'Validasi ReCaptcha gagal.' },
        { key: 'Error validating captcha', value: 'Kesalahan saat memvalidasi captcha' },
        { key: 'Close', value: 'Tutup' }
    ]
};
