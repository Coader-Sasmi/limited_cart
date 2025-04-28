/* eslint-disable @typescript-eslint/no-empty-object-type */
// data/productCollections.ts
export interface Product {
  id: string;
  img: string;
  name: string;
  brand: string;
  price: number;
  images: string[];
  sales: number; // total sales count
  reviewsCount: number; // number of reviews
  rating: number; // average rating out of 5
  description: string;
  features: string[];
}
type NewProduct = {
  id: number;
  path: string;
  categories: string[];
  img: string;
  name: string;
  price: string;
  reviews: string;
  soldOutText?: string;
  brand?: string;
  images?: string[];
  sales?: number;
  reviewsCount?: number;
  rating?: number;
  description?: string;
  features?: string[];
};

export const jacketProducts: Product[] = [
  {
    id: "1",
    img: "/jacket/Picture62.png",
    name: "Cat Taiyaki Tee",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/jacket/Picture62.png",
      "/jacket/Picture63.png",
      "/jacket/Picture64.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "2",
    img: "/jacket/Picture63.png",
    name: "Cat Taiyaki Tee",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/jacket/Picture62.png",
      "/jacket/Picture63.png",
      "/jacket/Picture64.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "3",
    img: "/jacket/Picture64.png",
    name: "Cat Taiyaki Tee",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/jacket/Picture62.png",
      "/jacket/Picture63.png",
      "/jacket/Picture64.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
];

export const bagProducts: Product[] = [
  {
    id: "1",
    img: "/bag/Picture10.png",
    name: "bag",
    brand: "Al Karam",
    price: 95.5,
    images: ["/bag/Picture65.png", "/bag/Picture66.png", "/bag/Picture67.png"],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "2",
    img: "/bag/Picture65.png",
    name: "bag",
    brand: "Al Karam",
    price: 95.5,
    images: ["/bag/Picture65.png", "/bag/Picture66.png", "/bag/Picture67.png"],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "3",
    img: "/bag/Picture66.png",
    name: "bag",
    brand: "Al Karam",
    price: 95.5,
    images: ["/bag/Picture65.png", "/bag/Picture66.png", "/bag/Picture67.png"],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "4",
    img: "/bag/Picture67.png",
    name: "bag",
    brand: "Al Karam",
    price: 95.5,
    images: ["/bag/Picture65.png", "/bag/Picture66.png", "/bag/Picture67.png"],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "5",
    img: "/bag/Picture68.png",
    name: "bag",
    brand: "Al Karam",
    price: 95.5,
    images: ["/bag/Picture65.png", "/bag/Picture66.png", "/bag/Picture67.png"],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "6",
    img: "/bag/Picture69.png",
    name: "bag",
    brand: "Al Karam",
    price: 95.5,
    images: ["/bag/Picture65.png", "/bag/Picture66.png", "/bag/Picture67.png"],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
];

export const footwearProducts: Product[] = [
  {
    id: "1",
    img: "/footwear/Picture8.png",
    name: "Brown Boots",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "2",
    img: "/footwear/Picture7.png",
    name: "Black Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "3",
    img: "/footwear/Picture3.png",
    name: "Black Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "4",
    img: "/footwear/Picture5.png",
    name: "Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "5",
    img: "/footwear/Picture7.png",
    name: "Brown Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "6",
    img: "/footwear/Picture8.png",
    name: "Gray Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
];
export const menFootwearProducts: Product[] = [
  {
    id: "1",
    img: "/footwear/Picture1.png",
    name: "Upper: Cow Alpha Dior",
    brand: "Outsole: HANDMADE",
    price: 24.0,
    images: ["/footwear/Picture1.png"],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description: "Available Immediately",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
      "40 HQ container can fit 6000 PAIRS",
    ],
  },
  {
    id: "2",
    img: "/footwear/Picture3.png",
    name: "Black Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "3",
    img: "/footwear/Picture8.png",
    name: "Black Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "4",
    img: "/footwear/Picture5.png",
    name: "Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "5",
    img: "/footwear/Picture7.png",
    name: "Brown Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "6",
    img: "/footwear/Picture8.png",
    name: "Gray Shoes",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/footwear/Picture8.png",
      "/footwear/Picture7.png",
      "/footwear/Picture3.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
];

export const furnitureProducts: Product[] = [
  {
    id: "1",
    img: "/furniture/Picture10.png",
    name: "White Sofa",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "2",
    img: "/furniture/Picture11.png",
    name: "Chair",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "3",
    img: "/furniture/Picture12.png",
    name: "Chair",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "4",
    img: "/furniture/Picture11.png",
    name: "Chair",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "5",
    img: "/furniture/Picture12.png",
    name: "Chair",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "6",
    img: "/furniture/Picture13.png",
    name: "Chair",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "7",
    img: "/furniture/Picture14.png",
    name: "Chair",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "8",
    img: "/furniture/Picture15.png",
    name: "Chair",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
  {
    id: "9",
    img: "/furniture/Picture16.png",
    name: "Chair",
    brand: "Al Karam",
    price: 95.5,
    images: [
      "/furniture/Picture10.png",
      "/furniture/Picture11.png",
      "/furniture/Picture12.png",
    ],
    sales: 10402,
    reviewsCount: 1243,
    rating: 4.1,
    description:
      "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
    features: [
      "Material: 100% high-quality cotton",
      "Fit: Relaxed and unisex sizing",
      "Design: Durable, fade-resistant cat and taiyaki graphic",
      "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
    ],
  },
];

export const productArrival: NewProduct[] = [
  {
    id: 1,
    path: "/website/footwear",
    categories: ["ALL", "FOOTWEAR"],
    img: "/footwear/Picture2.png",
    name: "Brown Shoes",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
    brand: "Al Karam",
  },
  {
    id: 2,
    path: "/website/footwear",
    categories: ["ALL", "FOOTWEAR"],
    img: "/footwear/Picture1.png",
    name: "Black Shoes",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
    brand: "Al Karam",
  },
  {
    id: 3,
    path: "/website/furniture",
    categories: ["ALL", "FURNITURE"],
    img: "/furniture/Picture2.png",
    name: "White Sofa",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
    brand: "Al Karam",
  },
  {
    id: 4,
    path: "/website/furniture",
    categories: ["ALL", "FURNITURE"],
    img: "/furniture/Picture1.png",
    name: "Chair",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
    brand: "Al Karam",
  },
  {
    id: 5,
    path: "/website/footwear",
    categories: ["FOOTWEAR"],
    img: "/footwear/Picture3.png",
    name: "Shoes",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
    brand: "Al Karam",
  },
  {
    id: 7,
    path: "/website/bag",
    categories: ["ALL", "BAG"],
    img: "/bag/Picture10.png",
    name: "Bag",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
    brand: "Al Karam",
  },
  {
    id: 8,
    path: "/website/bag",
    categories: ["ALL", "BAG"],
    img: "/bag/Picture65.png",
    name: "Bag",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
  },
  {
    id: 9,
    path: "/website/jacket",
    categories: ["ALL", "JACKET"],
    img: "/jacket/Picture62.png",
    name: "Jacket",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
    brand: "Al Karam",
  },
  {
    id: 10,
    path: "/website/jacket",
    categories: ["ALL", "JACKET"],
    img: "/jacket/Picture63.png",
    name: "Jacket",
    price: "$95.50",
    reviews: "(4.1k) Customer Reviews",
    soldOutText: "Almost Sold Out",
    brand: "Al Karam",
  },
];

export const allCollections: Record<string, Product[]> = {
  jackets: jacketProducts,
  footwear: footwearProducts,
  furniture: furnitureProducts,
  bag: bagProducts,
  menFootwear: menFootwearProducts,
};
