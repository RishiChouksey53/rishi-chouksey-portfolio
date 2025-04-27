
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart, and checkout functionality.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity tool for organizing tasks with drag-and-drop functionality.",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["React", "TypeScript", "Firebase"],
      category: "frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with interactive maps and forecasts.",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["JavaScript", "APIs", "Chart.js"],
      category: "frontend"
    },
    {
      id: 4,
      title: "Fitness Tracker API",
      description: "RESTful API for tracking workouts, nutrition, and fitness progress.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      category: "backend"
    },
    {
      id: 5,
      title: "Real Estate Listings",
      description: "Property search platform with filtering options and interactive maps.",
      imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["React", "Redux", "Leaflet", "Firebase"],
      category: "fullstack"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for monitoring social media engagement metrics.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Vue.js", "D3.js", "Node.js"],
      category: "frontend"
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
