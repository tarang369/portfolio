import { motion } from "framer-motion";

import Slider from "./Slider";

const RecentWork = () => {
    return (
        <section
            className="container mx-auto"
            id="recent-work"
        >
            <motion.h2
                className="mt-20 text-center text-4xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Recent Work
            </motion.h2>
            <Slider/>
        </section>
    );
};

export default RecentWork;

