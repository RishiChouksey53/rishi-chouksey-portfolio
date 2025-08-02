import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Rishi Chouksey
          </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Aspiring Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Strong foundation in Data Structures and Algorithms using Java, with hands-on experience in full-stack web development using the MERN stack. Solved 100+ LeetCode problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-md opacity-75"></div>
              <div className="relative bg-white rounded-full p-1">
                <img src="/lovable-uploads/6b1a5228-6f40-4c8d-82ec-13a28595e793.png" alt="Rishi Chouksey Profile" className="w-72 h-72 rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a href="#projects">
              <ArrowDownIcon className="h-6 w-6 animate-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;