import Head from 'next/head';
import { Header } from '../components/Header';
import TimeLine from '../components/TimeLine';
import { AboutMe } from '../components/AboutMe';
import { SkillsMap } from '../components/SkillsMap';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { POR } from '../components/POR';
import { Awards } from '../components/Awards';
import ExperienceTimelineData from '../configs/experience_timeline.json';
import ProjectsData from '../configs/projects.json';

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
        <div className="w-full">
          <AboutMe />
        </div>
        <div className="w-full mt-8">
          <TimeLine steps={ExperienceTimelineData} />
        </div>
        <div className="mt-8">
          <SkillsMap />
        </div>
        <div className="mt-8">
          <Projects projects={ProjectsData} />
        </div>
        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-evenly mt-8">
          <div className="lg:w-3/6 w-full">
            <Awards />
          </div>
          <div className="lg:w-3/6 lg:mt-0 w-full mt-8 lg:ml-1">
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
