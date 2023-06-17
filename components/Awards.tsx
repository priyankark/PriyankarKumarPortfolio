import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AwardsData from '../configs/awards.json';

export const Awards = () => {
    const awardsVariants = {
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
            <h3 className="font-display font-bold text-2xl text-black mb-4">Awards and Recognition</h3>
            <ul className="space-y-4">
                {AwardsData.map((ele, index) => (
                    <motion.li 
                        key={index} 
                        className="shadow-inner p-4 bg-gray-100 rounded-lg"
                        variants={awardsVariants}
                        initial='hidden'
                        animate={controls}
                    >
                        <span className="font-bold font-display text-lg text-black"> {ele.name} </span> 
                        <p className="text-gray-800">{ele.description}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}
