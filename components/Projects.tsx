import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm, faGooglePlay, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

interface IPropsDescription {
    name: string;
    description: string;
    link: {
        url: string,
        iconType: 'github' | 'npm' | 'googlePlay' | 'amazon' | 'paperclip'
    }[];
}

interface IPropsProjects {
    projects: IPropsDescription[];
}

const IconMapper = (iconType: 'github' | 'npm' | 'googlePlay' | 'amazon' | 'paperclip') => {
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
        default:
            return faGithub;
    }
}

export const ProjectDescriptionCard = (props: IPropsDescription) => {
    return (
        <div className="shadow-inner p-2">
            <div className="grid grid-cols-3 divide-x divide-gray-500">
                <div className="font-display font-bold p-2 my-auto">{props.name}</div>
                <div className="font-body p-2 ">{props.description}</div>
                <div className="p-2">
                    <div className="flex flex-row">
                        {
                            props.link.map((linkObj, index) => (
                                <a key={index} href={linkObj.url} target="_blank" className="ml-2">
                                    <FontAwesomeIcon icon={IconMapper(linkObj.iconType)} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Projects = (props: IPropsProjects) => {
    return (
        <div className="w-full z-10 shadow-lg mr-8">
            <h3 className="p-2 font-display font-bold">Personal Projects Showcase (Select)</h3>
            <div>
                {
                    props.projects.map((project, index) => (
                        <ProjectDescriptionCard key={index} name={project.name} description={project.description} link={project.link} />
                    ))
                }
            </div>
        </div>
    )
}
