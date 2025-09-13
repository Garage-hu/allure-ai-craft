import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-jewelry.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury jewelry collection featuring emerald and gold pieces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Luxury That{' '}
          <span className="text-luxury">Shines</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animation-delay-200">
          Discover our exquisite collection of premium emeralds, opals, and rubies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
          <Button 
            size="lg" 
            className="gold-gradient hover:animate-glow transition-luxury text-lg px-8 py-4"
          >
            Shop Collection
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 transition-luxury"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-accent/50 rounded-full animate-float animation-delay-1000 opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-float animation-delay-2000 opacity-50"></div>
    </section>
  );
};

export default HeroSection;