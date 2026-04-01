import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl mb-4">Product not found</h1>
          <Link to="/products" className="text-accent underline">Back to Products</Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
    toast.success(`${product.name} added to cart`);
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <Link to="/products" className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="aspect-[3/4] bg-secondary">
            <img src={product.image} alt={product.name} width={800} height={1024} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-2">{product.category}</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="font-display text-2xl font-semibold text-accent mb-6">${product.price.toFixed(2)}</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <p className="font-body text-xs tracking-[0.2em] uppercase mb-3">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border font-body text-sm transition-colors ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ShoppingBag size={16} /> Add to Cart
            </button>

            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check size={14} className="text-accent" /> Free shipping on orders over $100
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check size={14} className="text-accent" /> 30-day return policy
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 lg:mt-28">
            <h2 className="font-display text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="image-zoom aspect-[3/4] bg-secondary mb-4">
                    <img src={p.image} alt={p.name} loading="lazy" width={800} height={1024} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-body text-sm group-hover:text-accent transition-colors">{p.name}</h3>
                  <p className="font-body text-sm font-semibold">${p.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
