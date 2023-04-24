'use item';
import { createContext, useContext } from 'react';

type PathnameContextType = {
  previousPathname: string;
};
export const PathnameContext = createContext<PathnameContextType>({
  previousPathname: '',
});

export function usePathnameContext() {
  return useContext(PathnameContext);
}

export function PathnameContextProvider({
  children,
  previousPathname,
}: {
  children: React.ReactNode;
  previousPathname: string;
}) {
  return (
    <PathnameContext.Provider value={{ previousPathname: previousPathname }}>
      {children}
    </PathnameContext.Provider>
  );
}
