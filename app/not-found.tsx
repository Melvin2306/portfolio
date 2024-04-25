'use client';
import TerminalWindow404 from '@/components/404/TerminalWindow404';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function NotFound() {
  const activeTitle = '404 Page Not Found';
  const inactiveTitle = 'Don`t leave me...';

  useEffect(() => {
    const handleBlur = () => {
      document.title = inactiveTitle;
    };

    const handleFocus = () => {
      document.title = activeTitle;
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    document.title = activeTitle;

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);
  return (
    <main className='flex h-screen flex-col gap-2 p-4'>
      <TerminalWindow404 />
      <Footer />
    </main>
  );
}
