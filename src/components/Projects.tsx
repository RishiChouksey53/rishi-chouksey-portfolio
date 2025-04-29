
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "YourBar",
      description: "YourBar is a web application that allows users to organize and keep track of their bar inventory.",
      imageSrc: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey053/YourBar",
      githubUrl: "https://github.com/RishiChouksey053/YourBar",
      technologies: ["Node.js", "Express", "MongoDB", "Handlebars"],
      category: "fullstack"
    },
    {
      id: 2,
      title: "Travel Agency",
      description: "A travel agency website with a sleek design and user-friendly interface for booking travels and vacation packages.",
      imageSrc: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey053/travel-agency",
      githubUrl: "https://github.com/RishiChouksey053/travel-agency",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend"
    },
    {
      id: 3,
      title: "Fitness App",
      description: "A fitness application designed to help users track their workout routines, nutrition, and overall fitness progress.",
      imageSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey053/Fitness-App",
      githubUrl: "https://github.com/RishiChouksey053/Fitness-App",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack"
    },
    {
      id: 4,
      title: "Pizza Order Website",
      description: "A comprehensive pizza ordering website with menu display, cart functionality, and order processing.",
      imageSrc: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey053/Pizza-Order-Website",
      githubUrl: "https://github.com/RishiChouksey053/Pizza-Order-Website",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "fullstack"
    },
    {
      id: 5,
      title: "Grocery Store",
      description: "An online grocery store platform with product catalog, shopping cart, and checkout functionality.",
      imageSrc: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey053/Grocery-Store",
      githubUrl: "https://github.com/RishiChouksey053/Grocery-Store",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "frontend"
    },
    {
      id: 6,
      title: "LinkedIn-Clone",
      description: "A LinkedIn clone project with user profiles, networking features, and post capabilities.",
      imageSrc: "https://images.unsplash.com/photo-1607969891751-mfa9b9e9cb7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      demoUrl: "https://github.com/RishiChouksey053/LinkedIn-Clone",
      githubUrl: "https://github.com/RishiChouksey053/LinkedIn-Clone",
      technologies: ["React", "Firebase"],
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
