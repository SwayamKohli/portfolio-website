import React from 'react';

export default function Hero() {
    return (
        <section className="text-center py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                Swayam Kohli
            </h1>

            <div className="max-w-3xl mx-auto mb-8">
                <img
                    src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=28&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=600&height=60&lines=Full+Stack+Developer;IT+Student+%40+Amity+University;Problem+Solver+%26+Innovator;Always+Learning+Something+New!"
                    alt="Typing Animation"
                    className="w-full max-w-xl mx-auto"
                />
            </div>

            <div className="mt-10">
                <a
                    href="#about"
                    className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-transform transform hover:scale-105"
                >
                    View My Work
                </a>
            </div>
        </section>
    );
}