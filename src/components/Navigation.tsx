import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect , useMemo} from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { name: "Home", hash: "#home" },
      { name: "About", hash: "#about" },
      { name: "Skills", hash: "#skills" },
      { name: "Education", hash: "#education" },
      { name: "Experience", hash: "#experience" },
      { name: "Projects", hash: "#projects" },
      { name: "Contact", hash: "#contact" },
    ],
    []
  );

  const scrollToSection = (hash: string) => {
    setIsOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const { hash } of navItems) {
        const id = hash.substring(1);
        const section = document.getElementById(id);
        if (!section) continue;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            HSK
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const sectionId = item.hash.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Desktop social */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/kajaharisai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/kajaharisai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:kaja.harisai19@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => {
              const sectionId = item.hash.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`block w-full text-left transition-colors ${
                    isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}

            {/* Mobile social */}
            <div className="flex space-x-4 pt-4 border-t border-gray-800">
              <a
                href="https://github.com/kajaharisai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/kajaharisai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:kaja.harisai19@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
