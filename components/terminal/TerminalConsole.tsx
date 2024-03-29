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
  onCommandExecute: (output: TerminalOutputType) => void;
}

function TerminalConsole({ onCommandExecute }: TerminalConsoleProps) {
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
      onCommandExecute(result);
    } catch (error) {
      if (error instanceof Error) {
        const errorOutput: TerminalOutputType = {
          user: '',
          output: [`Error: ${error.message}`],
        };
        onCommandExecute(errorOutput);
      } else {
        const errorOutput: TerminalOutputType = {
          user: '',
          output: ['An error occurred'],
        };
        onCommandExecute(errorOutput);
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
                    placeholder='Type your command here...'
                    autoFocus
                    style={{ width: '100%' }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        form.handleSubmit(onSubmit)();
                      }
                    }}
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
