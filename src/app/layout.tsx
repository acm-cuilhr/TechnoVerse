import type React from 'react';
import { Inter, Raleway } from 'next/font/google';
import { announcements } from '@/data/announcements';

import AnnouncementBanner from '@/components/announcement-banner';
import Header from '@/components/header';
import Footer from '@/components/home/footer';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'TechnoVerse 5.0 - Empower, Innovate, Connect',
  description:
    "TechnoVerse 5.0 - Lahore's Premier University Tech Fest. 13 competitions, 750K+ prize pool, 3000+ participants. 2nd - 3rd May, 2026 at COMSATS University Lahore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${raleway.variable} font-sans bg-background text-foreground`}
      >
        <Header />
        <AnnouncementBanner announcements={announcements} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
