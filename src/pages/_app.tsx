import { UserContextProvider } from '@component/context/Context';
import '@component/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
          color: black;
        }
      `}</style>
      <UserContextProvider>
        <Head>
          <title>Users Web Interface Project</title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
            integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
            crossOrigin=""
          />
        </Head>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
