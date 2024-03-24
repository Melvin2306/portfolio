import React from 'react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

function Footer() {
  return (
    <div className='h-2/10 flex items-center justify-between'>
      <div className='flex flex-row items-center gap-2 '>
        <p>
          Made by{' '}
          <a
            title='Link to LinkedIn of Melvin Rinkleff'
            href='https://www.linkedin.com/in/melvin-rinkleff/'
          >
            Melvin Rinkleff
          </a>
        </p>
        <a
          title='Link to LinkedIn of Melvin Rinkleff 2'
          href='https://www.linkedin.com/in/melvin-rinkleff/'
        >
          <LinkedinIcon size={18} />
        </a>
      </div>

      <div className='flex flex-row items-center gap-2 '>
        <p>
          Check source code here:{' '}
          <a
            title='Link to Github of Melvin Rinkleff'
            href='https://github.com/Melvin2306/'
          >
            Github
          </a>
        </p>{' '}
        <a
          title='Link to Github of Melvin Rinkleff 2'
          href='https://github.com/Melvin2306/'
        >
          {' '}
          <GithubIcon size={18} />
        </a>
      </div>
      <div className='flex flex-row items-center gap-2 '>
        <p>Change dark/light mode</p>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Footer;
