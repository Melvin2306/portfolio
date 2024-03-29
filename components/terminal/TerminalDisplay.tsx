import React from 'react';
import TerminalWelcome from './TerminalWelcome';
import { TerminalTutorial } from './TerminalTutorial';
import TerminalOutput from './TerminalOutput';
import { TracingBeam } from '../ui/tracing-beam';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

import { ScrollArea, ScrollBar } from '../ui/scroll-area';

interface TerminalDisplayProps {
  output: TerminalOutputType;
}

const messages = [
  { id: 1, message: 'hello' },
  { id: 2, message: 'bye' },
  { id: 1, message: 'hello' },
  { id: 2, message: 'bye' },
  { id: 1, message: 'hello' },
  { id: 2, message: 'bye' },
  { id: 1, message: 'hello' },
  { id: 2, message: 'bye' },
  { id: 1, message: 'hello' },
  { id: 2, message: 'bye' },
];

function TerminalDisplay({ output }: TerminalDisplayProps) {
  return (
    <ScrollArea className='relative h-full p-3'>
      <TerminalWelcome />
      <TerminalTutorial />
      {/* <TracingBeam className='px-6'> */}
      <TerminalOutput output={output} />
      {/* </TracingBeam> */}
      <ScrollBar />
    </ScrollArea>
  );
}

export default TerminalDisplay;
