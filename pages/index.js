import Head from 'next/head';
import { Header } from '../components/Header';
import TimeLine from '../components/TimeLine';
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
        <div className="w-full">
          <AboutMe />
        </div>
        <div className="w-full">
          <TimeLine steps={[
            { dates: "Mar 2022 - Current", position: 'SWE-2', company: 'OPG, E+D, Microsoft IDC' },
            { dates: "July 2019 - Feb 2022", position: 'SWE', company: 'C+E, C+AI, Microsoft IDC' },
            { dates: "Jan 2019 - June 2019", position: 'Project Trainee', company: 'CAIR, DRDO' },
            { dates: "Oct 2018 - June 2019", position: 'SWE (remote)', company: 'Voiceqube' },
            { dates: "Summer 2018", position: 'Summer Intern', company: 'Voycefirst' },
            { dates: "Summer 2017", position: 'Summer Intern', company: 'IIIT Hyderabad' },
            { dates: "July 2015 - June 2019", position: "Student, B.Tech. CSE", company: "Manipal Institute of Technology" }
          ]} />
        </div>
        <div className="mt-8">
          <SkillsMap />
        </div>
        <div className="mt-8">
          <Projects />
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
