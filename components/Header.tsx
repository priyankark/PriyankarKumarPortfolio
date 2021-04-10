import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Header = () => {
    return <header className="flex z-10 font-display rounded-lg justify-evenly items-center bg-gray-100 h-32 w-full shadow-lg">
        <div className="flex flex-col">
            <div className="font-display text-2xl font-bold">
                PRIYANKAR KUMAR
            </div>
            <div className="font-display text-xs font-light mx-auto">
                SOFTWARE ENGINEER
            </div>
            <div className="flex flex-row items-between">
                <div>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </div>
                <div>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </div>
            </div>
        </div>
    </header>
}