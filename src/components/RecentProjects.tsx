
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Brand Identity - TechFlow",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Complete brand identity design for a tech startup"
  },
  {
    id: 2,
    title: "Website Design - EcoLife",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Modern responsive website for sustainable living brand"
  },
  {
    id: 3,
    title: "Logo Design - CloudSync",
    category: "Logo Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Minimalist logo design for cloud storage service"
  }
];

export const RecentProjects = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest creative work and see how we've helped brands
            stand out in their markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
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
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
