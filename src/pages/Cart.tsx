import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-6" />
          <h1 className="font-display text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="font-body text-sm text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
            Start Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="flex gap-6 border-b border-border pb-6">
                <Link to={`/product/${item.product.id}`} className="w-24 h-32 flex-shrink-0 bg-secondary">
                  <img src={item.product.image} alt={item.product.name} loading="lazy" className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/product/${item.product.id}`} className="font-body text-sm font-semibold hover:text-accent transition-colors">
                      {item.product.name}
                    </Link>
                    <p className="font-body text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 font-body text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-body text-sm font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-secondary p-8">
            <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{totalPrice >= 100 ? "Free" : "$9.99"}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-body font-semibold">
                <span>Total</span>
                <span>${(totalPrice + (totalPrice >= 100 ? 0 : 9.99)).toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block w-full text-center bg-primary text-primary-foreground py-4 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
