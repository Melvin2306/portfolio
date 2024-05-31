'use client';
import React, { useState } from 'react';
import TerminalDisplay from '@/components/terminal/TerminalDisplay';
import TerminalInput from '@/components/terminal/TerminalInput';
import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { useDirectory } from '@/context/DirectoryContext';
import { useUser } from '@/context/UserContext';
import { useHost } from '@/context/HostContext';

let emyptyOutput: TerminalOutputType = {
  user: '',
  directory: '',
  theme: '',
  output: [],
};

function TerminalWindow() {
  const { currentUser } = useUser();
  const { currentDirectory } = useDirectory();
  const { currentHost } = useHost();
  const [lastCommand, setLastCommand] = useState<string>('');
  const [terminalOutput, setTerminalOutput] =
    useState<TerminalOutputType>(emyptyOutput);

  const handleCommandExecution = (
    newOutput: TerminalOutputType,
    command: string
  ) => {
    const prompt = `${currentUser}@${currentHost}: ${currentDirectory} ${command}`;
    setLastCommand(command);
    setTerminalOutput((prevOutput) => ({
      ...prevOutput,
      output: [...prevOutput.output, prompt, ...newOutput.output],
    }));
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
