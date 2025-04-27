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
    img: "/product_1.png",
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
    img: "/product_2.png",
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
    img: "/Picture3.png",
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
    img: "/Picture2.png",
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
    img: "/Picture1.png",
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
    img: "/furniture/Picture10.png",
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

export const allProducts = [
  ...jacketProducts,
  ...bagProducts,
  ...furnitureProducts,
  ...footwearProducts,
];
