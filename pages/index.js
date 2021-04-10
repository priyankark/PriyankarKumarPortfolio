import Head from 'next/head';
import {Header} from '../components/Header';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Priyankar's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}
