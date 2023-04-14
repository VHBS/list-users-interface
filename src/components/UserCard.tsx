import { UserType } from '@component/@types/user';
import { FiMail, FiPhone } from 'react-icons/fi';

type UserCardProps = {
  user: UserType;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="my-3 relative bg-white rounded drop-shadow card-user">
      <img
        className="w-1/2 absolute rounded-full drop-shadow-md user-picture"
        alt="United States"
        src={user.picture.large}
      />
      <div className="container container-user-country-flag rounded-t">
        <div className="w-full gradient-picture ">
          <img
            className="w-full relative rounded-t user-country-flag"
            alt="United States"
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${user.nat}.svg`}
          />
        </div>
      </div>

      <div className="w-full my-3 p-3 flex flex-col justify-center">
        <h1 className="font-bold my-3 text-center truncate">
          {user.name.first} {user.name.last}
        </h1>
        <div className="flex justify-between  items-center text-gray-700">
          gender:
          <div className="flex justify-center items-center">{user.gender}</div>
        </div>
        <p>{user.cell}</p>
      </div>
      <button
        className="rounded
          align-center
          p-1
          bg-neutral-300
          text-slate-100
          hover:bg-neutral-900
          "
        type="button"
        title={user.email}
        onClick={() => navigator.clipboard.writeText(user.email)}
      >
        Detalhes
      </button>
      <div className="w-full">
        <button
          className="rounded-l
          w-1/2
          p-2.5
          bg-neutral-300
          text-slate-100
          hover:bg-neutral-900
          "
          type="button"
          title={user.email}
          onClick={() => navigator.clipboard.writeText(user.email)}
        >
          <FiPhone className="mx-auto" />
        </button>
        <button
          className="rounded-r
          w-1/2
          p-2.5
          bg-neutral-300
          text-slate-100
          hover:bg-neutral-900
          "
          type="button"
          title={user.email}
          onClick={() => navigator.clipboard.writeText(user.email)}
        >
          <FiMail className="mx-auto" />
        </button>
      </div>
    </div>
  );
}
