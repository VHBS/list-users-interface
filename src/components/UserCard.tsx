import { UserType } from '@component/@types/user';
import { capitalize } from '@component/utils/utils';
import { FiMail, FiPhone } from 'react-icons/fi';

type UserCardProps = {
  user: UserType;
};

export default function UserCard({ user }: UserCardProps) {
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
        <div className="flex justify-between  items-center text-gray-700">
          <div className="flex justify-center items-center">
            {/* {user.location.city} */}
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
          onClick={() => navigator.clipboard.writeText(user.cell)}
        >
          <FiPhone className="mx-auto" />
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
          // onClick={() => window.open('mailstring')}
          onClick={() => navigator.clipboard.writeText(user.email)}
        >
          <FiMail className="mx-auto" />
        </button>
      </div>
      <button
        className="rounded-b
          mt-2
          outline-1
          p-1
          text-purple-400
          hover:bg-purple-600
          hover:text-gray-100
          "
        type="button"
        title="Details"
      >
        Details
      </button>
    </div>
  );
}
