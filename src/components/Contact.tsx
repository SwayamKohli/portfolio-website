import React from 'react';

export default function Contact() {
    const contactMethods = [
        {
            name: "Email",
            href: "mailto:swayam11489@gmail.com",
            icon: "📧",
            label: "swayam11489@gmail.com",
            description: "Drop me a line for collaboration opportunities",
            color: "from-red-500 to-orange-500",
            badge: "https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/swayam-kohli-939801292/",
            icon: "💼",
            label: "Connect on LinkedIn",
            description: "Let's connect and grow our professional network",
            color: "from-blue-600 to-blue-800",
            badge: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
        },
        {
            name: "GitHub",
            href: "https://github.com/SwayamKohli",
            icon: "👨‍💻",
            label: "Follow on GitHub",
            description: "Check out my code and contribute to projects",
            color: "from-gray-700 to-gray-900",
            badge: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
        }
    ];

    const quickFacts = [
        { label: "Response Time", value: "< 24 hours", icon: "⚡" },
        { label: "Availability", value: "Open to opportunities", icon: "🟢" },
        { label: "Location", value: "Delhi, India", icon: "📍" },
        { label: "Languages", value: "English, Hindi, German", icon: "🗣️" }
    ];

    return (
        <section id="contact" className="py-20 px-6 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 inline-block text-transparent bg-clip-text relative">
                        Let&apos;s Connect!
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            I&apos;m always open to collaborating on exciting projects, discussing tech innovations,
                            or helping others grow in their development journey. Let&apos;s create something amazing together!
                        </p>
                        <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                Currently available
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                                Quick responder
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {contactMethods.map((method, index) => (
                        <div
                            key={method.name}
                            className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-[1.02] text-center"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {method.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {method.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {method.description}
                                </p>

                                {/* Contact Button */}
                                <a
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mb-4 transform transition-all duration-300 hover:scale-105"
                                >
                                    <img
                                        src={method.badge}
                                        alt={method.name}
                                        className="mx-auto"
                                    />
                                </a>

                                {/* Additional info */}
                                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                                    {method.label}
                                </p>
                            </div>

                            {/* Hover glow effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
                        </div>
                    ))}
                </div>

                {/* Quick Facts */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">Quick Facts</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {quickFacts.map((fact, index) => (
                            <div
                                key={fact.label}
                                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 text-center hover:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-105"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-2xl mb-3">{fact.icon}</div>
                                <div className="text-sm text-gray-400 mb-1">{fact.label}</div>
                                <div className="text-white font-semibold text-sm">{fact.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Collaboration CTA */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to start a conversation?
                            </h3>
                            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                                Whether you have a project in mind, want to discuss opportunities, or just want to say hi,
                                I&apos;d love to hear from you. Let&apos;s turn ideas into reality!
                            </p>
                        </div>

                        {/* Primary CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="mailto:swayam11489@gmail.com"
                                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105"
                            >
                                <span className="mr-3 text-xl">📧</span>
                                Send me an email
                                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            <span className="text-gray-400">or</span>

                            <a
                                href="https://www.linkedin.com/in/swayam-kohli-939801292/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:text-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                            >
                                <span className="mr-3 text-xl">💼</span>
                                Connect on LinkedIn
                                <svg className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Social proof */}
                        <div className="mt-8 pt-6 border-t border-gray-800/50">
                            <p className="text-gray-400 text-sm">
                                ✨ Join the conversation with fellow developers and innovators
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}