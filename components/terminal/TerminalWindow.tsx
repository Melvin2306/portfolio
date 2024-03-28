import React from 'react';
import TerminalDisplay from '@/components/terminal/TerminalDisplay';
import TerminalInput from '@/components/terminal/TerminalInput';

function TerminalWindow() {
  return (
    <div className='flex flex-1 rounded-xl border border-primary'>
      <div className='relative w-full p-3'>
        <TerminalDisplay />
        <TerminalInput />
      </div>
    </div>
  );
}

export default TerminalWindow;
