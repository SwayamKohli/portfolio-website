import React from 'react';

export default function Footer() {
    return (
        <footer className="relative py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white border-t border-gray-700 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Main Content */}
                <div className="text-center mb-12">
                    {/* Enhanced Typing Animation with Glow Effect */}
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl rounded-lg"></div>
                        <img
                            src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=24&duration=4000&pause=1000&color=00D9FF&center=true&vCenter=true&width=700&lines=Thanks+for+visiting!;Let's+build+something+amazing+together!;Happy+Coding!;Keep+Learning%2C+Keep+Growing!"
                            alt="Footer Typing Animation"
                            className="relative mx-auto rounded-lg"
                        />
                    </div>

                    {/* Inspirational Quote with Better Styling */}
                    <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 mb-10 max-w-2xl mx-auto">
                        <div className="absolute top-4 left-6 text-4xl text-cyan-400/30">"</div>
                        <p className="text-gray-300 italic text-lg leading-relaxed pt-4">
                            Code is like humor. When you have to explain it, it is bad.
                        </p>
                        <p className="text-cyan-400 font-semibold mt-3 text-sm">— Cory House</p>
                        <div className="absolute bottom-4 right-6 text-4xl text-cyan-400/30 rotate-180">"</div>
                    </div>

                    {/* Enhanced Social Links */}
                    <div className="flex justify-center space-x-8 mb-12">
                        <a
                            href="mailto:swayam11489@gmail.com"
                            className="group relative p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                        >
                            <svg className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </a>

                        <a
                            href="https://linkedin.com/in/swayamkohli-939801292"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                            </svg>
                        </a>

                        <a
                            href="https://github.com/SwayamKohli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-3 bg-gradient-to-br from-gray-600/20 to-gray-700/20 border border-gray-500/30 rounded-xl hover:from-gray-600/30 hover:to-gray-700/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                        >
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>

                    {/* Enhanced Back to Top Button */}
                    <a
                        href="#top"
                        className="group inline-flex items-center space-x-2 px-8 py-4 text-sm font-semibold bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                        <span className="text-cyan-400 group-hover:text-cyan-300">Back to Top</span>
                        <svg className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-700/50">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Swayam Kohli</span>.
                            Built with ❤️ using <span className="text-white">Next.js</span> + <span className="text-blue-400">Tailwind CSS</span>
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex space-x-2">
                            <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-600">Next.js</span>
                            <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">Tailwind</span>
                            <span className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">Vercel</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}