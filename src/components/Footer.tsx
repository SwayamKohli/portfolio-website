import React from 'react';

export default function Footer() {
    return (
        <footer className="py-10 px-6 bg-gray-900 text-white border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center">

                {/* Typing Animation */}
                <div className="mb-6">
                    <img
                        src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=20&duration=4000&pause=1000&color=00D9FF&center=true&vCenter=true&width=600&lines=Thanks+for+visiting!;Let's+build+something+amazing+together!;Happy+Coding!"
                        alt="Footer Typing Animation"
                        className="mx-auto"
                    />
                </div>

                {/* Quote */}
                <p className="text-gray-400 italic mb-6">
                    &quot;Code is like humor. When you have to explain it, it's bad.&quot; – Cory House
                </p>

                {/* Back to Top */}
                <a
                    href="#top"
                    className="inline-block px-5 py-2 text-sm font-semibold text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                >
                    Back to Top
                </a>

                {/* Copyright */}
                <p className="mt-6 text-sm text-gray-500">
                    © {new Date().getFullYear()} Swayam Kohli. Built using Next.js + Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}