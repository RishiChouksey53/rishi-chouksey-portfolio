
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pro Connect",
      description: "A fully functional LinkedIn-inspired web application that supports user authentication, post creation, comment threads, and professional networking features. Developed with a modular architecture and responsive UI.",
      imageSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey53/ProConnect-Frontend",
      githubUrl: "https://github.com/RishiChouksey53/ProConnect-Backend",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      category: "fullstack"
    },
    {
      id: 2,
      title: "PromptGPT",
      description: "A full-stack AI chat assistant powered by OpenAI's API, allowing users to create, manage, and continue chat threads with smart prompts. Integrated authentication, chat history, and real-time updates.",
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey53/PromptGPT-Frontend",
      githubUrl: "https://github.com/RishiChouksey53/PromptGPT-Backend",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
      category: "fullstack"
    },
    {
      id: 3,
      title: "Airbnb Clone",
      description: "A full-stack booking platform where users can browse, list, and book accommodations. Implements user authentication, listing filters, and responsive UI design.",
      imageSrc: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey53/Airbnb-Clone",
      githubUrl: "https://github.com/RishiChouksey53/Airbnb-Clone",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      category: "fullstack"
    },
    {
      id: 4,
      title: "Zerodha Clone",
      description: "Stock trading platform simulation with login, dashboard UI, and portfolio tracking. A comprehensive trading interface mimicking real-world stock trading platforms.",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey53/Zerodha-Frontend",
      githubUrl: "https://github.com/RishiChouksey53/Zerodha-Backend",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      category: "fullstack"
    }
  ];

  return (
    <section id="projects" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </TabsContent>
          
          {["frontend", "backend", "fullstack"].map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.category === category)
                  .map(project => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
