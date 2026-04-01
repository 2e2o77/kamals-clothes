import tshirtBlack from "@/assets/products/tshirt-black.jpg";
import tshirtWhite from "@/assets/products/tshirt-white.jpg";
import tshirtNavy from "@/assets/products/tshirt-navy.jpg";
import hoodieGray from "@/assets/products/hoodie-gray.jpg";
import hoodieBlack from "@/assets/products/hoodie-black.jpg";
import hoodieBurgundy from "@/assets/products/hoodie-burgundy.jpg";
import jeansBlue from "@/assets/products/jeans-blue.jpg";
import jeansBlack from "@/assets/products/jeans-black.jpg";
import jeansLight from "@/assets/products/jeans-light.jpg";
import jacketLeather from "@/assets/products/jacket-leather.jpg";
import jacketBomber from "@/assets/products/jacket-bomber.jpg";
import jacketSuede from "@/assets/products/jacket-suede.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "t-shirts" | "hoodies" | "jeans" | "jackets";
  image: string;
  description: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Essential Black Tee",
    price: 29.99,
    category: "t-shirts",
    image: tshirtBlack,
    description: "A premium cotton crew neck tee in deep black. The perfect foundation for any outfit. Made from 100% organic cotton with a relaxed fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "2",
    name: "Classic White Tee",
    price: 29.99,
    category: "t-shirts",
    image: tshirtWhite,
    description: "Clean, crisp, and timeless. Our signature white tee features a premium cotton blend for unmatched softness and durability.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "3",
    name: "Navy Polo Shirt",
    price: 39.99,
    category: "t-shirts",
    image: tshirtNavy,
    description: "Elevated casual style with our navy polo. Features a tailored fit and premium piqué cotton fabric.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "Urban Gray Hoodie",
    price: 59.99,
    category: "hoodies",
    image: hoodieGray,
    description: "Street-ready comfort in charcoal gray. Heavy-weight French terry with a kangaroo pocket and adjustable drawstring hood.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "5",
    name: "Stealth Black Hoodie",
    price: 64.99,
    category: "hoodies",
    image: hoodieBlack,
    description: "All-black everything. Our signature hoodie in deep black with tonal branding. Premium fleece-lined interior.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "6",
    name: "Burgundy Pullover Hoodie",
    price: 59.99,
    category: "hoodies",
    image: hoodieBurgundy,
    description: "Stand out in rich burgundy. This pullover hoodie combines bold color with premium comfort for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "7",
    name: "Dark Wash Slim Jeans",
    price: 79.99,
    category: "jeans",
    image: jeansBlue,
    description: "Modern slim fit in a premium dark indigo wash. Features stretch denim for all-day comfort with a refined look.",
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "8",
    name: "Black Skinny Jeans",
    price: 79.99,
    category: "jeans",
    image: jeansBlack,
    description: "Sharp and versatile. Our black skinny jeans are crafted from premium stretch denim with a clean, modern silhouette.",
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "9",
    name: "Light Wash Relaxed Jeans",
    price: 74.99,
    category: "jeans",
    image: jeansLight,
    description: "Effortless style in a vintage-inspired light wash. Relaxed fit for casual comfort with authentic fading details.",
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "10",
    name: "Leather Biker Jacket",
    price: 199.99,
    category: "jackets",
    image: jacketLeather,
    description: "Iconic biker style in genuine leather. Features asymmetric zip, quilted shoulder panels, and satin lining.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "11",
    name: "Olive Bomber Jacket",
    price: 129.99,
    category: "jackets",
    image: jacketBomber,
    description: "Military-inspired bomber in olive green. Water-resistant shell with ribbed cuffs and a utility arm pocket.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "12",
    name: "Tan Suede Trucker Jacket",
    price: 169.99,
    category: "jackets",
    image: jacketSuede,
    description: "Western-inspired suede trucker jacket in warm tan. Features dual chest pockets and a classic button-front closure.",
    sizes: ["S", "M", "L", "XL"],
  },
];
