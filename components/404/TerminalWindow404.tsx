'use client';
import React, { useState } from 'react';
import NotFoundWelcome from './404Welcome';
import { NotFoundText } from './404Text';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

function TerminalWindow404() {
  return (
    <div className='flex h-full flex-1 overflow-hidden rounded-xl border border-primary'>
      <div className='relative w-full'>
        <div className='relative h-5/6 p-3'>
          <NotFoundWelcome />
          <NotFoundText />
        </div>
      </div>
    </div>
  );
}

export default TerminalWindow404;
