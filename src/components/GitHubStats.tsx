import React from 'react';

export default function GitHubStats() {
    return (
        <section id="stats" className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
                            GitHub Analytics
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Dive into my coding journey through comprehensive GitHub statistics and contributions.
                        <span className="block text-cyan-400 font-semibold mt-2">Every commit tells a story 📈</span>
                    </p>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* GitHub Stats Card */}
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-cyan-400">📊 Overall Stats</h3>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=SwayamKohli&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&bg_color=0d1117&title_color=58a6ff&icon_color=1f6feb&text_color=c9d1d9"
                                alt="GitHub Stats"
                                className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Top Languages Card */}
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-purple-400">🔥 Top Languages</h3>
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            </div>
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=SwayamKohli&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=bf91f3&text_color=c9d1d9"
                                alt="Top Languages"
                                className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Streak and Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* GitHub Streak */}
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-orange-400">🔥 Coding Streak</h3>
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            </div>
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=SwayamKohli&theme=tokyonight&hide_border=true&background=0d1117&stroke=58a6ff&ring=bf91f3&fire=ff6b35&currStreakLabel=58a6ff"
                                alt="GitHub Streak"
                                className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Activity Graph */}
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-green-400">📈 Activity Graph</h3>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <img
                                src="https://github-readme-activity-graph.vercel.app/graph?username=SwayamKohli&theme=tokyo-night&hide_border=true&bg_color=0d1117&color=58a6ff&line=bf91f3&point=ff6b35"
                                alt="Activity Graph"
                                className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* GitHub Trophies Section */}
                <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative text-center">
                        <div className="flex items-center justify-center space-x-3 mb-8">
                            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <h3 className="text-3xl font-bold text-yellow-400">GitHub Trophies</h3>
                            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <p className="text-gray-400 mb-8 text-lg">
                            Achievements unlocked through consistent coding and contributions 🏆
                        </p>
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src="https://github-profile-trophy.vercel.app/?username=SwayamKohli&theme=tokyonight&no-frame=true&margin-w=4&row=2&column=4&no-bg=true"
                                alt="GitHub Trophies"
                                className="w-full transition-transform duration-500 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Fun Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                        <div className="text-gray-400">Commits This Year</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                        <div className="text-gray-400">Languages Mastered</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                        <div className="text-gray-400">Major Projects</div>
                    </div>
                </div>
            </div>
        </section>
    );
}