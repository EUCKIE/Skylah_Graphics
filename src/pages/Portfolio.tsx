
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = ["All", "Branding", "Web Design", "Logo Design", "Print Design"];

const projects = [
  {
    id: 1,
    title: "TechFlow Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Complete brand identity including logo, color palette, and brand guidelines for a technology startup."
  },
  {
    id: 2,
    title: "EcoLife Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Responsive website design for a sustainable living brand with e-commerce functionality."
  },
  {
    id: 3,
    title: "CloudSync Logo",
    category: "Logo Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Modern, minimalist logo design for cloud storage service emphasizing connectivity."
  },
  {
    id: 4,
    title: "Restaurant Menu Design",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Elegant menu design for upscale restaurant with sophisticated typography."
  },
  {
    id: 5,
    title: "FinanceApp Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Professional branding package for financial technology application."
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Creative portfolio website for photographer with dynamic image galleries."
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of creative projects, from brand identities 
              to web designs. Each project represents our commitment to excellence 
              and creative innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
