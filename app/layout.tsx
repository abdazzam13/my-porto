import type { Metadata } from 'next';
import { EB_Garamond, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--garamond-font',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--serif4-font',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Abdullah Azzam — The Digital Alchemist',
  description:
    'Google-certified Associate Android Developer and Software Engineer with 4+ years of experience engineering high-performance, scalable mobile and web applications. Expert in React, Next.js, Flutter, and Kotlin.',
  keywords: [
    'Software Engineer',
    'Flutter Developer',
    'React Developer',
    'Android Developer',
    'Next.js Developer',
    'Mobile Developer',
    'Abdullah Azzam',
  ],
  authors: [{ name: 'Abdullah Azzam', url: 'https://github.com/abdazzam13' }],
  openGraph: {
    title: 'Abdullah Azzam — The Digital Alchemist',
    description:
      'Software Engineer specializing in mobile and web development — React, Next.js, Flutter, Kotlin.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${sourceSerif4.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
