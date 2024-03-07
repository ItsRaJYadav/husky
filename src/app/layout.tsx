import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Provider from './AllProviders';

import '../styles/globals.css';
const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Bidinn : Bid Kro INN Kro',
  description: 'BidINN is an emerging Indian brand in the hospitality world.',
  icons: {
    icon: ['/favicon_io/favicon.ico'],
    apple: ['/favicon_io/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon_io/apple-touch-icon.png']
  },
  openGraph: {
    title: 'Bidinn : Bid Kro INN Kro',
    description: 'BidINN is an emerging Indian brand in the hospitality world. We provide a platform for anyone who wishes to list their vacant properties with us and rent them to the common public. We solicit a varied range of hotels-leased as well as franchised, living arenas and homes.',
    url: 'https://bidinn.in',
    siteName: 'BidInn',

    images: [
      {
        url: 'https://bidinn.in/logo/logo.svg.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://bidinn.in/logo/logo.svg.jpg',
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
