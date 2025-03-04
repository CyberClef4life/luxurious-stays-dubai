
import { Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const FloatingContactWidgets = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contactEmail = "customercare247f@conciergesublime.com";
  const whatsappNumber = "+971-58-5959-868";
  
  const formattedWhatsappNumber = whatsappNumber.replace(/[-\s]/g, '');
  const whatsappLink = `https://wa.me/${formattedWhatsappNumber}?text=Hello%20ConciergeSublime,%20I'm%20interested%20in%20your%20services.`;
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Widgets that show on hover/click */}
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <a 
          href={`mailto:${contactEmail}`}
          className="bg-brand-teal text-white p-3 rounded-full shadow-lg hover:bg-brand-teal/90 transition-colors flex items-center justify-center"
          aria-label="Email us"
        >
          <Mail size={24} />
          <span className="ml-2 hidden md:inline">Email Us</span>
        </a>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
          <span className="ml-2 hidden md:inline">WhatsApp</span>
        </a>
      </div>
      
      {/* Main toggler button */}
      <button
        onClick={toggleExpand}
        className={`bg-brand-dark text-white p-4 rounded-full shadow-lg hover:bg-brand-dark/90 transition-all duration-300 ${isExpanded ? 'rotate-45' : ''}`}
        aria-label="Toggle contact options"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-transform"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

export default FloatingContactWidgets;
