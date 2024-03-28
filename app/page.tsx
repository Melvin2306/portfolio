import Footer from '@/components/Footer';
import TerminalWindow from '@/components/terminal/TerminalWindow';

export default function Home() {
  return (
    <main className='flex h-screen flex-col gap-2 p-4'>
      <TerminalWindow />
      <Footer />
    </main>
  );
}
