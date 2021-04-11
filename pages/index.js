import Head from 'next/head';
import { Header } from '../components/Header';
import { TimeLine } from '../components/TimeLine';
import { AboutMe } from '../components/AboutMe';
import { SkillsMap } from '../components/SkillsMap';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Priyankar's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
      </div>
      <main className="p-8">
        <div className="flex flex-row justify-evenly">
          <div className="w-3/6">
            <TimeLine />
          </div>
          <div className="w-3/6 ml-1">
            <AboutMe />
          </div>
        </div>
        <div className="mt-8">
          <SkillsMap />
        </div>
        <div className="mt-8">
          <Projects />
        </div>
      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  )
}
