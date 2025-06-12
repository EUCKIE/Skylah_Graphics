
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    bio: "With over 8 years in design, Sarah leads our creative vision and ensures every project exceeds expectations."
  },
  {
    name: "Mike Chen",
    role: "Brand Designer",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    bio: "Mike specializes in brand identity and has helped over 50 companies establish their visual presence."
  },
  {
    name: "Emily Rodriguez",
    role: "Web Designer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    bio: "Emily creates stunning web experiences that combine beautiful design with seamless functionality."
  }
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about creating designs that make a real impact on businesses and their audiences."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, no matter how big or small, ensuring quality results."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best results come from close collaboration with our clients throughout the process."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We stay ahead of design trends and use innovative approaches to solve creative challenges."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Skylah Graphics</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of designers dedicated to bringing your brand vision to life 
              through creative excellence and innovative design solutions.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, Skylah Graphics began as a small studio with a big vision: 
                  to help businesses tell their stories through compelling visual design. 
                  What started as a passion project has grown into a full-service creative agency.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, established 
                  businesses, and everything in between. Each project has taught us something new 
                  and helped us refine our approach to design and client collaboration.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses looking to make 
                  their mark in the world through exceptional design.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Our workspace"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Design process"
                className="w-full h-48 object-cover rounded-lg mt-8"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <div className="text-primary font-medium mb-3">{member.role}</div>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
