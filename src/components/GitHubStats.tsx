import React from 'react';

export default function GitHubStats() {
    return (
        <section id="stats" className="py-16 px-6 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text">
                    GitHub Analytics
                </h2>

                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Here’s a snapshot of my GitHub activity and coding journey so far.
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=SwayamKohli&show_icons=true&theme=tokyonight&hide_border=true&count_private=true"
                        alt="GitHub Stats"
                        className="mx-auto rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                    />
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=SwayamKohli&layout=compact&theme=tokyonight&hide_border=true"
                        alt="Top Languages"
                        className="mx-auto rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                    />
                </div>

                {/* Streak + Activity Graph */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=SwayamKohli&theme=tokyonight"
                        alt="GitHub Streak"
                        className="mx-auto rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                    />
                    <img
                        src="https://github-readme-activity-graph.vercel.app/graph?username=SwayamKohli&theme=tokyo-night&hide_border=true"
                        alt="Activity Graph"
                        className="mx-auto rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                    />
                </div>

                {/* GitHub Trophies */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-300">GitHub Trophies</h3>
                    <img
                        src="https://github-profile-trophy.vercel.app/?username=SwayamKohli&theme=tokyonight&no-frame=true&margin-w=4&row=2"
                        alt="GitHub Trophies"
                        className="mx-auto rounded-lg border border-gray-700 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
} 