import React from 'react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

function Footer() {
  return (
    <div className='h-2/10 flex items-center justify-between'>
      <p>Footer</p>
      <ThemeToggle />
    </div>
  );
}

export default Footer;
