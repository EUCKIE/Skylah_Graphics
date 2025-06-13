import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
const teamMembers = [{
  name: "Euclide Mtisi",
  role: "C.E.O & Founder ",
  image: "/team/euclide.png ",
  bio: "Euclide Mtisi is the visionary behind Skylah Graphics, a creative powerhouse specializing in graphic design, print media, and web development. With a passion for visual storytelling and a keen eye for detail, Euclide leads a dynamic team dedicated to crafting impactful brand experiences. Under his leadership, Skylah Graphics has grown into a trusted name for innovative design solutions across industries."
}, 
{
  name: "Tinashe Nyagumbo",
  role: "Markerting and Logistics",
  image: "/team/Tinashe.jpg ",
  bio: "Tinashe oversees marketing strategy and logistics at Skylah Graphics, ensuring smooth operations and impactful brand outreach. His coordination skills help bridge creativity with execution."
},
 {
  name: "Open Position",
  role: "Web Designer",
  image: " https://media.istockphoto.com/id/1267811430/photo/teamwork-join-our-team-message-lightbox.jpg?s=1024x1024&w=is&k=20&c=frhWSDMhBHHHhcVraAaE9AitMS0sp-hVX3nh7W1_awg=",
  bio: "We’re looking for a talented Web Designer to join Skylah Graphics. If you’re passionate about creating stunning, user-friendly websites that elevate brands, we’d love to hear from you."
}];

const values = [{
  icon: Heart,
  title: "Passion",
  description: "We're passionate about creating designs that make a real impact on businesses and their audiences."
}, {
  icon: Target,
  title: "Excellence",
  description: "We strive for excellence in every project, no matter how big or small, ensuring quality results."
}, {
  icon: Users,
  title: "Collaboration",
  description: "We believe the best results come from close collaboration with our clients throughout the process."
}, {
  icon: Award,
  title: "Innovation",
  description: "We stay ahead of design trends and use innovative approaches to solve creative challenges."
}];
const About = () => {
  return <div className="min-h-screen bg-background">
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
                <p>Founded in 2022, Skylah Graphics began as a small studio with a big vision: to help businesses tell their stories through compelling visual design. What started as a passion project has grown into a full-service creative agency.</p>
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
              <img src="https://images.unsplash.com/photo-1722159475082-0a2331580de3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="Our workspace" className="w-full h-48 object-cover rounded-lg" />
              <img src="https://images.unsplash.com/photo-1711169709434-78b1be10b5c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Design process" className="w-full h-48 object-cover rounded-lg mt-8" />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <div className="text-primary font-medium mb-3">{member.role}</div>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;