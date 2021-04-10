import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faNpm, faTwitter, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { SocialMediaPanel } from './SocialMediaPanel';

export const Header = () => {
    return <header className="flex z-10 font-display rounded-lg justify-evenly items-center bg-gray-100 h-32 w-full shadow-lg">
        <div className="flex flex-col">
            <div className="font-display text-2xl font-bold">
                PRIYANKAR KUMAR
            </div>
            <div className="font-display text-xs font-light mx-auto">
                SOFTWARE ENGINEER
            </div>
            <div className="mx-auto">
                <SocialMediaPanel />
            </div>
        </div>
    </header>
}