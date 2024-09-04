import { motion } from "framer-motion";
import { useState } from "react";

import profilePic from "../assets/test.jpg";
import { PROFILE } from "../constants";

const HeroSection = () => {
    // State to track if the image has loaded
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Handler for when the image loads
    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-end justify-center"
        >
            {/* Background Image */}
            <motion.img
                src={profilePic}
                alt={PROFILE.name}
                fetchpriority="high"
                loading="eager"
                onLoad={handleImageLoad}
                initial={{ opacity: 0 }}
                animate={{ opacity: isImageLoaded ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-10 h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            {isImageLoaded && (
                <motion.div
                    className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            )}

            {/* Content */}
            {isImageLoaded && (
                <div className="relative z-30 mx-4 max-w-3xl pb-20 text-center">
                    <motion.h1
                        className="text-6xl font-semibold uppercase tracking-wide text-white md:text-8xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {PROFILE.name}
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg font-medium text-white md:text-2xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        {PROFILE.info}
                    </motion.p>
                </div>
            )}

            {/* Optional Loader */}
            {!isImageLoaded && (
                <div className="flex min-h-screen items-center justify-center">
                    <div className="loader"></div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
