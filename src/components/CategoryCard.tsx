import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
  href: string;
}

const CategoryCard = ({ title, image, description, href }: CategoryCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 card-shadow hover:luxury-shadow transition-luxury cursor-pointer">
      <a href={href} className="block">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={image}
            alt={`${title} jewelry collection`}
            className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
          
          {/* Shimmer Effect */}
          <div className="jewelry-shimmer absolute inset-0"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-luxury">
            {title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground transition-luxury">
            {description}
          </p>
        </div>
      </a>
    </Card>
  );
};

export default CategoryCard;