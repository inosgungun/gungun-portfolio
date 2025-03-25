import { RevealOnScroll } from "../RevealOnScroll";
import gunImage from "../../assets/gun_greenTop.jpg";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 py-12">
                <RevealOnScroll>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
                        {/* Text Content - Tightened spacing */}
                        <div className="w-full lg:w-[55%] lg:pl-[7.5rem] lg:pr-8">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                                Hi, I'm Gungun Soni
                            </h1>
                            
                            <div className="mb-6">
                                <p className="text-xl text-gray-300 italic mb-2">
                                    "Passionate about coding, driven by problem-solving."
                                </p>
                                <p className="text-lg text-gray-300">
                                    As a full-stack developer, I specialize in building scalable, user-friendly applications using modern technologies like React.js and Node.js. With a strong passion for coding and problem-solving, I actively practice Data Structures and Algorithms (DSA) to enhance my skills and write efficient solutions.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3 mb-8">
                                <a 
                                    href="#projects" 
                                    className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex-1 text-center"
                                >
                                    View Projects
                                </a>
                                <a 
                                    href="#contact" 
                                    className="border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 py-2.5 px-5 rounded-lg font-medium transition-all duration-300 flex-1 text-center"
                                >
                                    Contact Me
                                </a>
                            </div>
                            
                        </div>
                        
                        {/* Image Section with Social Icons */}
                        <div className="w-full lg:w-[40%] flex flex-col items-center mt-6 lg:mt-0">
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 rounded-xl -rotate-3"></div>
                                <img 
                                    src={gunImage} 
                                    alt="Gungun Soni" 
                                    className="relative w-full h-full object-cover rounded-xl border-4 border-gray-800 z-10 hover:border-blue-400 transition-all duration-300"
                                />
                            </div>
                            
                            {/* Social Links */}
                            <div className="flex gap-4">
                                <a 
                                    href="https://github.com/inosgungun" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                                <a 
                                    href="https://linkedin.com/in/gungun-soni" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                                <a 
                                    href="https://leetcode.com/u/inos_gungun" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl"
                                    aria-label="LeetCode"
                                >
                                    <FaCode />
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}