
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Main Title */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Rishi Chouksey</h3>
            <p className="text-primary-foreground/80 max-w-md">
              Aspiring Software Engineer passionate about building meaningful solutions with code.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex flex-wrap justify-center gap-6">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/RishiChouksey53" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/rishichouksey53" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:choukseyrishi89@gmail.com" 
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-4 w-full">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Rishi Chouksey. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
