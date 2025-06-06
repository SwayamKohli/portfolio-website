import React from 'react';

export default function About() {
    const aboutCards = [
        {
            title: "Education",
            items: [
                "B.Tech IT, Amity University (2023–2027)",
                "Class Representative (2023–Present)"
            ],
            gradient: "from-cyan-500/20 to-blue-500/20"
        },
        {
            title: "Leadership",
            items: [
                "President – Amity Competitive Programming Club",
                "Winner – Code Canvas 3.0"
            ],
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Tech Interests",
            items: [
                "Full Stack Development",
                "Problem Solving & Algorithms",
                "Emerging Tech: AI, IoT, Web3"
            ],
            gradient: "from-green-500/20 to-cyan-500/20"
        },
        {
            title: "Fun Fact",
            content: "I debug with determination and solve problems with persistence! Coffee is my debugging companion ☕",
            gradient: "from-orange-500/20 to-red-500/20"
        }
    ];

    return (
        <section id="about" className="py-20 px-6 bg-gray-900 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 inline-block text-transparent bg-clip-text relative">
                        About Me
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                            I&apos;m currently in my 3rd year of Information Technology at Amity University, Noida.
                            Passionate about Full Stack Development & solving real-world problems,
                            I lead the Amity Competitive Programming Club and enjoy participating in Hackathons and Coding Competitions.
                        </p>
                        <div className="flex justify-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                Available for opportunities
                            </span>
                            <span className="flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                                Based in Delhi, India
                            </span>
                        </div>
                    </div>
                </div>

                {/* Enhanced Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {aboutCards.map((card, index) => (
                        <div
                            key={card.title}
                            className={`group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                            {/* Card content */}
                            <div className="relative z-10">
                                {/* Header with icon */}
                                <div className="flex items-center mb-6">
                                    <h3 className="font-bold text-xl text-cyan-400 group-hover:text-white transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                {card.items ? (
                                    <ul className="space-y-3">
                                        {card.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                                            >
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white transition-colors duration-300"></div>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                                        {card.content}
                                    </p>
                                )}
                            </div>

                            {/* Hover effect border */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                        </div>
                    ))}
                </div>

                {/* Skills badges */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-8 text-gray-300">Technologies I Work With</h3>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {[
                            'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
                            'Python', 'Java', 'C++', 'MongoDB', 'PostgreSQL',
                            'AWS', 'Docker', 'Git', 'Tailwind CSS'
                        ].map((tech, index) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-full text-sm font-medium border border-gray-700/50 hover:border-cyan-500/50 hover:text-white hover:bg-gray-700/80 transition-all duration-300 cursor-default"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold mb-4 text-white">Want to collaborate?</h3>
                        <p className="text-gray-300 mb-6">
                            I&apos;m always excited to work on innovative projects and connect with fellow developers.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                        >
                            Get In Touch
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}