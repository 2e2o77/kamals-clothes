-- ============================================
-- KAMAL'S CLOTHES — Seed Data
-- ============================================

USE kamals_clothes;

-- --------------------------------------------
-- Admin user  (password: "Admin@123" hashed with bcrypt)
-- --------------------------------------------
INSERT INTO users (name, email, password, role) VALUES
  ('Kamal Admin', 'admin@kamalsclothes.com',
   '$2a$12$LJ3a5sGlMwEbEm9Kk8YRaeZIJsKHYtO3qG6Pe4MBcjMK0bY2Vwq6', 'admin'),
  ('John Doe',   'john@example.com',
   '$2a$12$LJ3a5sGlMwEbEm9Kk8YRaeZIJsKHYtO3qG6Pe4MBcjMK0bY2Vwq6', 'user');

-- --------------------------------------------
-- Categories
-- --------------------------------------------
INSERT INTO categories (id, name) VALUES
  (1, 'T-Shirts'),
  (2, 'Hoodies'),
  (3, 'Jeans'),
  (4, 'Jackets');

-- --------------------------------------------
-- Products
-- --------------------------------------------
INSERT INTO products (name, description, price, image_url, category_id, stock) VALUES
  -- T-Shirts
  ('Essential Black Tee',
   'A premium cotton crew neck tee in deep black. Made from 100% organic cotton with a relaxed fit.',
   29.99, '/images/products/tshirt-black.jpg', 1, 120),
  ('Classic White Tee',
   'Clean, crisp, and timeless. Premium cotton blend for unmatched softness and durability.',
   29.99, '/images/products/tshirt-white.jpg', 1, 100),
  ('Navy Polo Shirt',
   'Elevated casual style with a tailored fit and premium piqué cotton fabric.',
   39.99, '/images/products/tshirt-navy.jpg', 1, 80),

  -- Hoodies
  ('Urban Gray Hoodie',
   'Street-ready comfort in charcoal gray. Heavy-weight French terry with kangaroo pocket.',
   59.99, '/images/products/hoodie-gray.jpg', 2, 60),
  ('Stealth Black Hoodie',
   'All-black everything. Deep black with tonal branding and premium fleece-lined interior.',
   64.99, '/images/products/hoodie-black.jpg', 2, 55),
  ('Burgundy Pullover Hoodie',
   'Stand out in rich burgundy. Bold color with premium comfort for everyday wear.',
   59.99, '/images/products/hoodie-burgundy.jpg', 2, 45),

  -- Jeans
  ('Dark Wash Slim Jeans',
   'Modern slim fit in premium dark indigo wash. Stretch denim for all-day comfort.',
   79.99, '/images/products/jeans-blue.jpg', 3, 70),
  ('Black Skinny Jeans',
   'Sharp and versatile. Premium stretch denim with a clean, modern silhouette.',
   79.99, '/images/products/jeans-black.jpg', 3, 65),
  ('Light Wash Relaxed Jeans',
   'Effortless style in a vintage-inspired light wash. Relaxed fit with authentic fading.',
   74.99, '/images/products/jeans-light.jpg', 3, 50),

  -- Jackets
  ('Leather Biker Jacket',
   'Iconic biker style in genuine leather. Asymmetric zip, quilted shoulders, satin lining.',
   199.99, '/images/products/jacket-leather.jpg', 4, 30),
  ('Olive Bomber Jacket',
   'Military-inspired bomber in olive green. Water-resistant shell with ribbed cuffs.',
   129.99, '/images/products/jacket-bomber.jpg', 4, 40),
  ('Tan Suede Trucker Jacket',
   'Western-inspired suede trucker in warm tan. Dual chest pockets, button-front closure.',
   169.99, '/images/products/jacket-suede.jpg', 4, 25);
