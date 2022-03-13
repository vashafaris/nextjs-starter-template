import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold">
          Welcome to <a href="https://nextjs.org">Next.js Starter Template!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
