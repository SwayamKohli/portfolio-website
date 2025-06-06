'use client';

import React, { useEffect, useState } from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (event: MouseEvent) => {
            const rect = document.getElementById('hero-section')?.getBoundingClientRect();
            if (rect) {
                setMousePosition({
                    x: ((event.clientX - rect.left) / rect.width) * 100,
                    y: ((event.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        const heroSection = document.getElementById('hero-section');
        heroSection?.addEventListener('mousemove', handleMouseMove);

        return () => {
            heroSection?.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            id="hero-section"
            className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

                {/* Interactive gradient that follows mouse */}
                <div
                    className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
                    style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                ></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Name with enhanced animation */}
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6 relative">
                        Swayam Kohli
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-2xl opacity-30 -z-10">
                            Swayam Kohli
                        </div>
                    </h1>
                </div>

                {/* Typing animation container */}
                <div className={`max-w-3xl mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50">
                        <img
                            src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=28&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=600&height=60&lines=Full+Stack+Developer;IT+Student+%40+Amity+University;Problem+Solver+%26+Innovator;Always+Learning+Something+New!"
                            alt="Typing Animation"
                            className="w-full max-w-xl mx-auto"
                        />
                    </div>
                </div>

                {/* Enhanced subtitle */}
                <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Passionate about creating innovative solutions and turning ideas into reality through code.
                        Currently leading the competitive programming community and exploring the frontiers of technology.
                    </p>
                </div>

                {/* Enhanced CTA buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <a
                        href="#about"
                        className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center">
                            View My Work
                            <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>

                    <a
                        href="#contact"
                        className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-300 border-2 border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:text-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                        <span className="relative z-10 flex items-center">
                            Let&apos;s Connect
                            <svg className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className={`mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex flex-col items-center text-gray-400 animate-bounce">
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
}