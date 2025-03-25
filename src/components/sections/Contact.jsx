import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        })
        .catch(() => {
            alert("Oops! Something went wrong. Please try again.");
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
            <div className="container mx-auto px-4 max-w-4xl">
                <RevealOnScroll>
                    <div className="rounded-2xl bg-gray-800/50 border border-white/10 p-8 md:p-12 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                            Get In Touch
                        </h2>
                        
                        <p className="text-gray-400 text-center mb-8 max-w-lg mx-auto">
                            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you soon!
                        </p>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={formData.name}
                                    className="w-full bg-gray-700/50 border border-white/10 rounded-xl px-5 py-4 text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 group-hover:border-blue-400/30"
                                    placeholder="Your Name"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div className="relative group">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    className="w-full bg-gray-700/50 border border-white/10 rounded-xl px-5 py-4 text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 group-hover:border-blue-400/30"
                                    placeholder="your.email@example.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div className="relative group">
                                <textarea
                                    id="message" 
                                    name="message" 
                                    required 
                                    value={formData.message}
                                    rows={6}
                                    className="w-full bg-gray-700/50 border border-white/10 rounded-xl px-5 py-4 text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 group-hover:border-blue-400/30"
                                    placeholder="Your message here..."
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>

                        <div className="mt-8 text-center text-gray-400 text-sm">
                            <p>Alternatively, reach me at <span className="text-blue-400">gungunbps2018@gmail.com</span></p>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};