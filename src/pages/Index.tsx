import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import Footer from '@/components/Footer';

import emeraldImage from '@/assets/emerald-collection.jpg';
import opalImage from '@/assets/opal-collection.jpg';
import rubyImage from '@/assets/ruby-collection.jpg';
import chainsImage from '@/assets/chains-collection.jpg';
import ringsImage from '@/assets/rings-collection.jpg';
import braceletsImage from '@/assets/bracelets-collection.jpg';
import earringsImage from '@/assets/earrings-collection.jpg';
import necklacesImage from '@/assets/necklaces-collection.jpg';
import pendantsImage from '@/assets/pendants-collection.jpg';
import watchesImage from '@/assets/watches-collection.jpg';
import cufflinksImage from '@/assets/cufflinks-collection.jpg';

const Index = () => {
  const categories = [
    {
      title: 'Emerald',
      image: emeraldImage,
      description: 'Exquisite emerald pieces with captivating green brilliance',
      href: '#emerald'
    },
    {
      title: 'Opal',
      image: opalImage,
      description: 'Mesmerizing opals with iridescent fire and color play',
      href: '#opal'
    },
    {
      title: 'Ruby',
      image: rubyImage,
      description: 'Passionate rubies in stunning crimson elegance',
      href: '#ruby'
    },
    {
      title: 'Rings',
      image: ringsImage,
      description: 'Timeless rings for life\'s most precious moments',
      href: '#rings'
    },
    {
      title: 'Necklaces',
      image: necklacesImage,
      description: 'Elegant necklaces to grace your neckline beautifully',
      href: '#necklaces'
    },
    {
      title: 'Earrings',
      image: earringsImage,
      description: 'Stunning earrings from subtle studs to statement pieces',
      href: '#earrings'
    },
    {
      title: 'Bracelets',
      image: braceletsImage,
      description: 'Graceful bracelets including tennis and chain styles',
      href: '#bracelets'
    },
    {
      title: 'Chains',
      image: chainsImage,
      description: 'Luxurious gold chains crafted to perfection',
      href: '#chains'
    },
    {
      title: 'Pendants',
      image: pendantsImage,
      description: 'Beautiful pendants with meaningful designs and gemstones',
      href: '#pendants'
    },
    {
      title: 'Watches',
      image: watchesImage,
      description: 'Luxury timepieces that blend function with elegance',
      href: '#watches'
    },
    {
      title: 'Cufflinks',
      image: cufflinksImage,
      description: 'Sophisticated cufflinks for the discerning gentleman',
      href: '#cufflinks'
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Emerald Elegance Necklace',
      price: 2850,
      originalPrice: 3200,
      image: emeraldImage,
      category: 'Emerald'
    },
    {
      id: '2',
      name: 'Fire Opal Statement Ring',
      price: 1650,
      image: opalImage,
      category: 'Opal'
    },
    {
      id: '3',
      name: 'Ruby Passion Earrings',
      price: 2200,
      image: rubyImage,
      category: 'Ruby'
    },
    {
      id: '4',
      name: 'Golden Heritage Chain',
      price: 890,
      originalPrice: 1050,
      image: chainsImage,
      category: 'Chains'
    },
    {
      id: '5',
      name: 'Diamond Solitaire Ring',
      price: 4200,
      image: ringsImage,
      category: 'Rings'
    },
    {
      id: '6',
      name: 'Tennis Bracelet Deluxe',
      price: 3400,
      image: braceletsImage,
      category: 'Bracelets'
    },
    {
      id: '7',
      name: 'Pearl Drop Earrings',
      price: 1250,
      originalPrice: 1450,
      image: earringsImage,
      category: 'Earrings'
    },
    {
      id: '8',
      name: 'Signature Pearl Necklace',
      price: 1850,
      image: necklacesImage,
      category: 'Necklaces'
    },
    {
      id: '9',
      name: 'Diamond Heart Pendant',
      price: 950,
      image: pendantsImage,
      category: 'Pendants'
    },
    {
      id: '10',
      name: 'Luxury Swiss Watch',
      price: 5500,
      originalPrice: 6200,
      image: watchesImage,
      category: 'Watches'
    },
    {
      id: '11',
      name: 'Platinum Cufflinks',
      price: 750,
      image: cufflinksImage,
      category: 'Cufflinks'
    },
    {
      id: '12',
      name: 'Emerald Tennis Bracelet',
      price: 3900,
      image: emeraldImage,
      category: 'Emerald'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'Absolutely stunning craftsmanship! My emerald necklace exceeded all expectations. The quality and attention to detail is remarkable.',
      rating: 5,
      location: 'New York, NY'
    },
    {
      name: 'Michael Chen',
      review: 'Purchased an engagement ring here and couldn\'t be happier. The staff was knowledgeable and the selection is world-class.',
      rating: 5,
      location: 'Los Angeles, CA'
    },
    {
      name: 'Emma Rodriguez',
      review: 'The opal earrings I bought are absolutely breathtaking. They catch the light beautifully and I receive compliments daily.',
      rating: 5,
      location: 'Miami, FL'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-luxury">Collections</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated selection of premium gemstones and luxury jewelry, 
              each piece handcrafted to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                image={category.image}
                description={category.description}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-luxury">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Handpicked treasures from our exclusive collection, featuring the finest 
              gemstones and exquisite craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-luxury">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of satisfied customers who have experienced the luxury 
              and quality of our exceptional jewelry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                review={testimonial.review}
                rating={testimonial.rating}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
