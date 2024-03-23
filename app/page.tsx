import Footer from '@/components/Footer';
import TerminalWindow from '@/components/terminal/TerminalWindow';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function Home() {
  return (
    <main className='flex h-screen flex-col gap-2 p-4'>
      <TerminalWindow />
      <Footer />
    </main>
  );
}
