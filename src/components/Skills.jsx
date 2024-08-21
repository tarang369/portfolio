import { motion } from "framer-motion";

import video from "../assets/video.mp4";
import { SKILLS } from "../constants";

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
            staggerChildren: 0.5,
        },
    },
};

const containerVariants2 = {
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

const Skills = () => {
    return (
        <div
            className="container mx-auto"
            id="skills"
        >
            <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants2}
                viewport={{ once: true }}
                className="mx-auto mb-8 flex max-w-6xl flex-wrap"
            >
                <motion.div
                    variants={itemVariants}
                    className="w-full p-2"
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
                {/* <motion.div
                    variants={itemVariants}
                    className="p4 w-full text-center sm:w-1/2"
                >
                    <h2 className="mb-4 text-3xl">{ACHIEVEMENT.title}</h2>
                    <span className="mt4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400">
                        {ACHIEVEMENT.award}
                    </span>
                    <p className="p2 m-4 italic">{ACHIEVEMENT.description}</p>
                </motion.div> */}
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
            >
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="mb-8 flex items-center justify-between"
                    >
                        <div className="flex items-center">
                            {skill.icon}
                            <h3 className="px-6 text-xl lg:text-3xl">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
                            <span>{skill.experience}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
