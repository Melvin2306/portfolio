'use client';
import React, { useState } from 'react';

function TerminalLocator() {
  const [user, setUser] = useState('guest');
  const [location, setLocation] = useState('host');
  return (
    <div className='w-3/10 content-center'>
      <span className=''>{user}</span>
      <span>@</span>
      <span className=''>{location}</span>
    </div>
  );
}

export default TerminalLocator;
