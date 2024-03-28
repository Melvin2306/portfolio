'use client';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const tutorial = `Welcome to the personal portfolio website of Melvin Rinkleff. You can navigate this website like a Linux computer, just use the commands you already know or type 'commands' for an overview of all commands or use 'man <specific command>' to get the manual of a specific command. I wish you a lot of fun exploring my page ♡`;

export function TerminalTutorial() {
  return <TextGenerateEffect words={tutorial} />;
}
