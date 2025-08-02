
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DevPortfolio</h3>
            <p className="text-primary-foreground/80">
              Showcasing my development journey and projects. Let's build something amazing together.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
