
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Preload the hero image
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop';
    
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.querySelector('.hero-parallax') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="hero-parallax absolute inset-0 scale-110">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop')",
              transition: "opacity 1.5s ease-in-out",
              opacity: loaded ? 1 : 0
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-16">
        <div className="max-w-3xl">
          <AnimatedSection delay={300} animation="fade-in-right">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white mb-4">
              Premium Short-Term Stays in Dubai
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={500} animation="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
              Experience Luxury Living in the Heart of Dubai
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={700} animation="fade-in">
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              From beachfront villas to downtown penthouses, our curated collection of premium properties offers unparalleled comfort and style.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={900}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white font-medium px-6 py-6 rounded-md text-base">
                Explore Properties
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 px-6 py-6 rounded-md text-base">
                Learn More
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
