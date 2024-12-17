import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useCursorPosition from '../hooks/useCursorPosition';
import CursorEffects from './CursorEffects';

export default function HeroSection() {
    const { x, y } = useCursorPosition();

    return (
        <section className="w-full h-screen flex flex-col justify-center items-center relative">
            <CursorEffects x={x} y={y} />
            <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Welcome to My Portfolio
            </motion.h1>
            <p className="text-xl mt-4">
                Scroll down to explore my world of development, design, and creativity.
            </p>
        </section>
    );
}
