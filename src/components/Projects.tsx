import React from 'react';

export default function Projects() {
    return (
        <section id="projects" className="py-16 px-6 bg-black text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text">
                    Featured Projects
                </h2>

                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Here are some of my favorite projects I've worked on — from full-stack apps to competitive programming solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <a
                        href="https://github.com/SwayamKohli/Personalized-Health-Monitoring-for-Mental-Well-being"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20"
                    >
                        <img
                            src="https://github-readme-stats.vercel.app/api/pin/?username=SwayamKohli&repo=Personalized-Health-Monitoring-for-Mental-Well-being&theme=tokyonight&hide_border=true"
                            alt="Personalized Mental Well-being System"
                            className="w-full h-auto rounded-lg border border-gray-800 shadow-lg"
                        />
                    </a>

                    {/* Project 2 */}
                    <a
                        href="https://github.com/SwayamKohli/Web-Development-Projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20"
                    >
                        <img
                            src="https://github-readme-stats.vercel.app/api/pin/?username=SwayamKohli&repo=Web-Development-Projects&theme=tokyonight&hide_border=true"
                            alt="Web Development Projects"
                            className="w-full h-auto rounded-lg border border-gray-800 shadow-lg"
                        />
                    </a>
                </div>

                {/* More Projects */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-300">More Projects</h3>
                    <ul className="space-y-4 text-gray-400 text-left max-w-2xl mx-auto">
                        <li>• Virtual Herbal Garden – Winner at Code Canvas 3.0</li>
                        <li>• Government Policy Recommendation Engine – Backend Developer (EY Techathon)</li>
                        <li>• Real-Time Traffic Management App using Kivy & Python</li>
                        <li>• Malware Classifier with Random Forest (99% accuracy)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
} 
