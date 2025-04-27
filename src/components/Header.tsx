
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
          <a href="#" className="font-heading text-2xl font-bold">
            Portfolio
          </a>
          
          <div className={`fixed md:relative top-0 left-0 right-0 bg-white/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none transition-all duration-300 ${
            isMenuOpen ? "translate-y-[4rem]" : "-translate-y-full md:translate-y-0"
          }`}>
            <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 py-8 md:py-0">
              <li><a href="#projects" className="text-lg md:text-base font-medium hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-lg md:text-base font-medium hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-lg md:text-base font-medium hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
