import { useState } from 'react';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const categories = [
    { name: 'Emerald', href: '#emerald' },
    { name: 'Opal', href: '#opal' },
    { name: 'Ruby', href: '#ruby' },
    { name: 'Rings', href: '#rings' },
    { name: 'Necklaces', href: '#necklaces' },
    { name: 'Earrings', href: '#earrings' },
    { name: 'Bracelets', href: '#bracelets' },
    { name: 'Chains', href: '#chains' },
    { name: 'Pendants', href: '#pendants' },
    { name: 'Watches', href: '#watches' },
    { name: 'Cufflinks', href: '#cufflinks' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-luxury">Luxe Jewelry</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-accent transition-smooth">
                Home
              </a>
              
              {/* Shop Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsShopOpen(true)}
                onMouseLeave={() => setIsShopOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-accent transition-smooth">
                  Shop
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isShopOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 card-shadow rounded-lg bg-card border border-border">
                    <div className="py-2">
                      {categories.map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-smooth"
                        >
                          {category.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#about" className="text-foreground hover:text-accent transition-smooth">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition-smooth"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 glass-effect border-t border-white/10">
            <a href="#home" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth">
              Home
            </a>
            <div className="px-3 py-2">
              <span className="text-foreground font-medium">Shop</span>
              <div className="mt-2 pl-4 space-y-2">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#about" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth">
              About
            </a>
            <a href="#contact" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;