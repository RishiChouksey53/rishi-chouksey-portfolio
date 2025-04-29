
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
  category: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.github.com/users/RishiChouksey53/repos");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const repos = await response.json();
        
        // Map GitHub repos to our project format
        const mappedProjects = repos.map((repo: GithubRepo) => {
          // Determine category based on language or topics
          let category = "frontend";
          if (repo.topics && repo.topics.includes("backend")) {
            category = "backend";
          } else if (
            repo.language === "JavaScript" || 
            repo.language === "TypeScript" || 
            repo.language === "HTML" || 
            repo.language === "CSS"
          ) {
            category = "frontend";
          } else if (
            repo.topics && 
            (repo.topics.includes("fullstack") || 
             repo.topics.includes("full-stack"))
          ) {
            category = "fullstack";
          } else if (
            repo.language === "Python" || 
            repo.language === "Java" || 
            repo.language === "C#" || 
            repo.language === "PHP" || 
            repo.language === "Ruby"
          ) {
            category = "backend";
          }

          // Generate a placeholder image based on the repo id
          const imageIndex = repo.id % 6;
          const placeholderImages = [
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          ];
          
          // Get technologies from topics or language
          const technologies = repo.topics && repo.topics.length > 0 
            ? repo.topics.map(topic => topic.charAt(0).toUpperCase() + topic.slice(1)) 
            : repo.language 
              ? [repo.language] 
              : ["JavaScript"];

          return {
            id: repo.id,
            title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
            description: repo.description || `A ${category} project built with ${technologies.join(", ")}`,
            imageSrc: placeholderImages[imageIndex],
            demoUrl: repo.homepage || repo.html_url,
            githubUrl: repo.html_url,
            technologies,
            category,
          };
        });

        setProjects(mappedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback to existing projects in case of error
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default Projects;
