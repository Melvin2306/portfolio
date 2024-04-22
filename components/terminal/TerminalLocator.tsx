'use client';
import { useDirectory } from '@/context/DirectoryContext';
import { useHost } from '@/context/HostContext';
import { useUser } from '@/context/UserContext';
import React, { useState } from 'react';

function TerminalLocator() {
  const { currentUser } = useUser();
  const { currentDirectory } = useDirectory();
  const { currentHost } = useHost();
  return (
    <div className='w-3/10 content-center'>
      <span className='cursor-default'>{currentUser}</span>
      <span className='cursor-default'>@</span>
      <span className='cursor-default'>{currentHost}</span>
      <span className='cursor-default'>:</span>{' '}
      <span className='cursor-default'>{currentDirectory}</span>
    </div>
  );
}

export default TerminalLocator;
