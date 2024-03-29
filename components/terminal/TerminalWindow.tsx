'use client';
import React, { useState } from 'react';
import TerminalDisplay from '@/components/terminal/TerminalDisplay';
import TerminalInput from '@/components/terminal/TerminalInput';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

let emyptyOutput: TerminalOutputType = {
  user: '',
  output: [],
};

function TerminalWindow() {
  const [terminalOutput, setTerminalOutput] =
    useState<TerminalOutputType>(emyptyOutput);

  const handleCommandExecution = (output: TerminalOutputType) => {
    setTerminalOutput(output);
  };
  return (
    <div className='flex h-full flex-1 overflow-hidden rounded-xl border border-primary'>
      <div className='relative w-full'>
        <TerminalDisplay output={terminalOutput} />
        <TerminalInput onCommandExecute={handleCommandExecution} />
      </div>
    </div>
  );
}

export default TerminalWindow;
