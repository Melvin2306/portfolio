'use client';
import React, { useState } from 'react';
import TerminalDisplay from '@/components/terminal/TerminalDisplay';
import TerminalInput from '@/components/terminal/TerminalInput';

function TerminalWindow() {
  const [terminalOutput, setTerminalOutput] = useState('');

  const handleCommandExecution = (output: string) => {
    setTerminalOutput(output);
  };
  return (
    <div className='flex flex-1 rounded-xl border border-primary'>
      <div className='relative w-full p-3'>
        <TerminalDisplay output={terminalOutput} />
        <TerminalInput onCommandExecute={handleCommandExecution} />
      </div>
    </div>
  );
}

export default TerminalWindow;
