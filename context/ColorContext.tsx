'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const ColorContext = createContext<{
  currentColor: string;
  setCurrentColor: (Color: string) => void;
}>({
  currentColor: 'red',
  setCurrentColor: () => {},
});

export const useColor = () => useContext(ColorContext);

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider = ({ children }: ColorProviderProps) => {
  const [currentColor, setCurrentColor] = useState('red');

  return (
    <ColorContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </ColorContext.Provider>
  );
};
