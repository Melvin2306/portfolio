'use client';
import React from 'react';
import { useRef, useEffect } from 'react';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

interface MessageProps {
  output: TerminalOutputType;
  user: string;
  directory: string;
  host: string;
  lastCommand: string;
}

function TerminalOutput({
  output,
  user,
  directory,
  host,
  lastCommand,
}: MessageProps) {
  const outputEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [output]);

  return (
    <div className='mb-10'>
      <span>
        {user}@{host}: {directory} {lastCommand}
      </span>
      {output.output.map((line: string, index: number) => (
        <div key={index}>{line}</div>
      ))}
      <div ref={outputEndRef} />
    </div>
  );
}

export default TerminalOutput;
