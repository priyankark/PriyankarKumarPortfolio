import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faNpm, faTwitter, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export const SocialMediaPanel = () => {
    return <div className="flex flex-row justify-between">
        <a href="https://github.com/priyankark" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.npmjs.com/~priyankark" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faNpm} />
        </a>
        <a href="https://play.google.com/store/apps/developer?id=Priyankar+Kumar&hl=en_IN&gl=US" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faGooglePlay} />
        </a>
        <a href="https://www.linkedin.com/in/priyankarkumar/" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/priyankar97" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="mailto:priyankar.kumar98@gmail.com" target="_blank" className="ml-2">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
    </div>
}