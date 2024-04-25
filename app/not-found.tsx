import TerminalWindow404 from '@/components/404/TerminalWindow404';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className='flex h-screen flex-col gap-2 p-4'>
      <TerminalWindow404 />
      <Footer />
    </main>
  );
}
