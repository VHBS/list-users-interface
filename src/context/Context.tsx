import { UserType } from '@component/@types/user';
import { Dispatch, ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type UserContext = {
  userData: UserType;
  setUserData: Dispatch<UserContext['userData']>;
  clipboard: string;
  setClipboard: Dispatch<string>;
};

const userContextDefaultValues: UserContext = {
  userData: {
    cell: '',
    dob: {
      age: 0,
      date: '',
    },
    email: '',
    gender: '',
    id: {
      name: '',
      value: '',
    },
    location: {
      city: '',
      coordinates: {
        latitude: '',
        longitude: '',
      },
      country: '',
      postcode: 0,
      state: '',
      street: {
        name: '',
        number: 0,
      },
      timezone: {
        description: '',
        offset: '',
      },
    },
    login: {
      md5: '',
      password: '',
      salt: '',
      sha1: '',
      sha256: '',
      username: '',
      uuid: '',
    },
    name: {
      first: '',
      last: '',
      title: '',
    },
    nat: '',
    phone: '',
    picture: {
      large: '',
      medium: '',
      thumbnail: '',
    },
    registred: {
      age: 0,
      date: '',
    },
  },
  setUserData: () => null,
  clipboard: '',
  setClipboard: () => null,
};

export const UsersContext = createContext<UserContext>(
  userContextDefaultValues,
);

export function UserContextProvider({ children }: Props) {
  const [userData, setUserData] = useState<UserContext['userData']>(
    userContextDefaultValues.userData,
  );
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
