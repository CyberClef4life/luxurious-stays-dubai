
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark text-white pb-6" id="footer">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">ConciergeSublime</h3>
            <p className="text-gray-300 mb-6 pr-6">
              Offering premium short-term rentals in Dubai's most sought-after locations, combining luxury, comfort, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" aria-label="Facebook">
                <Facebook size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </SocialLink>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#properties">Properties</FooterLink>
              <FooterLink href="#whyus">Why Choose Us</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Locations</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Dubai Marina</FooterLink>
              <FooterLink href="#">Downtown Dubai</FooterLink>
              <FooterLink href="#">Palm Jumeirah</FooterLink>
              <FooterLink href="#">Business Bay</FooterLink>
              <FooterLink href="#">DIFC</FooterLink>
              <FooterLink href="#">Jumeirah Beach Residence</FooterLink>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-brand-teal" />
                <p className="text-gray-300">
                  Level 14, Boulevard Plaza Tower 1,<br />
                  Downtown Dubai, UAE
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-brand-teal" />
                <p className="text-gray-300">+971 4 123 4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-brand-teal" />
                <p className="text-gray-300">info@conciergesublime.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Stay updated with our latest properties and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50 bg-gray-700 text-white"
              />
              <button className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 rounded-md text-white font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} ConciergeSublime. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link to="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  </li>
);

const SocialLink = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a 
    href={href}
    className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-teal transition-colors"
    {...props}
  >
    {children}
  </a>
);

export default Footer;
