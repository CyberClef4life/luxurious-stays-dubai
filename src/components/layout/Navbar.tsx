
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b54eba77-803b-45d7-90b5-c5ed529ffb5c.png" 
              alt="ConciergeSublime" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#properties">Properties</NavLink>
            <NavLink href="#whyus">Why Choose Us</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            
            <div className="relative group ml-1">
              <button className="flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-slate-100">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1 glass-card rounded-md">
                  <DropdownLink href="#about">About Us</DropdownLink>
                  <DropdownLink href="#contact">Contact</DropdownLink>
                  <DropdownLink href="#blog">Blog</DropdownLink>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-brand-teal hover:bg-brand-teal/90">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-3">
          <MobileNavLink href="#properties" onClick={() => setIsMobileMenuOpen(false)}>
            Properties
          </MobileNavLink>
          <MobileNavLink href="#whyus" onClick={() => setIsMobileMenuOpen(false)}>
            Why Choose Us
          </MobileNavLink>
          <MobileNavLink href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>
            Testimonials
          </MobileNavLink>
          <MobileNavLink href="#faq" onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </MobileNavLink>
          <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </MobileNavLink>
          <MobileNavLink href="#blog" onClick={() => setIsMobileMenuOpen(false)}>
            Blog
          </MobileNavLink>
          <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 mt-2">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

// Desktop Nav Link component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-slate-100"
  >
    {children}
  </a>
);

// Mobile Nav Link component
const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a
    href={href}
    className="py-2 text-base font-medium border-b border-gray-100 last:border-0"
    onClick={onClick}
  >
    {children}
  </a>
);

// Dropdown Link component
const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
