import React from 'react';
import { TerminalTutorial } from '../terminal/TerminalTutorial';
import TerminalOutput from '../terminal/TerminalOutput';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import ImprintWelcome from './ImprintWelcome';

interface ImprintDisplayProps {
  output: TerminalOutputType;
}

function ImprintDisplay({ output }: ImprintDisplayProps) {
  return (
    <ScrollArea className='relative h-full p-3'>
      <ImprintWelcome />
      <TerminalTutorial />
      <TerminalOutput output={output} />
      <ScrollBar />
    </ScrollArea>
  );
}

export default ImprintDisplay;
