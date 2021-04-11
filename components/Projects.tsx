import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faNpm, faTwitter, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


interface IPropsDescription {
    name: string;
    description: string;
    link: () => JSX.Element;
}

const projects = [
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
        description: 'An Amazon Alexa Skill that helps keep track of your new year resolutions and tweet your progress to your followers.',
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
    }
];

export const ProjectDescriptionCard = (props: IPropsDescription) => {
    return <div className="shadow-inner p-2">
        <div className="grid grid-cols-3 divide-x divide-gray-500">
            <div className="font-display font-bold p-2">{props.name}</div>
            <div className="font-body p-2">{props.description}</div>
            <div className="p-2">{props.link()}</div>
        </div>
    </div>

}

export const Projects = () => {
    return <div className="w-full z-10 shadow-lg mr-8">
        <h3 className="p-2 font-display font-bold">Personal Projects Showcase</h3>
        <div>
            {
                projects.map((ele, index) => <ProjectDescriptionCard name={ele.name} description={ele.description} link={ele.link} />)
            }
        </div>
    </div>
}