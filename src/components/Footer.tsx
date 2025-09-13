import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="luxury-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-bold text-luxury mb-4">
              Luxe Jewelry
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-md">
              Crafting exquisite jewelry with the finest emeralds, opals, and rubies. 
              Each piece tells a story of luxury and elegance.
            </p>
            
            {/* Newsletter */}
            <div className="max-w-md">
              <h4 className="text-xl font-semibold mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" className="gold-gradient">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Collections</h4>
            <ul className="space-y-3">
              <li>
                <a href="#emerald" className="text-white/80 hover:text-accent transition-smooth">
                  Emerald
                </a>
              </li>
              <li>
                <a href="#opal" className="text-white/80 hover:text-accent transition-smooth">
                  Opal
                </a>
              </li>
              <li>
                <a href="#ruby" className="text-white/80 hover:text-accent transition-smooth">
                  Ruby
                </a>
              </li>
              <li>
                <a href="#chains" className="text-white/80 hover:text-accent transition-smooth">
                  Chains
                </a>
              </li>
              <li>
                <a href="#rings" className="text-white/80 hover:text-accent transition-smooth">
                  Rings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  123 Luxury Avenue<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-white/80">info@luxejewelry.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2024 Luxe Jewelry. All rights reserved.
          </p>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-accent hover:bg-white/10">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-accent hover:bg-white/10">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-accent hover:bg-white/10">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;