import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

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
  description: 'Data Enthusiast, AI Developer, and ML Engineer specializing in machine learning, data analytics, and building intelligent systems.',
  keywords: ['Data Science', 'Machine Learning', 'AI', 'Deep Learning', 'Python', 'TensorFlow', 'Computer Vision'],
  authors: [{ name: 'Reyone Chaudhary' }],
  openGraph: {
    title: 'Reyone Chaudhary | Data & AI Developer',
    description: 'Data Enthusiast, AI Developer, and ML Engineer specializing in machine learning, data analytics, and building intelligent systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reyone Chaudhary | Data & AI Developer',
    description: 'Data Enthusiast, AI Developer, and ML Engineer specializing in machine learning, data analytics, and building intelligent systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-background dark:bg-background-dark text-text-primary dark:text-text-dark-primary font-body">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
