
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Monitor, Printer, Smartphone, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Complete brand identity packages including logo design, color palettes, typography, and brand guidelines.",
    features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines", "Business Cards"]
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Modern, responsive websites that convert visitors into customers with stunning visual design.",
    features: ["Responsive Design", "UI/UX Design", "SEO Optimization", "Content Management", "E-commerce"]
  },
  {
    icon: Printer,
    title: "Print Design",
    description: "Professional print materials including brochures, flyers, posters, and marketing collateral.",
    features: ["Brochures", "Flyers", "Posters", "Business Cards", "Packaging"]
  },
  {
    icon: Smartphone,
    title: "Digital Marketing Design",
    description: "Eye-catching social media graphics, banner ads, and digital marketing materials.",
    features: ["Social Media Graphics", "Banner Ads", "Email Templates", "Digital Flyers", "Infographics"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive design services to help your brand stand out. 
              From brand identity to digital marketing, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together. 
              Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Start Project</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
