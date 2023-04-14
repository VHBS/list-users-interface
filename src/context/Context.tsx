import { UserType } from '@component/@types/user';
import { Dispatch, ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type UserContext = {
  userData: UserType | object;
  setUserData: Dispatch<UserContext['userData']>;
};

const userContextDefaultValues: UserContext = {
  userData: {},
  setUserData: () => null,
};

const UsersContext = createContext<UserContext>(userContextDefaultValues);

export function UserContextProvider({ children }: Props) {
  const [userData, setUserData] = useState<UserContext['userData']>({});
  const value = {
    userData,
    setUserData,
  };
  return (
    <>
      <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
    </>
  );
}
