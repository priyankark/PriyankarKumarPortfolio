import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm, faGooglePlay, faAmazon, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

type IconTypes = 'github' | 'npm' | 'googlePlay' | 'amazon' | 'paperclip' | 'twitter' | 'linkedin';

interface IPropsDescription {
    name: string;
    description: string;
    image?: string;
    link: {
        url: string,
        iconType: IconTypes
    }[];
}

interface IPropsProjects {
    projects: IPropsDescription[];
}

const IconMapper = (iconType: IconTypes) => {
    switch (iconType) {
        case 'github':
            return faGithub;
        case 'npm':
            return faNpm;
        case 'googlePlay':
            return faGooglePlay;
        case 'amazon':
            return faAmazon;
        case 'paperclip':
            return faPaperclip;
        case 'twitter':
            return faTwitter;
        case 'linkedin':
            return faLinkedin;
        default:
            return faGithub;
    }
}

export const ProjectDescriptionCard = (props: IPropsDescription) => {
    return (
        <motion.div 
            className="shadow-lg p-4 my-2 bg-white rounded-xl grid grid-cols-1 sm:grid-cols-3 divide-x divide-gray-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {props.image && <img src={props.image} alt={props.name} className="h-20 w-full sm:h-auto sm:w-1/3 object-cover rounded-lg" />}
            <div className="font-display font-bold p-2 my-auto">{props.name}</div>
            <div className="font-body p-2">{props.description}</div>
            <div className="p-2">
                <div className="flex flex-row">
                    {
                        props.link.map((linkObj, index) => (
                            <a key={index} href={linkObj.url} target="_blank" rel="noopener noreferrer" className="ml-2">
                                <FontAwesomeIcon icon={IconMapper(linkObj.iconType)} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export const Projects = (props: IPropsProjects) => {
    return (
        <motion.div className="w-full z-10 shadow-lg mr-8">
            <h3 className="p-2 font-display font-bold">Personal Projects Showcase (Select)</h3>
            <div>
                {
                    props.projects.map((project, index) => (
                        <ProjectDescriptionCard key={index} {...project} />
                    ))
                }
            </div>
        </motion.div>
    )
}
