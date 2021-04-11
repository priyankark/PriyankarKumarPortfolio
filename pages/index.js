import Head from 'next/head';
import { Header } from '../components/Header';
import { TimeLine } from '../components/TimeLine';
import { AboutMe } from '../components/AboutMe';
import { SkillsMap } from '../components/SkillsMap';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Priyankar's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full mt-8 ml-8 mb-8">
        <div className="flex md:flex-row">
          <div className="w-3/6">
            <TimeLine />
          </div>
          <div className="w-3/6 ml-2">
            <AboutMe />
          </div>
        </div>
        <div className="mt-8 mr-20">
          <SkillsMap />
        </div>
      </main>
    </div>
  )
}
