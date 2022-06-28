import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm, faGooglePlay, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

interface IPropsDescription {
    name: string;
    description: string;
    link: () => JSX.Element;
}

const projects = [
    {
        name: 'Course: Alexa 101, Designing Voice Apps for Alexa',
        description: 'An interactive course that teaches learners how to build voice apps for Alexa using practical examples and projects. Made in collaboration with Educative.',
        link: () => {
            return <div className="flex flex-row text-sm">
                <a href="https://www.educative.io/courses/building-voice-apps-alexa" target="_blank" className="ml-2">
                    Educative
                </a>
            </div>
        }
    },
    {
        name: 'Sensor Streamer',
        description: 'An Android app that allows the user to stream phone sensor info, images and audio in realtime to a provided server running on their Raspberry Pi/computer.',
        link: () => {
            return <div className="flex flex-row text-sm">
                <a href="https://play.google.com/store/apps/details?id=com.sensorsensei" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGooglePlay} />
                </a>
                <a href="https://github.com/priyankark/SensorStreamServer" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        }
    },
    {
        name: 'Phone Pi Sensor Streamer',
        description: 'An Android app that allows the user to stream phone sensor info in realtime to a provided server running on their Raspberry Pi/computer.',
        link: () => {
            return <div className="flex flex-row text-sm">
                <a href="https://play.google.com/store/apps/details?id=com.phonepi&hl=en_IN&gl=US" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGooglePlay} />
                </a>
                <a href="https://github.com/priyankark/PhonePi_SampleServer" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        }
    },
    {
        name: 'Resolution Tracker',
        description: 'An Amazon Alexa Skill that helps keep track of your new year resolutions and helps tweet your progress to your followers.',
        link: () => {
            return <div className="flex flex-row text-lg">
                <a href="https://www.amazon.com/Priyankar-Kumar-Resolution-Tracker/dp/B078HHJHF5/ref=sr_1_3?dchild=1&keywords=resolution+tracker&qid=1618128208&s=digital-skills&sr=1-3" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faAmazon} />
                </a>
            </div>
        }
    },
    {
        name: 'Trivia Quest',
        description: 'An Amazon Alexa game to test your wits and climb on top of a global leaderboard.',
        link: () => {
            return <div className="flex flex-row text-lg">
                <a href="https://www.amazon.com/Invoke-Genie-Trivia-Quest/dp/B07MKPRVPB/ref=sr_1_1?dchild=1&keywords=trivia+quest+alexa&qid=1618128305&sr=8-1" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faAmazon} />
                </a>
            </div>
        }
    },
    {
        name: 'Multi-step Wizard Fluent',
        description: 'A fully cuztomizable React component to build your own multi-step forms.',
        link: () => {
            return <div className="flex flex-row text-lg">
                <a href="https://www.npmjs.com/package/multistep-wizard-fluent" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faNpm} />
                </a>
                <a href="https://github.com/priyankark/multistep-wizard-fluent" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        }
    },
    {
        name: 'Voice Clues',
        description: 'A cross platform voice game available on Google Assistant and Amazon Alexa built using Jovo.',
        link: () => {
            return <div className="flex flex-row text-lg">
                <a href="https://www.amazon.in/Priyankar-Kumar-Voice-Clues/dp/B07JJQGPL3/ref=sr_1_1?ie=UTF8&qid=1540278564&sr=8-1&keywords=Voice+Clues" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faAmazon} />
                </a>
                <a href="https://assistant.google.com/services/a/uid/0000008ecacec0f2?hl=en" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGooglePlay} />
                </a>
                <a href="https://github.com/priyankark/VoiceClues" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        }
    },
    {
        name: 'SMS Genie',
        description: 'An SMS bot to aid in education in remote areas where internet penetration is poor.',
        link: () => {
            return <div className="flex flex-row text-lg">
                <a href="https://devpost.com/software/sms-genie?ref_content=user-portfolio&ref_feature=in_progress" target="_blank" className="ml-2">
                    <FontAwesomeIcon icon={faPaperclip} />
                </a>
            </div>
        }
    },
];

export const ProjectDescriptionCard = (props: IPropsDescription) => {
    return <div className="shadow-inner p-2">
        <div className="grid grid-cols-3 divide-x divide-gray-500">
            <div className="font-display font-bold p-2 my-auto">{props.name}</div>
            <div className="font-body p-2 ">{props.description}</div>
            <div className="p-2"><div className="my-auto">{props.link()}</div></div>
        </div>
    </div>

}

export const Projects = () => {
    return <div className="w-full z-10 shadow-lg mr-8">
        <h3 className="p-2 font-display font-bold">Personal Projects Showcase (Select)</h3>
        <div>
            {
                projects.map((ele, index) => <ProjectDescriptionCard key={index} name={ele.name} description={ele.description} link={ele.link} />)
            }
        </div>
    </div>
}