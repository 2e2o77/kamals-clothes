import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-2">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase block mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase block mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase block mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary flex-shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.15em] uppercase mb-1">Email</p>
                <p className="font-body text-sm text-muted-foreground">hello@kamalsclothes.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary flex-shrink-0">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.15em] uppercase mb-1">Phone</p>
                <p className="font-body text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary flex-shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.15em] uppercase mb-1">Location</p>
                <p className="font-body text-sm text-muted-foreground">123 Fashion Street, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
