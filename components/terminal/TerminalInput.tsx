import React from 'react';
import TerminalLocator from '@/components/terminal/TerminalLocator';
import TerminalConsole from '@/components/terminal/TerminalConsole';

function TerminalInput() {
  return (
    <div className='h-3/10 flex w-full flex-row gap-2'>
      <TerminalLocator />
      <TerminalConsole />
    </div>
  );
}

export default TerminalInput;
