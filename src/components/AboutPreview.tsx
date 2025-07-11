
import { Button } from "@/components/ui/button";
import { Users, Target, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutPreview = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Creative Excellence
              <span className="text-primary block">Since 2022</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Skylah Graphics, we believe great design has the power to transform 
              businesses. Our team of creative professionals combines artistic vision 
              with strategic thinking to deliver exceptional results.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p className="text-lg">Coming Soon</p>
              <p className="text-sm">More content will be added here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
