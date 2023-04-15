import { UserType } from '@component/@types/user';
import { Dispatch, ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type UserContext = {
  userData: UserType | object;
  setUserData: Dispatch<UserContext['userData']>;
  clipboard: string;
  setClipboard: Dispatch<string>;
};

const userContextDefaultValues: UserContext = {
  userData: {},
  setUserData: () => null,
  clipboard: '',
  setClipboard: () => null,
};

export const UsersContext = createContext<UserContext>(
  userContextDefaultValues,
);

export function UserContextProvider({ children }: Props) {
  const [userData, setUserData] = useState<UserContext['userData']>({});
  const [clipboard, setClipboard] = useState<string>('');
  const value = {
    userData,
    setUserData,
    clipboard,
    setClipboard,
  };
  return (
    <>
      <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
    </>
  );
}
