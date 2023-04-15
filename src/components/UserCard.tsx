import { UserType } from '@component/@types/user';
import { UsersContext } from '@component/context/Context';
import { capitalize } from '@component/utils/utils';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

type UserCardProps = {
  user: UserType;
};

export default function UserCard({ user }: UserCardProps) {
  const { setUserData, clipboard, setClipboard } = useContext(UsersContext);
  const [userEmail, setUserEmail] = useState(<FiMail className="mx-auto" />);
  const [userCell, setUserCell] = useState(<FiPhone className="mx-auto" />);

  useEffect(() => {
    clipboard === user.email
      ? setUserEmail(<p className="text-xs">Copied</p>)
      : setUserEmail(<FiMail className="mx-auto" />);

    clipboard === user.cell
      ? setUserCell(<p className="text-xs">Copied</p>)
      : setUserCell(<FiPhone className="mx-auto" />);
  }, [clipboard, user]);

  return (
    <div
      className="my-3
      relative
      bg-white rounded
      drop-shadow
      card-user
    flex
    flex-col"
    >
      <img
        className="w-1/2 absolute rounded-full drop-shadow-md user-picture"
        alt="United States"
        src={user.picture.large}
      />
      <div className="container container-user-country-flag rounded-t">
        <div className="w-full gradient-flag ">
          <img
            className="w-full relative rounded-t user-country-flag"
            alt="United States"
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${user.nat}.svg`}
          />
        </div>
      </div>

      <div className="w-full mt-3 py-4 px-10 flex flex-col justify-center">
        <h1 className="font-bold my-3 text-center truncate">
          {user.name.first} {user.name.last}
        </h1>
        <div className="flex justify-between  items-center text-gray-700">
          Gender:
          <div className="flex justify-center items-center">
            {capitalize(user.gender)}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          className="rounded-l
          w-1/3
          p-2.5
          bg-stone-300
          text-slate-100
          hover:bg-green-400
          "
          type="button"
          title={user.cell}
          onClick={() => {
            navigator.clipboard.writeText(user.cell);
            setClipboard(user.cell);
          }}
        >
          {userCell}
        </button>
        <button
          className="rounded-r
          w-1/3
          p-2.5
          bg-blue-500
          text-slate-100
          hover:bg-blue-800
          border-l
          "
          type="button"
          title={user.email}
          onClick={() => {
            navigator.clipboard.writeText(user.email);
            setClipboard(user.email);
          }}
        >
          {userEmail}
        </button>
      </div>
      <Link
        href={`/user`}
        className="rounded-b
          text-center
          mt-2
          p-2
          text-purple-400
          hover:bg-purple-600
          hover:text-gray-100
          "
        type="button"
        title="Details"
        onClick={() => setUserData(user)}
      >
        Details
      </Link>
    </div>
  );
}
