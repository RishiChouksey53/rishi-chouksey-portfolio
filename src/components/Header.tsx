
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <a href="#" className="font-heading text-2xl font-bold text-primary relative z-50">
            Portfolio
          </a>
          
          <div 
            id="mobile-nav"
            className={`fixed md:relative top-0 left-0 w-full h-screen md:h-auto
              ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full md:translate-y-0 opacity-0 md:opacity-100"}
              bg-white md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
              transition-all duration-300 ease-in-out md:transition-none
              flex items-center md:items-stretch z-40`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:px-0 flex items-center">
              <ul className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-8 w-full md:w-auto">
                <li>
                  <a 
                    href="#projects" 
                    className="text-lg md:text-base font-medium text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="text-lg md:text-base font-medium text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-lg md:text-base font-medium text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
                <li className="md:hidden">
                  <Button 
                    variant="default"
                    size="lg"
                    className="mt-4"
                    asChild
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="default"
              size="sm"
              className="hidden md:flex"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="relative z-50 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
