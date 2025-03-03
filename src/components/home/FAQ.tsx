
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqs = [
  {
    question: "How do I book a property?",
    answer: "Booking is simple! Browse our properties, select your desired dates, and complete the secure checkout process. You'll receive a confirmation email with all the details of your stay."
  },
  {
    question: "What's included in my stay?",
    answer: "All our properties come fully equipped with essentials like high-speed WiFi, premium linens, toiletries, and a fully stocked kitchen. Many properties also include access to building amenities like pools, gyms, and parking."
  },
  {
    question: "Is there a minimum stay requirement?",
    answer: "Yes, most properties have a minimum stay of 3 nights, though this may vary during peak seasons or for specific properties. Check the property details for specific requirements."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our standard policy allows for full refunds on cancellations made 7 days or more before check-in. Cancellations within 7 days may be eligible for partial refunds, depending on the property. Please check the specific property listing for details."
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes, we can arrange luxury airport transfers for an additional fee. Please let us know your flight details at least 48 hours in advance so we can make the necessary arrangements."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), as well as bank transfers for longer stays. All payments are processed securely through our platform."
  }
];

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <div
        className={`mt-2 overflow-hidden faq-transition ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-brand-teal uppercase tracking-wide">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our properties and services.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                {faqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="text-center mt-10">
            <p className="mb-4 text-gray-600">
              Still have questions? We're here to help!
            </p>
            <Button className="bg-brand-teal hover:bg-brand-teal/90">
              Contact Us
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
