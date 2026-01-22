import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arohance - Tech & Marketing',
  description: 'Pioneering the future of Marketing with innovative solutions of Digital Marketing and Tech.',
  keywords: 'Digital Marketing, Tech, Marketing, Arohance, Physical Marketing, Media, Content, Production, Digital Transformation',
  openGraph: {
    title: 'Arohance - Advanced Marketing Solutions',
    description: 'Pioneering the future of Marketing with innovative solutions of Digital Marketing and Tech.',
    type: 'website',
    locale: 'en_US',
    url: 'https://arohance.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}