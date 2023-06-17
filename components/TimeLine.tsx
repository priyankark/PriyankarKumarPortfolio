import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  position: string;
  company: string;
  dates: string;
  description: string[];
  skills: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const StepCard: React.FC<{ step: Step }> = ({ step }) => (
  <motion.div
    className="flex space-x-4 items-start bg-white p-4 rounded-md shadow-lg"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="flex-shrink-0">
      <div className="relative h-8 w-8">
        <div className="absolute h-2 w-2 rounded-full bg-blue-500 top-3 left-3"></div>
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white font-semibold">•</span>
        </div>
      </div>
    </div>
    <motion.div
      className="flex flex-1 flex-col"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-300">
        {step.position}
      </div>
      <div className="text-sm text-gray-500">{step.company}</div>
      <div className="text-xs text-gray-400">{step.dates}</div>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {step?.description?.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <hr className="my-2" /> {/* Add this for a divider */}
      <div className="flex flex-wrap gap-2">
        {step?.skills?.map((skill, idx) => (
          <div
            key={idx}
            className="px-2 py-1 bg-gray-100 text-sm rounded-full shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);


const Timeline: React.FC<{ steps: Step[] }> = ({ steps }) => (
  <div className="p-8 space-y-4 shadow-lg bg-white rounded-md">
    <h2 className="text-2xl font-bold text-gray-900">Experience Timeline</h2>
    <div className="space-y-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="hover:shadow-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: index * 0.1,
              },
            },
          }}
        >
          <StepCard step={step} />
        </motion.div>
      ))}
    </div>
  </div>
);

export default Timeline;
