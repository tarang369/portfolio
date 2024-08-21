import { motion } from "framer-motion";

import profilePic from "../assets/test.jpg";
import { PROFILE } from "../constants";

const HeroSection = () => {
    return (
        <>
            <div
                className="relative flex min-h-screen items-end justify-center"
                id="hero"
            >
                <motion.img
                    src={profilePic}
                    alt={PROFILE.name}
                    className="absolute inset-0 z-10 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                ></motion.div>
                <div className="z-20 mx-4 max-w-3xl pb-20">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-5xl font-semibold uppercase tracking-wide md:text-7xl"
                    >
                        {PROFILE.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="pt-2 font-semibold"
                    >
                        {PROFILE.info}
                    </motion.p>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
