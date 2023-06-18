import * as React from 'react';
import data from '../configs/about_me.json';

export const AboutMe = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold leading-7 text-gray-900 sm:text-xl sm:truncate">
              {"About Me"}
            </h2>
            <div className="mt-1 shadow-sm">
              {data.map((paragraph, index) => (
                <p key={index} className="mt-2 text-gray-600 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
