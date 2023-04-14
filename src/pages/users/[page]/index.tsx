import { UserType } from '@component/@types/user';
import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import Link from 'next/link';
import UserCard from '@component/components/UserCard';

type UsersPageProps = {
  data: {
    results: UserType[];
  };
};

export default function UsersPage({ data }: UsersPageProps) {
  const { results } = data;
  useEffect(() => {
    console.log(data);
  }, [data]);

  if ('error' in data) return <p>Users not found :/</p>;

  return (
    <main className="container min-h-screen mx-auto">
      <Link href={`/`} className="hover:animate-pulse">
        HOME
      </Link>

      <h1 className="my-3 text-center">Users</h1>

      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-10 px-3">
        {results.length &&
          results.map((user: UserType) => {
            return <UserCard key={user.cell} user={user} />;
          })}
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://randomuser.me/api/?nat=${context.query.nat}&page=${context.params}&results=${context.query.results}&seed=colab`,
  );
  const data = (await res.json()) as UserType[];

  return { props: { data } };
};
