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

  return (
    <div className='mb-10'>
      {output.output.map((line: string, index: number) => (
        <div key={index}>{line}</div>
      ))}
      <div ref={outputEndRef} />
    </div>
  );
}

export default TerminalOutput;
