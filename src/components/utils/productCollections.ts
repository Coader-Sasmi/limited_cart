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

// export const jacketProducts: Product[] = [
//   /* your jacket array */
// ];
export const shirtProducts: Product[] = [
  /* another page’s array */
];
export const pantProducts: Product[] = [
  /* etc. */
];
// …add one export per “page” collection

export const allProducts = [
  ...jacketProducts,
  ...shirtProducts,
  ...pantProducts,
  ...bagProducts,
];
