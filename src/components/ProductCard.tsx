import { Link } from "react-router-dom";
import { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="image-zoom aspect-[3/4] bg-secondary mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1024}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-body text-sm tracking-wide group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="font-body text-sm font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
