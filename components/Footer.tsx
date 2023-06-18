import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-200 p-8 z-10 shadow-md">
      <div className="mx-auto text-center">
        <p>
          Designed & Developed by Priyankar Kumar
        </p>
        <p className="mt-2">
          Built with
          <FontAwesomeIcon icon={faHeart} className="mx-1 text-red-500" />
          using
          <FontAwesomeIcon icon={faReact} className="mx-1 text-blue-500" />,
          Next.js, and Tailwind CSS
        </p>
        <p className="mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
            style={{backgroundColor: "black"}}
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Clone my portfolio
          </button>
        </p>
      </div>
    </footer>
  );
};
