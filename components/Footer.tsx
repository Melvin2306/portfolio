'use client';
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='h-2/10 flex items-center justify-between'>
      <div className='flex flex-row items-center gap-3 '>
        <p>Made by Melvin Rinkleff</p>
        <a
          title='Link to LinkedIn of Melvin Rinkleff'
          href='https://www.linkedin.com/in/melvin-rinkleff/'
        >
          <LinkedinIcon size={18} />
        </a>
        <a
          title='Link to Github of Melvin Rinkleff'
          href='https://github.com/Melvin2306/'
        >
          {' '}
          <GithubIcon size={18} />
        </a>
        <a
          title='Link to Youtube of Melvin Rinkleff'
          href='https://www.youtube.com/@melvin23060'
        >
          {' '}
          <YoutubeIcon size={18} />
        </a>
      </div>

      <div className='flex flex-row items-center gap-2 '>
        <p className={`${window.innerWidth < 550 ? 'hidden' : ''}`}>
          Change dark/light mode
        </p>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Footer;
