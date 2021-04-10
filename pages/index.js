import Head from 'next/head';
import {Header} from '../components/Header';
import {TimeLine} from '../components/TimeLine';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Priyankar's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="w-full">
      <div className="mt-8 ml-8">
        <TimeLine/>
      </div>
      </main>
    </div>
  )
}
