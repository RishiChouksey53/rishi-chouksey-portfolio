
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently available for freelance work and job opportunities. If you have a project
              that needs some creative thinking or if you're looking to hire, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">choukseyrishi89@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Social Media</h4>
                  <div className="flex gap-3 mt-1">
                    <a href="https://linkedin.com/in/rishichouksey53" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                    <a href="https://leetcode.com/u/RishiChouksey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">LeetCode</a>
                    <a href="https://github.com/RishiChouksey53" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><span className="mr-2">Sending...</span><span className="animate-spin">↻</span></>
                ) : (
                  <><Send className="mr-2 h-4 w-4" /> Send Message</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
