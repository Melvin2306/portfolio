'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const UserContext = createContext<{
  currentUser: string;
  setCurrentUser: (user: string) => void;
}>({
  currentUser: 'guest',
  setCurrentUser: () => {},
});

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState('guest'); // Store the current user here

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
