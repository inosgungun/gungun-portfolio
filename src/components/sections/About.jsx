import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "HTML", "CSS", "JavaScript", 
        "React", "TypeScript", "TailwindCSS"
    ];

    const backendSkills = [
        "Next.js", "Node.js", "Python", 
        "AWS", "Express", "MongoDB", "PostgreSQL"
    ];

    const database = [
        "MySQL", "MongoDB", "PostgreSQL"
    ];

    const developerTools = [
        "Git", "Github", "Linux", 
        "Visual Studio", "Docker"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
            <div className="container mx-auto px-4 max-w-6xl">
                <RevealOnScroll>
                    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    {/* 4-in-1 Skills Section */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Frontend Card */}
                            <div className="rounded-xl p-6 bg-gray-800 border border-white/10 hover:border-blue-400/30 transition-all hover:-translate-y-1 hover:shadow-lg group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <h3 className="text-xl font-bold text-white">Frontend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:scale-105 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend Card */}
                            <div className="rounded-xl p-6 bg-gray-800 border border-white/10 hover:border-purple-400/30 transition-all hover:-translate-y-1 hover:shadow-lg group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    <h3 className="text-xl font-bold text-white">Backend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-purple-500/10 text-purple-400 py-1.5 px-4 rounded-full text-sm hover:bg-purple-500/20 hover:scale-105 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Database Card */}
                            <div className="rounded-xl p-6 bg-gray-800 border border-white/10 hover:border-emerald-400/30 transition-all hover:-translate-y-1 hover:shadow-lg group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <h3 className="text-xl font-bold text-white">Database</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {database.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-emerald-500/10 text-emerald-400 py-1.5 px-4 rounded-full text-sm hover:bg-emerald-500/20 hover:scale-105 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Dev Tools Card */}
                            <div className="rounded-xl p-6 bg-gray-800 border border-white/10 hover:border-amber-400/30 transition-all hover:-translate-y-1 hover:shadow-lg group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <h3 className="text-xl font-bold text-white">Dev Tools</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {developerTools.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-amber-500/10 text-amber-400 py-1.5 px-4 rounded-full text-sm hover:bg-amber-500/20 hover:scale-105 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Experience Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Education Card */}
                        <div className="p-8 rounded-xl bg-gray-800 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="bg-blue-500/20 p-2 rounded-lg">🎓</span>
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Education
                                </span>
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 mt-1"></div>
                                        <div className="w-px h-full bg-gray-600"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">B.Tech in Computer Science</h4>
                                        <p className="text-sm text-gray-400">University of Allahabad (2021-2025)</p>
                                        <p className="mt-2 text-sm">
                                            Relevant Coursework: Data Structures & Algorithms, Operating Systems, DBMS
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 mt-1"></div>
                                        <div className="w-px h-full bg-gray-600"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Intermediate (91%) , High School (93.6%)</h4>
                                        <p className="text-sm text-gray-400">Balaji Public School (2020-2021)</p>
                                        <p className="mt-2 text-sm">
                                            Relevant Skills: Leadership, Communication, Team Work
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Experience Card */}
                        <div className="p-8 rounded-xl bg-gray-800 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="bg-purple-500/20 p-2 rounded-lg">💼</span>
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Experience
                                </span>
                            </h3>
                            <div className="space-y-6 text-gray-300">
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full bg-purple-500 mt-1"></div>
                                        <div className="w-px h-full bg-gray-600"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">AI & Cloud Intern</h4>
                                        <p className="text-sm text-gray-400">Edunet Foundation (June 2024 - July 2024)</p>
                                        <ul className="mt-2 space-y-2 text-sm list-disc list-inside">
                                            <li>Built chatbot with IBM Cloud WatsonX Assistant</li>
                                            <li>Conducted EDA on IBM Cloud Platform</li>
                                            <li>Worked with Watson Studio & Machine Learning</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}