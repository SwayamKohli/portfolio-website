import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-16 px-6 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text">
                    About Me
                </h2>

                <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    I'm currently in my 3rd year of Information Technology at Amity University, Noida.
                    Passionate about Full Stack Development & solving real-world problems,
                    I lead the Amity Competitive Programming Club and enjoy participating in Hackathons and Coding Competitions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                    <div className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-cyan-400 mb-2">Education</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>• B.Tech IT, Amity University (2023–2027)</li>
                            <li>• Class Representative (2023–Present)</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-cyan-400 mb-2">Leadership</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>• President – Amity Competitive Programming Club</li>
                            <li>• Winner – Code Canvas 3.0</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-cyan-400 mb-2">Tech Interests</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Full Stack Development</li>
                            <li>• Problem Solving & Algorithms</li>
                            <li>• Emerging Tech: AI, IoT, Web3</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-cyan-400 mb-2">Fun Fact</h3>
                        <p className="text-gray-300">
                            I debug with determination and solve problems with persistence!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}