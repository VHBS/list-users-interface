import { UserType } from '@component/@types/user';
import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';

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

  if ('error' in data || data.results.length === 0)
    return <p>Usuários não encontrados :/</p>;

  return (
    <main className="container h-screen mx-auto">
      <h1>Usuarios</h1>
      {results.length &&
        results.map((user: UserType) => {
          return (
            <div key={user.id.value}>
              <h1>
                {user.name.first} {user.name.last}
              </h1>
              <p>{user.gender}</p>
              <p>{user.cell}</p>
            </div>
          );
        })}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://randomuser.me/api/?nat=br&page=${context.params}&results=10&seed=colab`,
  );
  const data = (await res.json()) as UsersPageProps;

  return { props: { data } };
};
