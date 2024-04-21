import React from 'react';
import TerminalLocator from '@/components/terminal/TerminalLocator';
import TerminalConsole from '@/components/terminal/TerminalConsole';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

interface TerminalInputProps {
  onCommandExecute: (output: TerminalOutputType) => void;
}

function TerminalInput({ onCommandExecute }: TerminalInputProps) {
  return (
    <div className='h-3/10 absolute bottom-0 flex w-full flex-row gap-2 border-t border-primary bg-background px-3 pb-1'>
      <TerminalLocator />
      <TerminalConsole onCommandExecute={onCommandExecute} />
    </div>
  );
}

export default TerminalInput;
