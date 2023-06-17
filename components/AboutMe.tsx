import * as React from 'react';

export const AboutMe = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold leading-7 text-gray-900 sm:text-xl sm:truncate">
              About Me
            </h2>
            <div className="mt-1 shadow-sm">
              <p className="mt-2 text-gray-600 text-lg">
                I'm a software engineer with over 4 years of experience, currently exploring the intriguing world of generative AI with the Office AI team at Microsoft. I've been contributing to AI-powered productivity tools, with a primary focus on the M365 Copilot project.
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                During my journey at Microsoft, I've had the privilege of working on various projects that have made their way into production, won multiple awards, and filed patents. My contributions have been showcased at notable conferences such as MS Build and GitHub Universe.
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                I'm particularly proud of initiating the GitHub Copilot Voice research project, known as "Hey GitHub/Hello Cody: A Voice Assistant for VS Code". This project was a remarkable part of Microsoft's Global Hackathon and led to patent filings. Our team collaborated with GitHub Next, enhancing GitHub Copilot with voice interactions and pushing the boundaries of AI-assisted coding.
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                Before my current role, I honed my skills as a full-stack software engineer in Microsoft's C+E group, developing enterprise applications for the sales domain using a wide array of web and data technologies. I had the opportunity to contribute to the ideation and development of multiple products that continue to be a critical part of Microsoft's sales workflows.
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                Outside of my main job, I enjoy immersing myself in side projects and hackathons. I've always had a knack for teaching and sharing knowledge, and I've been part of various volunteering initiatives, both within and outside Microsoft, with the aim of spreading the joy of programming. In college, I loved tinkering with Conversational AI and have crafted voice apps (Alexa Skills) both on my own and for clients and startups. Some of these apps have won awards in contests and hackathons hosted by Amazon. You can check out these side projects on my website and view my contributions on GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};