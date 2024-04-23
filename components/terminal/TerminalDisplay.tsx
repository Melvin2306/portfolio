import React from 'react';
import TerminalWelcome from './TerminalWelcome';
import { TerminalTutorial } from './TerminalTutorial';
import TerminalOutput from './TerminalOutput';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

import { ScrollArea, ScrollBar } from '../ui/scroll-area';

interface TerminalDisplayProps {
  output: TerminalOutputType;
}

function TerminalDisplay({ output }: TerminalDisplayProps) {
  return (
    <ScrollArea className='relative h-full p-3'>
      <TerminalWelcome />
      <TerminalTutorial />
      <TerminalOutput output={output} />
      <ScrollBar />
    </ScrollArea>
  );
}

export default TerminalDisplay;
