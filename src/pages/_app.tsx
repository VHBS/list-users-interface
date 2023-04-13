import { UserContextProvider } from '@component/context/context'
import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <UserContextProvider>
      <Head>
        <title>Users Web Interface Project</title>
      </Head>
      <Component {...pageProps} />
    </UserContextProvider>
  </>
  )
}
