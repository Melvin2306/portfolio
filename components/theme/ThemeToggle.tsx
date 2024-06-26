'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useColor } from '@/context/ColorContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { currentColor } = useColor();

  return (
    <DropdownMenu>
      <div className='relative'>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon'>
            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        {theme === 'light' && (
          <div
            className='absolute'
            style={{ top: '-0.25rem', right: '-0.25rem' }}
          >
            <span className='relative flex h-2 w-2'>
              <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-${currentColor}-500 opacity-75`}
              ></span>
              <span
                className={`relative inline-flex h-3 w-3 rounded-full bg-${currentColor}-500`}
              ></span>
            </span>
          </div>
        )}
      </div>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark (Recommended)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
