import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Skylah Graphics</h3>
            <p className="text-muted-foreground mb-4">
              Creative design solutions that bring your brand to life.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary">Home</Link>
              <Link to="/portfolio" className="block text-muted-foreground hover:text-primary">Portfolio</Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary">Services</Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary">About</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <div className="text-muted-foreground">Logo Design</div>
              <div className="text-muted-foreground">Brand Identity</div>
              <div className="text-muted-foreground">Web Design</div>
              <div className="text-muted-foreground">Print Design</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">skylahgraphics@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+263 71 330 5700</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Hse 287, Daisyhill Chipinge
Zimbabwe </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Skylah Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};