import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  originalPrice?: number;
}

const ProductCard = ({ id, name, price, image, category, originalPrice }: ProductCardProps) => {
  const isOnSale = originalPrice && originalPrice > price;

  return (
    <Card className="group relative overflow-hidden border-0 card-shadow hover:luxury-shadow transition-luxury">
      <div className="aspect-square relative overflow-hidden">
        {isOnSale && (
          <div className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-sm font-medium">
            Sale
          </div>
        )}
        
        <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white hover:text-destructive transition-smooth opacity-0 group-hover:opacity-100">
          <Heart className="h-4 w-4" />
        </button>

        <img
          src={image}
          alt={`${name} - ${category} jewelry`}
          className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
          <Button 
            variant="secondary" 
            className="gold-gradient hover:animate-glow"
          >
            Quick View
          </Button>
        </div>
        
        {/* Shimmer Effect */}
        <div className="jewelry-shimmer absolute inset-0"></div>
      </div>
      
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-luxury">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-accent">
              ${price.toLocaleString()}
            </span>
            {isOnSale && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice?.toLocaleString()}
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="luxury-gradient hover:gold-shadow transition-luxury"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;