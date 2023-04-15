import { useRouter } from 'next/navigation';

export const UserNotSelected = () => {
  const router = useRouter();

  return (
    <main
      className={`container mx-auto flex flex-col justify-center items-center h-screen`}
    >
      <div className="h-1/2 container flex justify-center items-center">
        <h1>User not selected :/</h1>
      </div>

      <div className="h-1/2 container flex justify-center items-center">
        <button
          className="rounded-full
      p-2.5
      bg-purple-700
      text-slate-100
      hover:bg-purple-900"
          type="button"
          onClick={() => router.push('/users/1?results=12')}
        >
          Show me the users now!
        </button>
      </div>
    </main>
  );
};
