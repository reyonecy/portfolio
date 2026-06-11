import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reyone Chaudhary | Data & AI Developer',
  description: 'Data Enthusiast, AI Developer, and Software Engineer specializing in machine learning, data analytics, and building intelligent applications.',
  keywords: ['Data Science', 'Machine Learning', 'AI', 'Software Engineer', 'Python', 'Next.js'],
  authors: [{ name: 'Reyone Chaudhary' }],
  openGraph: {
    title: 'Reyone Chaudhary | Data & AI Developer',
    description: 'Data Enthusiast, AI Developer, and Software Engineer specializing in machine learning, data analytics, and building intelligent applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reyone Chaudhary | Data & AI Developer',
    description: 'Data Enthusiast, AI Developer, and Software Engineer specializing in machine learning, data analytics, and building intelligent applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-text-primary font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
