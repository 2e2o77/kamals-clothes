import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold tracking-widest mb-4">
              KAMAL'S <span className="text-gold">CLOTHES</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Modern youth fashion for those who dare to stand out. Premium quality, timeless style.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-gold">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/products?category=t-shirts" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">T-Shirts</Link>
              <Link to="/products?category=hoodies" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Hoodies</Link>
              <Link to="/products?category=jeans" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Jeans</Link>
              <Link to="/products?category=jackets" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Jackets</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-gold">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-gold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40 tracking-widest">
            © 2026 KAMAL'S CLOTHES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
