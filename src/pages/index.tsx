import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`${inter.className} container mx-auto flex flex-col justify-center items-center h-screen`}
    >
      <div className="h-1/2 container flex justify-center items-center">
        <h1>Users List Web Interface</h1>
      </div>

      <div className="h-1/2 container flex justify-center items-center">
        <button
          className="rounded-full
        p-2.5
        bg-purple-700
        text-slate-100
        hover:bg-purple-900"
          type="button"
          onClick={() => router.push('/users/1')}
        >
          Show me the users now!
        </button>
      </div>
    </main>
  );
}
