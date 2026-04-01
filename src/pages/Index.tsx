import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import categoryTshirts from "@/assets/category-tshirts.jpg";
import categoryHoodies from "@/assets/category-hoodies.jpg";
import categoryJeans from "@/assets/category-jeans.jpg";
import categoryJackets from "@/assets/category-jackets.jpg";
import { ArrowRight, Star } from "lucide-react";

const categories = [
  { name: "T-Shirts", slug: "t-shirts", image: categoryTshirts },
  { name: "Hoodies", slug: "hoodies", image: categoryHoodies },
  { name: "Jeans", slug: "jeans", image: categoryJeans },
  { name: "Jackets", slug: "jackets", image: categoryJackets },
];

const testimonials = [
  { name: "Alex M.", text: "The quality is insane for the price. My leather jacket gets compliments every time I wear it.", rating: 5 },
  { name: "Jordan R.", text: "Finally found a brand that fits perfectly. The hoodies are so comfortable I practically live in them.", rating: 5 },
  { name: "Sam K.", text: "Fast shipping and premium packaging. KAMAL'S CLOTHES is now my go-to for everything.", rating: 5 },
];

const featured = products.filter((_, i) => [0, 4, 7, 9].includes(i));

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="KAMAL'S CLOTHES Hero" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 animate-fade-in">New Collection 2026</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Define Your <span className="text-gold-gradient">Style</span>
            </h1>
            <p className="font-body text-sm text-primary-foreground/80 mb-8 max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Premium menswear designed for the modern generation. Bold, minimal, unapologetic.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 gold-gradient text-accent-foreground px-8 py-4 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Shop Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-2">Collections</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products?category=${cat.slug}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">{cat.name}</h3>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-gold mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight size={12} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-2">Curated Selection</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Products</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-foreground px-8 py-3 font-body text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-2">Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-border p-8 hover-lift">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">"{t.text}"</p>
                <p className="font-body text-xs tracking-[0.15em] uppercase font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Elevate Your <span className="text-gold">Wardrobe</span>
          </h2>
          <p className="font-body text-sm text-primary-foreground/60 max-w-md mx-auto mb-8">
            Join thousands who trust KAMAL'S CLOTHES for premium, affordable fashion.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-3 gold-gradient text-accent-foreground px-8 py-4 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Shop the Collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
