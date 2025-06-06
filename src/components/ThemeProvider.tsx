'use client';
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Handle hydration
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (!prefersDark) {
            setTheme('light');
        }
    }, []);

    // Apply theme changes
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        const body = document.body;

        // Start transition
        setIsTransitioning(true);

        // Add transition classes
        root.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

        // Apply theme
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
            body.className = body.className.replace(/bg-white|text-black/g, '');
            body.classList.add('bg-black', 'text-white');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
            body.className = body.className.replace(/bg-black|text-white/g, '');
            body.classList.add('bg-white', 'text-black');
        }

        // Save to localStorage
        localStorage.setItem('theme', theme);

        // End transition after animation completes
        const timeout = setTimeout(() => {
            setIsTransitioning(false);
            root.style.transition = '';
            body.style.transition = '';
        }, 500);

        return () => clearTimeout(timeout);
    }, [theme, mounted]);

    const toggleTheme = () => {
        if (isTransitioning) return; // Prevent rapid toggling

        // Create ripple effect
        createThemeRipple();

        // Toggle theme with slight delay for visual effect
        setTimeout(() => {
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
        }, 150);
    };

    const createThemeRipple = () => {
        const ripple = document.createElement('div');
        ripple.className = 'theme-ripple';
        ripple.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: ${theme === 'dark' ? 'white' : 'black'};
            opacity: 0.1;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        `;

        document.body.appendChild(ripple);

        // Trigger animation
        requestAnimationFrame(() => {
            ripple.style.width = '200vmax';
            ripple.style.height = '200vmax';
        });

        // Cleanup
        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 800);
    };

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            </div>
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
            {/* Theme transition overlay */}
            {isTransitioning && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 animate-pulse"></div>
                </div>
            )}

            {children}

            {/* Add global theme styles */}
            <style jsx global>{`
                :root {
                    --theme-transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .dark {
                    --bg-primary: #000000;
                    --bg-secondary: #111111;
                    --bg-tertiary: #1a1a1a;
                    --text-primary: #ffffff;
                    --text-secondary: #a1a1aa;
                    --border-primary: #27272a;
                    --accent-primary: #06b6d4;
                    --accent-secondary: #3b82f6;
                }
                
                .light {
                    --bg-primary: #ffffff;
                    --bg-secondary: #f8fafc;
                    --bg-tertiary: #f1f5f9;
                    --text-primary: #0f172a;
                    --text-secondary: #64748b;
                    --border-primary: #e2e8f0;
                    --accent-primary: #0891b2;
                    --accent-secondary: #2563eb;
                }
                
                * {
                    transition: var(--theme-transition);
                }
                
                /* Smooth transitions for all elements */
                body, section, div, h1, h2, h3, h4, h5, h6, p, span, a, button, input, textarea {
                    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
                }
                
                /* Custom scrollbar for theme */
                ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                
                ::-webkit-scrollbar-track {
                    background: var(--bg-secondary);
                }
                
                ::-webkit-scrollbar-thumb {
                    background: var(--accent-primary);
                    border-radius: 4px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: var(--accent-secondary);
                }
                
                /* Selection colors */
                ::selection {
                    background: var(--accent-primary);
                    color: var(--bg-primary);
                }
                
                ::-moz-selection {
                    background: var(--accent-primary);
                    color: var(--bg-primary);
                }
            `}</style>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

// Custom hook for theme-aware animations
export function useThemeAnimation() {
    const { theme, isTransitioning } = useTheme();

    return {
        theme,
        isTransitioning,
        getThemeClasses: (darkClasses: string, lightClasses: string) =>
            theme === 'dark' ? darkClasses : lightClasses,
        getThemeValue: <T>(darkValue: T, lightValue: T): T =>
            theme === 'dark' ? darkValue : lightValue,
    };
}