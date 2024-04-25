import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { DirectoryProvider } from '@/context/DirectoryContext';
import { UserProvider } from '@/context/UserContext';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { HostProvider } from '@/context/HostContext';
import { ColorProvider } from '@/context/ColorContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Portfolio page of Melvin Rinkleff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ColorProvider>
            <UserProvider>
              <HostProvider>
                <DirectoryProvider>
                  {children}

                  <Analytics />
                  <SpeedInsights />
                </DirectoryProvider>
              </HostProvider>
            </UserProvider>
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
