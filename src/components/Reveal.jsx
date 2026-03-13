import React from 'react';
import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, width = "100%", className = "", direction = "up" }) => {
    const getInitialY = () => {
        if (direction === "up") return 75;
        if (direction === "down") return -75;
        return 0;
    };

    const getInitialX = () => {
        if (direction === "left") return 75;
        if (direction === "right") return -75;
        return 0;
    };

    return (
        <div style={{ width }} className={`relative overflow-hidden ${className}`}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: getInitialY(), x: getInitialX() },
                    visible: { opacity: 1, y: 0, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: delay, ease: [0.17, 0.55, 0.55, 1] }} 
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
