'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { executeCommand } from '@/lib/terminal/execudeCommand';

interface TerminalConsoleProps {
  onCommandExecute: (output: string) => void;
}

function TerminalConsole({ onCommandExecute }: TerminalConsoleProps) {
  const formSchema = z.object({
    command: z.string().min(2, {
      message: 'command must be at least 2 characters long',
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
      const result = executeCommand(values.command);
      if (result !== '') {
        onCommandExecute(result);
      } else {
        onCommandExecute(`Command not found: ${values.command}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        onCommandExecute(`Error: ${error.message}`);
      } else {
        onCommandExecute(
          'An unknown error occurred, check the console for more information.'
        );
        console.error('An unknown error occurred:', error);
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
