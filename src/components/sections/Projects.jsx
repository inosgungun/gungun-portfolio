import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "AceInterview – AI Mock Interview Platform",
            description: "An AI-driven platform for mock interviews, offering personalized feedback and performance analysis. Built with Next.js, Tailwind CSS, and Vapi SDK, integrated with Firebase for storage and authentication.",
            tags: ["Next.js", "Tailwind CSS", "Vapi SDK", "Firebase(Storage and Authentication)"],
            link: "https://ace-interview-one.vercel.app/sign-in"
        },
        {
            title: "DocPoint",
            description: "A MERN stack-based doctor appointment platform, enabling seamless scheduling for patients and profile management for healthcare providers.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://docpoint-frontend.onrender.com/"
        },
        {
            title: "Chat with PDF using Hugging Face (LLM)",
            description: "A Streamlit-based chatbot enabling users to query uploaded documents using Hugging Face Transformers. Implemented FAISS for semantic search and LangChain for text processing.",
            tags: ["Streamlit", "Hugging Face", "FAISS", "PyPDF2", "LangChain"],
            link: "https://github.com/inosgungun/Chat_with_PDF"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
            <div className="container mx-auto px-4 max-w-6xl">
                <RevealOnScroll>
                    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                className="rounded-xl p-6 bg-gray-800 border border-white/10 hover:border-blue-400/30 transition-all hover:-translate-y-2 hover:shadow-lg group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-3 h-3 rounded-full ${
                                        index === 0 ? 'bg-blue-500' : 
                                        index === 1 ? 'bg-purple-500' : 'bg-emerald-500'
                                    }`}></div>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                                
                                <p className="text-gray-400 mb-6">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tech, key) => (
                                        <span
                                            key={key}
                                            className={`py-1.5 px-4 rounded-full text-sm font-medium ${
                                                index === 0 ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' :
                                                index === 1 ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20' :
                                                'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
                                            } transition-all cursor-default`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <a 
                                    href={project.link} 
                                    className={`inline-flex items-center font-medium ${
                                        index === 0 ? 'text-blue-400 hover:text-blue-300' :
                                        index === 1 ? 'text-purple-400 hover:text-purple-300' :
                                        'text-emerald-400 hover:text-emerald-300'
                                    } transition-colors group-hover:translate-x-1`}
                                >
                                    View Project
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}