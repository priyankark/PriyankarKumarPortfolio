import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import educationData from '../configs/education.json';

export const Education = () => {
    const educationVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    }
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="z-10 shadow-lg flex flex-col p-8 bg-white rounded-lg" ref={ref}>
            <h3 className="font-display font-bold text-2xl text-black mb-4">Education</h3>
            <ul className="space-y-4">
                {educationData.map((education, index) => (
                    <motion.li 
                        key={index} 
                        className="shadow-inner p-4 bg-gray-100 rounded-lg"
                        variants={educationVariants}
                        initial='hidden'
                        animate={controls}
                    >
                        <span className="font-bold font-display text-lg text-black"> {education.schoolName} </span>
                        <p className="text-gray-800">{education.degree}, {education.years}</p>
                        {education.description && <p className="text-gray-800">{education.description}</p>}
                        {education.courses && <div className="flex flex-wrap">{education.courses.map((course, i) => <span key={i} className="text-xs text-white bg-blue-500 rounded-full px-2 py-1 mr-1 mt-1">{course}</span>)}</div>}
                        {education.credentialId && <p className="text-gray-800">Credential ID: {education.credentialId}</p>}
                        {education.link && <a href={education.link} target="_blank" rel="noopener noreferrer">View certificate</a>}
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}
