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
        <div className="w-full mt-8">
          <TimeLine steps={[
            {
              dates: "Mar 2022 - Current", position: 'SWE-2', company: 'OPG, E+D, Microsoft IDC', description: [
                "Working on new initiatives in the Productivity Innovations & Incubation team in the Office AI division.",
                "Rapid prototyping and new product development with various emerging technologies.",
                "Partnering with GitHub Next to take my hackathon innovation Hello Cody to market via the GitHub Copilot Voice project."
              ], skills: ["TypeScript", "NodeJS", "ReactJS", "Open AI", "LLM", "Prompt Engineering", "Python"]
            },
            {
              dates: "July 2019 - Current", position: 'SWE-1', company: 'C+E, C+AI, Microsoft IDC', description: [
                "Worked as a full-stack developer with a front-end concentration in the Azure Commerce+Ecosystems group in Azure Cloud+AI.",
                "Designed and helped develop some of the most critical tools and apps used by Microsoft sellers everyday."
              ], skills: ["PySpark", "Databricks", "React.js", "Typescript"]
            },
            {
              dates: "July 2019 - Current", position: 'SWE-1', company: 'C+E, C+AI, Microsoft IDC', description: [
                "Worked as a full-stack developer with a front-end concentration in the Azure Commerce+Ecosystems group in Azure Cloud+AI.",
                "Designed and helped develop some of the most critical tools and apps used by Microsoft sellers everyday."
              ], skills: ["PySpark", "Databricks", "React.js", "Typescript"]
            },
            {
              dates: "Oct 2018 - June 2019", position: 'SWE (part-time)', company: 'VoiceQube', description: [
                "Part-time role where I developed consumer-grade Alexa Skills and Google Assistant actions for clients.",
                "Also developed end-to-end solutions for clients around managing app content, integrating Alexa with Raspberry Pi, etc."
              ], skills: ["Node.js", "DynamoDB", "AWS Lambda"]
            },
            {
              dates: "Summer 2018", position: 'Summer Intern', company: 'Voycefirst', description: [
                "Ideated, developed, and deployed several consumer-facing Amazon Alexa Skills using Node.js, DynamoDB, and AWS Lambda.",
                "One of the skills developed, Trivia Nation, won the Skill of the Month award for the best game skill in a monthly contest organized by Amazon at the time."
              ], skills: ["Node.js", "DynamoDB", "AWS Lambda"]
            },
            {
              dates: "Summer 2017", position: 'Summer Intern', company: 'IIIT Hyderabad', description: [
                "Interned at the Lab for Spatial Informatics where I worked on building a GUI application to convert 2D CAD drawing models into GIS ready data models."
              ], skills: ["GUI development", "CAD", "GIS"]
            }
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
