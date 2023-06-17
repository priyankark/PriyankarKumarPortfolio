import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import SkillsData from '../configs/skills.json';

const Pill = (props: { color: string, text: string }) => {
    const { color, text } = props;
    const controls = useAnimation();
    const ref = useRef();

    const variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                controls.start("visible");
            } else {
                controls.start("hidden");
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    // Define a class map to map colors to Tailwind CSS classes
    const classMap = {
        green: 'border-green-400',
        amber: 'border-amber-400',
        red: 'border-red-400'
    };

    // Use classMap to generate className
    const className = `ml-2 mt-2 p-1 rounded-lg text-semibold font-display border-solid border-2 ${classMap[color]}`;

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            initial='hidden'
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            {text}
        </motion.div>
    );
};

export const SkillsMap = () => {
    return (
        <div className="flex flex-col w-full justify-evenly rounded-lg shadow-lg border p-2">
            <h4 className="font-display font-bold mr-4">Skills</h4>
            <hr className="mt-2" />
            <div className="flex mt-4">
                <p><span className="inline-block w-4 h-4 mr-2 bg-green-400"></span>Most experienced in</p>
                <p><span className="inline-block w-4 h-4 mr-2 ml-2 bg-amber-400"></span>Medium level of experience</p>
                <p><span className="inline-block w-4 h-4 mr-2 ml-2 bg-red-400"></span>Also experienced in</p>
            </div>
            <div className="flex flex-row flex-wrap p-2">
                {SkillsData.map((skill, index) =>
                    <Pill key={index} color={skill.color} text={skill.text} />
                )}
            </div>
        </div>
    );
};
