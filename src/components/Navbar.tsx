'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'GitHub Stats', href: '#stats' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl shadow-cyan-500/10 border-b border-gray-800/50'
                : 'bg-transparent'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Name with enhanced styling */}
                    <div className="flex-shrink-0">
                        <a
                            href="#top"
                            className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text hover:from-cyan-300 hover:via-blue-400 hover:to-purple-400 transition-all duration-300 relative group"
                        >
                            Swayam Kohli
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
                        </a>
                    </div>

                    {/* Desktop Menu with enhanced hover effects */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="relative z-10">{link.name}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                                <div className="absolute inset-0 bg-gray-800/50 transform scale-0 group-hover:scale-100 transition-transform duration-200 rounded-lg"></div>
                            </a>
                        ))}

                        {/* Enhanced Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="ml-4 p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/80 focus:outline-none transition-all duration-300 relative group overflow-hidden"
                            aria-label="Toggle Theme"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                            <div className="relative z-10 transform group-hover:rotate-180 transition-transform duration-500">
                                {theme === 'dark' ? (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Enhanced Mobile Menu */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/80 focus:outline-none transition-all duration-300"
                            aria-label="Toggle Theme"
                        >
                            <div className="transform hover:rotate-180 transition-transform duration-500">
                                {theme === 'dark' ? (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                )}
                            </div>
                        </button>

                        {/* Hamburger Menu with animation */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/80 focus:outline-none transition-all duration-300"
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                                    }`}></span>
                                <span className={`absolute h-0.5 w-6 bg-current top-3 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}></span>
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Enhanced Mobile Menu Dropdown */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50 px-4 py-3 space-y-2">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all duration-300 transform hover:translate-x-2"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}