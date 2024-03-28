import React from 'react';
import TerminalLocator from '@/components/terminal/TerminalLocator';
import TerminalConsole from '@/components/terminal/TerminalConsole';

interface TerminalInputProps {
  onCommandExecute: (output: string) => void;
}

function TerminalInput({ onCommandExecute }: TerminalInputProps) {
  return (
    <div className='h-3/10 absolute bottom-0 flex w-full flex-row gap-2 px-2 pb-2'>
      <TerminalLocator />
      <TerminalConsole onCommandExecute={onCommandExecute} />
    </div>
  );
}

export default TerminalInput;
