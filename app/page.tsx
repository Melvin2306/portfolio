'use client';
import Footer from '@/components/Footer';
import TerminalWindow from '@/components/terminal/TerminalWindow';
import { useEffect } from 'react';

export default function Home() {
  const activeTitle = 'MelvinOS - Melvin Rinkleff';
  const inactiveTitle = 'Shutting down...';

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
    <main className='flex h-screen flex-col gap-2 px-2.5 pb-1.5 pt-2.5'>
      <TerminalWindow />
      <Footer />
    </main>
  );
}
