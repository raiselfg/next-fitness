import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono, Outfit } from 'next/font/google';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme/theme-provider';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next Fitness',
  description: 'Next Fitness - Your personal fitness coach and calorie tracker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster position="top-center" duration={3500} />
      </body>
    </html>
  );
}
