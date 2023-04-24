'use item';
import { Table } from '@/types';
import { createContext, useContext } from 'react';

type ProfileContextType = {
  profile: Table<'profile'> | undefined;
};
export const ProfileContext = createContext<ProfileContextType>({
  profile: undefined,
});

export function useProfileContext() {
  return useContext(ProfileContext);
}

export function ProfileContextProvider({
  children,
  profile,
}: {
  children: React.ReactNode;
  profile: Table<'profile'>;
}) {
  return (
    <ProfileContext.Provider value={{ profile: profile }}>
      {children}
    </ProfileContext.Provider>
  );
}
