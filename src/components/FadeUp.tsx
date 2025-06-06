'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
}

export default function FadeUp({ children, delay = 0 }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}