import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Check } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    navigate("/cart");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    clearCart();
    setSubmitted(true);
    toast.success("Order placed successfully!");
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
            <Check size={32} className="text-accent-foreground" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-4">Thank You!</h1>
          <p className="font-body text-sm text-muted-foreground mb-2">Your order has been placed successfully.</p>
          <p className="font-body text-sm text-muted-foreground mb-8">We'll send you a confirmation shortly.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground px-8 py-3 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </Layout>
    );
  }

  const shipping = totalPrice >= 100 ? 0 : 9.99;

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Shipping Details</h2>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase block mb-2">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase block mb-2">Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase block mb-2">Delivery Address</label>
              <textarea
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                rows={3}
                className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Enter your delivery address"
              />
            </div>
            <button
              type="submit"
              className="w-full gold-gradient text-accent-foreground py-4 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity"
            >
              Place Order — ${(totalPrice + shipping).toFixed(2)}
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-secondary p-8">
            <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="w-16 h-20 bg-background flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-sm font-semibold">{item.product.name}</p>
                    <p className="font-body text-xs text-muted-foreground">Size: {item.size} × {item.quantity}</p>
                  </div>
                  <p className="font-body text-sm font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between font-body font-semibold text-lg pt-2 border-t border-border">
                <span>Total</span>
                <span>${(totalPrice + shipping).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
