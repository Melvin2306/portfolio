'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const HostContext = createContext<{
  currentHost: string;
  setCurrentHost: (Host: string) => void;
}>({
  currentHost: 'rinkleff.dev',
  setCurrentHost: () => {},
});

export const useHost = () => useContext(HostContext);

interface HostProviderProps {
  children: ReactNode;
}

export const HostProvider = ({ children }: HostProviderProps) => {
  const [currentHost, setCurrentHost] = useState('rinkleff.dev'); // Store the current Host here

  return (
    <HostContext.Provider value={{ currentHost, setCurrentHost }}>
      {children}
    </HostContext.Provider>
  );
};
