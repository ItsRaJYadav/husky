import type { Metadata } from 'next';

import Header from '@/components/dashboard/header';
import HeaderMobile from '@/components/dashboard/header-mobile';
import MarginWidthWrapper from '@/components/dashboard/margin-width-wrapper';
import PageWrapper from '@/components/dashboard/page-wrapper';
import SideNav from '@/components/dashboard/side-nav';

import '../../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className={`bg-white`}>
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </div>

  );
}
