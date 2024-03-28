import React from 'react';
import TerminalLocator from '@/components/terminal/TerminalLocator';
import TerminalConsole from '@/components/terminal/TerminalConsole';

function TerminalInput() {
  return (
    <div className='h-3/10 absolute bottom-0 flex w-full flex-row gap-2 px-2 pb-2'>
      <TerminalLocator />
      <TerminalConsole />
    </div>
  );
}

export default TerminalInput;
