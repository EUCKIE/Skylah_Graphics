
import { Hero } from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { AboutPreview } from "@/components/AboutPreview";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <RecentProjects />
      <AboutPreview />
      <Footer />
    </div>
  );
};

export default Index;
