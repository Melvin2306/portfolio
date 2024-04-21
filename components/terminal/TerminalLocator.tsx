'use client';
import { useUser } from '@/context/UserContext';
import React, { useState } from 'react';

function TerminalLocator() {
  const { currentUser, setCurrentUser } = useUser();
  const [location, setLocation] = useState('host');
  return (
    <div className='w-3/10 content-center'>
      <span className='cursor-default'>{currentUser}</span>
      <span className='cursor-default'>@</span>
      <span className='cursor-default'>{location}</span>
    </div>
  );
}

export default TerminalLocator;
