import { motion } from "framer-motion";

import video from "../assets/video.mp4";
import { ACHIEVEMENT } from "../constants";

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.8,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const Achievements = () => {
    return (
        <div id="award">
            <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
                Achievements
            </h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="mx-auto flex max-w-6xl flex-wrap"
            >
                <motion.div
                    variants={itemVariants}
                    className="w-full p-2 sm:w-1/2"
                >
                    <video
                        className="w-full rounded-lg"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="p4 w-full text-center sm:w-1/2"
                >
                    <h2 className="mb-4 text-3xl">{ACHIEVEMENT.title}</h2>
                    <span className="mt4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400">
                        {ACHIEVEMENT.award}
                    </span>
                    <p className="p2 m-4 italic">{ACHIEVEMENT.description}</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Achievements;
