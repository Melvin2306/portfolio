'use client';
import React from 'react';
import { useRef, useEffect } from 'react';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

interface MessageProps {
  output: TerminalOutputType;
}

function TerminalOutput({ output }: MessageProps) {
  const outputEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [output]);

  // Find the index of the last occurrence of 'clear' in the output
  const lastClearIndex = output.output.reduce(
    (acc, line, index) => (line.includes('clear') ? index : acc),
    -1
  );

  // Slice the output array to get only the lines after the last 'clear'
  const outputAfterClear =
    lastClearIndex !== -1
      ? output.output.slice(lastClearIndex + 1)
      : output.output;

  return (
    <div className='mb-10'>
      {outputAfterClear.map((line: string, index: number) => (
        <div key={index}>{line}</div>
      ))}
      <div ref={outputEndRef} />
    </div>
  );
}

export default TerminalOutput;
