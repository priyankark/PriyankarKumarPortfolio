import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faReact} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return <footer className="flex flex-col bg-display-100 p-8 z-10 shadow-inner">
        <div className="mx-auto">
            {`Designed & Developed by Priyankar Kumar`}
        </div>
        <div className="mx-auto">
            <span> Built with <FontAwesomeIcon icon={faHeart}/> using  <FontAwesomeIcon icon={faReact}/> , Next.js and Tailwind CSS </span>
        </div>
    </footer>
}