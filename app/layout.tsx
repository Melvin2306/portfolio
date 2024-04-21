import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { DirectoryProvider } from '@/context/DirectoryContext';
import { UserProvider } from '@/context/UserContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Welcome to MelvinOS',
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
          <UserProvider>
            <DirectoryProvider>{children}</DirectoryProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
