import ScrollRevealInit from '@/components/ScrollRevealnit';
import './globals.css';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'Laxman Nath — Fullstack Developer',
  description: 'Backend-focused fullstack developer. Java, Spring Boot, Node.js, React.',
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
        <ScrollRevealInit />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}