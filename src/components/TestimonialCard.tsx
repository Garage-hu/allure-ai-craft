import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
  location: string;
}

const TestimonialCard = ({ name, review, rating, location }: TestimonialCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-accent fill-accent' : 'text-muted'
        }`}
      />
    ));
  };

  return (
    <Card className="p-8 border-0 card-shadow hover:luxury-shadow transition-luxury group">
      <div className="flex items-center mb-4">
        {renderStars(rating)}
      </div>
      
      <blockquote className="text-lg italic text-foreground mb-6 leading-relaxed">
        "{review}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
          <span className="text-accent font-bold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;