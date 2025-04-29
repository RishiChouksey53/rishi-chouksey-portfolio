
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, imageSrc, demoUrl, githubUrl, technologies }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 pt-4 border-t">
        <Button className="w-[45%]" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Demo
          </a>
        </Button>
        <Button variant="outline" className="w-[45%]" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            View Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
