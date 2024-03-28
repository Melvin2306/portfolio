import React from 'react';
import TerminalWelcome from './TerminalWelcome';
import { TerminalTutorial } from './TerminalTutorial';

import { ScrollArea, ScrollBar } from '../ui/scroll-area';

interface TerminalDisplayProps {
  output: string;
}

const messages = [
  { id: 1, message: 'hello' },
  { id: 2, message: 'bye' },
];

function TerminalDisplay({ output }: TerminalDisplayProps) {
  return (
    // <div className='relative'>
    <ScrollArea className='relative h-full overflow-hidden'>
      <TerminalWelcome />
      <TerminalTutorial />
      {/* <TerminalOutput /> */}
      {messages.map((content, index) => (
        <div key={index}>{content.message}</div>
      ))}
      <ScrollBar />
    </ScrollArea>
    // </div>
  );
}

export default TerminalDisplay;
