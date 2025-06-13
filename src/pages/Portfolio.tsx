
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = ["All", "Branding", "Web Design", "Logo Design", "Print Design"];

const projects = [
  {
    id: 1,
    title: "Perry's Lubricants Brand Identity",
    category: "Branding",
    image : "/projects/BRAND GUIDELINE-02.jpg",
    description: "A comprehensive brand identity package, including a custom logo, cohesive color palette, and detailed brand guidelines, designed to position Perry’s Lubricants as a leading name in the automotive industry."
  },
  {
    id: 2,
    title: "Euclide Mtisi Website Portfolio",
    category: "Web Design",
    image: "/projects/Euclide Web.png",
    description: "A visually engaging and dynamic portfolio website showcasing the work of Euclide Mtisi, featuring interactive elements, seamless navigation, and a responsive design to highlight graphic design, branding, and web development projects."
  },
  {
    id: 3,
    title: "ZigZag Health Haven Logo",
    category: "Logo Design",
    image: "/projects/ZIGZAG HH.jpg",
    description: "A modern, clean, and wellness-inspired logo crafted for ZigZag Health Haven, blending calming colors and organic shapes to reflect the brand’s focus on holistic health and natural healing."
  },
  {
    id: 4,
    title: "Microfinance Flyer Design",
    category: "Print Design",
    image: "/projects/MEC COLATERAL BASED LOANS .jpg",
    description: "A bold and informative flyer created to promote microfinance services, featuring impactful typography, clear messaging, and an accessible layout aimed at engaging communities and encouraging financial inclusion."
  },
  {
    id: 5,
    title: "Recording Studio Branding",
    category: "Branding",
    image: "/projects/GUIDELINE MINI.jpg",
    description: "A full-scale branding project for New Xull Records, delivering a high-impact visual identity with a distinctive logo, bold color scheme, and cohesive brand assets tailored to resonate with modern music creators and audiences."
  },
  {
    id: 6,
    title: "Coming Soon",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: ""
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
