'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
}

export default function FadeUp({
    children,
    delay = 0,
    duration = 0.8,
    distance = 60,
    className = ""
}: FadeUpProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-50px 0px -50px 0px"
    });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: {
            opacity: 0,
            y: distance,
            scale: 0.95,
            filter: "blur(4px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`w-full ${className}`}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.08,
                            delayChildren: delay + 0.2
                        }
                    }
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

// Export additional animation components for specific use cases
export function SlideInLeft({ children, delay = 0, className = "" }: FadeUpProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function SlideInRight({ children, delay = 0, className = "" }: FadeUpProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({ children, delay = 0, className = "" }: FadeUpProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
                duration: 0.6,
                delay,
                ease: "backOut"
            }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
}

export function RotateIn({ children, delay = 0, className = "" }: FadeUpProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -10, scale: 0.9 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
}