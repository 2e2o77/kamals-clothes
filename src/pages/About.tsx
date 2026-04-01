import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-2">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-8">
            About <span className="text-gold-gradient">KAMAL'S CLOTHES</span>
          </h1>

          <div className="space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              Born from a passion for modern menswear, KAMAL'S CLOTHES was founded with a simple mission: 
              to create premium, affordable clothing for the young, bold, and style-conscious.
            </p>
            <p>
              We believe that great fashion shouldn't cost a fortune. Every piece in our collection is 
              carefully designed to blend contemporary aesthetics with timeless appeal — from our buttery-soft 
              essential tees to our hand-selected leather jackets.
            </p>
            <p>
              Inspired by the streets, refined by craftsmanship. We source the finest materials and work 
              with skilled artisans to bring you clothing that looks incredible and lasts. No fast fashion 
              compromises — just honest, quality menswear.
            </p>
            <p>
              Whether you're dressing for the office, the weekend, or a night out, KAMAL'S CLOTHES has you 
              covered. Our collections span essential basics to statement outerwear, designed to mix and match 
              effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-accent">10K+</p>
              <p className="font-body text-xs tracking-[0.15em] uppercase mt-2 text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-accent">50+</p>
              <p className="font-body text-xs tracking-[0.15em] uppercase mt-2 text-muted-foreground">Products</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-accent">4.9</p>
              <p className="font-body text-xs tracking-[0.15em] uppercase mt-2 text-muted-foreground">Average Rating</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Explore Our Collection <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
