import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="py-16 px-6 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text">
                    Let's Connect!
                </h2>

                <p className="text-gray-300 mb-10 max-w-xl mx-auto">
                    I'm always open to collaborating on exciting projects, discussing tech, or helping others grow.
                    Feel free to reach out!
                </p>

                {/* Contact Badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <a
                        href="mailto:swayam11489@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition hover:scale-105"
                    >
                        <img
                            src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                            alt="Email"
                        />
                    </a>
                    <a
                        href="https://linkedin.com/in/swayamkohli-939801292"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition hover:scale-105"
                    >
                        <img
                            src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                            alt="LinkedIn"
                        />
                    </a>
                    <a
                        href="https://github.com/SwayamKohli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition hover:scale-105"
                    >
                        <img
                            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                            alt="GitHub"
                        />
                    </a>
                </div>

                {/* Quote */}
                <div className="mt-12 text-center">
                    <blockquote className="text-gray-400 italic border-l-4 border-cyan-500 pl-4">
                        "Code is like humor. When you have to explain it, it's bad." – Cory House
                    </blockquote>
                </div>

                {/* Back to Top */}
                <div className="mt-12">
                    <a
                        href="#top"
                        className="inline-block px-5 py-2 text-sm font-semibold text-gray-400 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
                    >
                        Back to Top
                    </a>
                </div>
            </div>
        </section>
    );
}