import ScrollRevealInit from '@/components/common/ScrollRevealnit';
import './globals.css';
import PersonSchema from '@/components/PersonSchema';
import BackToTop from '@/components/layout/BackToTop';

export const metadata = {
  metadataBase: new URL('https://laxmannath.com.np'), 
  title: {
    default: 'Laxman Nath — Fullstack Developer',
    template: '%s | Laxman Nath',
  },
  description:
    'Backend-focused fullstack developer specializing in Java, Spring Boot, Node.js, and React. Based in Kathmandu, Nepal.',
  keywords: [
    'Laxman Nath',
    'Fullstack Developer',
    'Backend Developer',
    'Java Developer',
    'Spring Boot',
    'Node.js Developer',
    'React Developer',
    'Kathmandu Nepal Developer',
  ],
  authors: [{ name: 'Laxman Nath' }],
  creator: 'Laxman Nath',
  openGraph: {
    title: 'Laxman Nath — Fullstack Developer',
    description: 'Backend-focused fullstack developer specializing in Java, Spring Boot, Node.js, and React.',
    url: 'https://your-domain.vercel.app',
    siteName: 'Laxman Nath',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laxman Nath — Fullstack Developer',
    description: 'Backend-focused fullstack developer specializing in Java, Spring Boot, Node.js, and React.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
         <PersonSchema />
        <ScrollRevealInit />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}