import Head from 'next/head';
import { Header } from '../components/Header';
import { TimeLine } from '../components/TimeLine';
import { AboutMe } from '../components/AboutMe';
import { SkillsMap } from '../components/SkillsMap';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <div className="w-full mr-2">
      <Head>
        <title>Priyankar's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mr-2">
        <Header />
      </div>
      <main className="w-full mt-8 ml-8 mb-8 mr-8">
        <div className="flex lg:flex-row">
          <div className="w-3/6">
            <AboutMe />
          </div>
          <div className="w-3/6 ml-1">
            <TimeLine />
          </div>
        </div>
        <div className="mt-8 ">
          <SkillsMap />
        </div>
        <div className="mt-8">
          <Projects />
        </div>
      </main>
    </div>
  )
}
