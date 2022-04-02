import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'nprogress/nprogress.css';

import '../styles/globals.css';

const Nprogress = dynamic(
  () => {
    return import('~/components/nprogress');
  },
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nprogress />
      <Component {...pageProps} />
    </>
  );
}
