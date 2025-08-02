
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layout, Server, Settings, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary mb-4" />,
      skills: [
        "Java", "JavaScript"
      ]
    },
    {
      title: "Full-Stack Development",
      icon: <Server className="h-8 w-8 text-primary mb-4" />,
      skills: [
        "React.js", "Node.js", "Express.js", "MongoDB"
      ]
    },
    {
      title: "Frontend Styling",
      icon: <Layout className="h-8 w-8 text-primary mb-4" />,
      skills: [
        "Tailwind CSS", "HTML", "CSS"
      ]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary mb-4" />,
      skills: [
        "MySQL", "MongoDB"
      ]
    },
    {
      title: "Version Control",
      icon: <Settings className="h-8 w-8 text-primary mb-4" />,
      skills: [
        "Git", "GitHub"
      ]
    },
    {
      title: "Problem Solving",
      icon: <Smartphone className="h-8 w-8 text-primary mb-4" />,
      skills: [
        "Data Structures", "Algorithms", "100+ LeetCode", "Java DSA"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center">
                  {category.icon}
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 w-full">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-secondary rounded-md px-3 py-1 text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
