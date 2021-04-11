import Head from 'next/head';
import { Header } from '../components/Header';
import { TimeLine } from '../components/TimeLine';
import { AboutMe } from '../components/AboutMe';
import { SkillsMap } from '../components/SkillsMap';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { POR } from '../components/POR';
import { Awards } from '../components/Awards';

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Priyankar's Portfolio</title>
      </Head>
      <div>
        <Header />
      </div>
      <main className="p-8">
        <div className="flex flex-row sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-evenly">
          <div className="md:w-full sm:w-full lg:w-3/6">
            <TimeLine />
          </div>
          <div className="lg:w-3/6 sm:w-full md:w-full md:ml-1 sm:mt-8 md:lg-8 lg:mt-0">
            <AboutMe />
          </div>
        </div>
        <div className="mt-8">
          <SkillsMap />
        </div>
        <div className="mt-8">
          <Projects />
        </div>
        <div className="mt-8 flex flex-row sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-evenly">
          <div className="lg:w-3/6 md:w-full sm:w-full">
            <Awards />
          </div>
          <div className="lg:w-3/6 md:ml-1 lg:mt-0 sm:w-full md:w-full sm:mt-8 md:mt-8">
            <POR />
          </div>
        </div>
      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  )
}
