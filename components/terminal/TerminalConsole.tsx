'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { executeCommand } from '@/lib/terminal/execudeCommand';
import { TerminalOutput as TerminalOutputType } from '@/types/output';
interface TerminalConsoleProps {
  onCommandExecute: (newOutput: TerminalOutputType, command: string) => void;
}

function TerminalConsole({ onCommandExecute }: TerminalConsoleProps) {
  const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState<number>(-1);

  const formSchema = z.object({
    command: z
      .string()
      .min(2, {
        message: 'command must be at least 2 characters long',
      })
      .max(50, {
        message: 'command must be at most 50 characters long',
      })
      .regex(/^[a-zA-Z0-9\s]+$/, {
        message: 'command must contain only letters, numbers, and spaces',
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      command: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result: TerminalOutputType = executeCommand(values.command);
      onCommandExecute(result, values.command);
    } catch (error) {
      if (error instanceof Error) {
        const errorOutput: TerminalOutputType = {
          user: '',
          output: [`Error: ${error.message}`],
        };
        onCommandExecute(errorOutput, values.command);
      } else {
        const errorOutput: TerminalOutputType = {
          user: '',
          output: ['An error occurred'],
        };
        onCommandExecute(errorOutput, values.command);
      }
    }
    setCommandHistory([...commandHistory, values.command]);
    setHistoryIndex(-1);
    form.reset();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      // ... (execution code remains unchanged)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newHistoryIndex = historyIndex + 1;
      if (newHistoryIndex < commandHistory.length) {
        setHistoryIndex(newHistoryIndex);
        const previousCommand =
          commandHistory[commandHistory.length - 1 - newHistoryIndex];
        form.setValue('command', previousCommand, { shouldValidate: true });
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newHistoryIndex = historyIndex - 1;
      if (newHistoryIndex >= -1) {
        setHistoryIndex(newHistoryIndex);
        const nextCommand =
          newHistoryIndex === -1
            ? ''
            : commandHistory[commandHistory.length - 1 - newHistoryIndex];
        form.setValue('command', nextCommand, { shouldValidate: true });
      }
    }
  }

  return (
    <div className='flex flex-1 pr-2'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
          <FormField
            control={form.control}
            name='command'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='text'
                    autoComplete='off'
                    placeholder='Type your command here...'
                    autoFocus
                    style={{ width: '100%' }}
                    onKeyDown={handleKeyDown}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

export default TerminalConsole;
