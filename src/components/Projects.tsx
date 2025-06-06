import React from 'react';

export default function Projects() {
    const featuredProjects = [
        {
            title: "Personalized Health Monitoring for Mental Well-being",
            description: "A comprehensive health monitoring system focused on mental wellness with real-time tracking and personalized recommendations.",
            tech: ["React", "Node.js", "MongoDB", "ML"],
            github: "https://github.com/SwayamKohli/Personalized-Health-Monitoring-for-Mental-Well-being",
            highlights: ["Real-time monitoring", "ML-powered insights", "Personalized recommendations"]
        },
        {
            title: "Web Development Projects Collection",
            description: "A curated collection of full-stack web applications showcasing modern development practices and responsive design.",
            tech: ["JavaScript", "CSS", "HTML", "Various Frameworks"],
            github: "https://github.com/SwayamKohli/Web-Development-Projects",
            highlights: ["Responsive design", "Modern practices", "Multiple frameworks"]
        }
    ];

    const otherProjects = [
        {
            title: "Virtual Herbal Garden",
            description: "Winner at Code Canvas 3.0 - An interactive virtual garden application",
            achievement: "🏆 Winner"
        },
        {
            title: "Government Policy Recommendation Engine",
            description: "Backend Developer role in EY Techathon for policy analysis and recommendations",
            achievement: "🏢 EY Techathon"
        },
        {
            title: "Real-Time Traffic Management App",
            description: "Built with Kivy & Python for intelligent traffic flow management",
            achievement: "🚗 Traffic AI"
        },
        {
            title: "Malware Classifier",
            description: "Random Forest implementation achieving 99% accuracy in malware detection",
            achievement: "🛡️ 99% Accuracy"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 inline-block text-transparent bg-clip-text relative">
                        Featured Projects
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Here are some of my favorite projects I have worked on — from full-stack apps to competitive programming solutions.
                        Each project represents a step in my journey of continuous learning and innovation.
                    </p>
                </div>

                {/* Featured Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {featuredProjects.map((project, index) => (
                        <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
                            {/* GitHub Stats Card */}
                            <div className="relative overflow-hidden">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block transform transition-all duration-500 hover:scale-105"
                                >
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api/pin/?username=SwayamKohli&repo=${project.github.split('/').pop()}&theme=tokyonight&hide_border=true`}
                                        alt={project.title}
                                        className="w-full h-auto"
                                    />
                                </a>
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.highlights.map((highlight, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-gray-800/80 text-gray-300 rounded-full border border-gray-700/50">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="text-sm px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                    View Code
                                </a>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                        </div>
                    ))}
                </div>

                {/* Other Projects */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4 text-gray-300">More Projects & Achievements</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Additional projects and achievements that showcase my diverse skill set and passion for problem-solving.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <span className="text-2xl ml-2 transform group-hover:scale-110 transition-transform duration-300">
                                        {project.achievement.split(' ')[0]}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                    {project.description}
                                </p>
                                <div className="flex items-center text-xs text-cyan-400 font-medium">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                                    {project.achievement.split(' ').slice(1).join(' ')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold mb-4 text-white">Interested in collaborating?</h3>
                        <p className="text-gray-300 mb-6">
                            I'm always open to working on exciting projects and contributing to open-source initiatives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/SwayamKohli"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                View All Projects
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                            >
                                Let's Collaborate
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}