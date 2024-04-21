'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const DirectoryContext = createContext<{
  currentDirectory: string;
  setCurrentDirectory: (directory: string) => void;
}>({
  currentDirectory: '/home/guest',
  setCurrentDirectory: () => {},
});

export const useDirectory = () => useContext(DirectoryContext);

interface DirectoryProviderProps {
  children: ReactNode;
}

export const DirectoryProvider = ({ children }: DirectoryProviderProps) => {
  const [currentDirectory, setCurrentDirectory] = useState('/home/guest');

  return (
    <DirectoryContext.Provider
      value={{ currentDirectory, setCurrentDirectory }}
    >
      {children}
    </DirectoryContext.Provider>
  );
};
