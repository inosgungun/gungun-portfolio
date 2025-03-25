import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6"> {/* Match your home section container width */}
        <div className="flex justify-between items-center h-16">
          {/* Logo - Aligned with home section content */}
          <a 
            href="#home" 
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            gungun<span className="text-blue-400">.soni</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? "text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out flex items-center justify-center ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-medium transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? "text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};