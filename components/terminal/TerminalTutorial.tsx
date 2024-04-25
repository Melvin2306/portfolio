'use client';
import { TypeAnimation } from 'react-type-animation';

const tutorial = `Welcome to the personal portfolio website of Melvin Rinkleff. You can navigate this website like a Linux computer, just use the commands you already know or type 'commands' for an overview of all commands or use 'man <specific command>' to get the manual of a specific command. I wish you a lot of fun exploring my page ♡`;

export function TerminalTutorial() {
  return (
    <TypeAnimation
      sequence={[tutorial, 5000]}
      wrapper='div'
      speed={91}
      repeat={1}
      cursor={false}
      omitDeletionAnimation={true}
      className='mt-2'
    />
  );
}
