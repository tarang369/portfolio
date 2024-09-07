import { motion } from "framer-motion";

import { ABOUT } from "../constants";

const About = () => {
    return (
        <section
            className="container mx-auto"
            id="about"
        >
            <motion.h2
                className="mt-16 text-center text-4xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                About
            </motion.h2>
            <motion.h3
                className="p4 my-8 text-center text-4xl uppercase leading-none lg:text-[4rem] text-zinc-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {ABOUT.text1.part1}
                <span className="text-yellow-400">
                    {ABOUT.text1.part2}
                </span>
                <br />
                {ABOUT.text1.part3}
                <span className="text-white">
                    {ABOUT.text1.part4}
                </span>
            </motion.h3>
            <motion.p
                className="px-4 text-center text-lg leading-loose"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {ABOUT.text2}
            </motion.p>
        </section>
    );
};

export default About;
