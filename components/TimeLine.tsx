import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StepCard = ({ step }) => (
  <motion.div
    className="flex space-x-4 items-start"
    variants={variants}
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
    <div>
      <div className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-300">
        {step.position}
      </div>
      <div className="text-sm text-gray-500">{step.company}</div>
      <div className="text-xs text-gray-400">{step.dates}</div>
    </div>
  </motion.div>
);

const Timeline = ({ steps }) => {
  return (
    <div className="p-8 space-y-4 shadow-lg bg-white rounded-md">
      <h2 className="text-2xl font-bold text-gray-900">Experience Timeline</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="hover:shadow-lg">
            <StepCard step={step} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
