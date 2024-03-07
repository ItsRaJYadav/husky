import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'All avaliable hotels by bidinn',
    description: 'BidINN is an emerging Indian brand in the hospitality world.',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'All avaliable hotels by bidinn: bid kro in kro',
        description: 'We provide a platform for anyone who wishes to list their vacant properties with us and rent them to the common public. We solicit a varied range of hotels-leased as well as franchised, living arenas and homes.',
        url: 'https://bidinn.in',
        siteName: 'BidInn',
        images: [
            {
                url: 'https://bidinn.in/og.png',
                width: 800,
                height: 600,
            },
            {
                url: 'https://bidinn.in/og-alt.png',
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
