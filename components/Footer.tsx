'use client';
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideAtSign,
  YoutubeIcon,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useColor } from '@/context/ColorContext';

function Footer() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const { currentColor } = useColor();

  useEffect(() => {
    setWindowWidth(window.innerWidth);

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
      <div className='flex flex-row items-center gap-3'>
        <span>
          Made by{' '}
          <span
            className={`cursor-default hover:animate-pulse hover:text-${currentColor}-500`}
          >
            Melvin Rinkleff
          </span>
        </span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                className='cursor-default hover:text-blue-500'
                href='https://www.linkedin.com/in/melvin-rinkleff/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedinIcon size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent className='whitespace-normal break-words'>
              <span>
                Link to <span className='text-blue-500'>LinkedIn</span> of
                Melvin Rinkleff
                <br />
                Just click the icon and the link will open in a new tab
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {' '}
              <a
                className='cursor-default hover:text-violet-500'
                href='https://github.com/Melvin2306/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <GithubIcon size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent className='whitespace-normal break-words'>
              <span>
                Link to <span className='text-violet-500'>Github</span> of
                Melvin Rinkleff
                <br />
                Just click the icon and the link will open in a new tab
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                className='cursor-default hover:text-red-500'
                href='https://www.youtube.com/@melvin23060'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <YoutubeIcon size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent className='whitespace-normal break-words'>
              <span>
                Link to <span className='text-red-500'>Youtube</span> of Melvin
                Rinkleff
                <br />
                Just click the icon and the link will open in a new tab
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                className='cursor-default hover:text-fuchsia-400'
                href='https://www.instagram.com/melvin_2306/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <InstagramIcon size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent className='whitespace-normal break-words'>
              <span>
                Link to <span className='text-fuchsia-400'>Instagram</span> of
                Melvin Rinkleff
                <br />
                Just click the icon and the link will open in a new tab
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                className='cursor-default hover:text-lime-500'
                href='mailto:melvin@rinkleff.dev'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <LucideAtSign size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent className='whitespace-normal break-words'>
              <span>
                Link to open your mail program and send an{' '}
                <span className='text-lime-500'>Email</span> to Melvin Rinkleff
                <br />
                Just click the icon and email will open in your default mail app
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className='flex flex-row items-center gap-2 '>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p
                className={`cursor-default ${typeof windowWidth !== 'undefined' && windowWidth < 550 ? 'hidden' : ''}`}
              >
                Change dark/light mode
              </p>
            </TooltipTrigger>
            <TooltipContent className='whitespace-normal break-words'>
              <span>
                I personally recommend{' '}
                <span className={`text-${currentColor}-500`}>dark mode</span>
                <br />
                Who uses their terminal in light mode anyways?!
              </span>{' '}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Footer;
