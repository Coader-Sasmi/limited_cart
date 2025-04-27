/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState } from "react";
import { productArrival } from "../utils/productCollections";
import ProductCard from "./ProductCard";

// type Product = {
//   id: number;
//   categories: string[];
//   img: string;
//   name: string;
//   price: string;
//   reviews: string;
//   soldOutText?: string;
//   brand?: string;
//   images?: string[];
//   sales?: number;
//   reviewsCount?: number;
//   rating?: number;
//   description?: string;
//   features?: string[];
// };

// export const productArrival: Product[] = [
//   {
//     id: 1,
//     categories: ["ALL", "FOOTWEAR"],
//     img: "/product_1.png",
//     name: "Brown Shoes",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: [
//       "/footwear/Picture8.png",
//       "/footwear/Picture7.png",
//       "/footwear/Picture3.png",
//     ],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   {
//     id: 2,
//     categories: ["ALL", "FOOTWEAR"],
//     img: "/product_2.png",
//     name: "Black Shoes",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: [
//       "/footwear/Picture8.png",
//       "/footwear/Picture7.png",
//       "/footwear/Picture3.png",
//     ],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   {
//     id: 3,
//     categories: ["ALL", "FURNITURE"],
//     img: "/Picture2.png",
//     name: "White Sofa",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: [
//       "/furniture/Picture10.png",
//       "/furniture/Picture11.png",
//       "/furniture/Picture12.png",
//     ],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   {
//     id: 4,
//     categories: ["ALL", "FURNITURE"],
//     img: "/Picture1.png",
//     name: "Chair",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: [
//       "/furniture/Picture10.png",
//       "/furniture/Picture11.png",
//       "/furniture/Picture12.png",
//     ],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   {
//     id: 5,
//     categories: ["FOOTWEAR"],
//     img: "/Picture3.png",
//     name: "Shoes",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: [
//       "/footwear/Picture8.png",
//       "/footwear/Picture7.png",
//       "/footwear/Picture3.png",
//     ],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   // {
//   //   id: 6,
//   //   categories: ["ALL", "WALLET"],
//   //   img: "/pourse/Picture11.png",
//   //   name: "Purse",
//   //   price: "$95.50",
//   //   reviews: "(4.1k) Customer Reviews",
//   //   soldOutText: "Almost Sold Out",
//   //   brand: "Al Karam",
//   //   images: [
//   //     "/furniture/Picture10.png",
//   //     "/furniture/Picture11.png",
//   //     "/furniture/Picture12.png",
//   //   ],
//   //   sales: 10402,
//   //   reviewsCount: 1243,
//   //   rating: 4.1,
//   //   description:
//   //     "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//   //   features: [
//   //     "Material: 100% high-quality cotton",
//   //     "Fit: Relaxed and unisex sizing",
//   //     "Design: Durable, fade-resistant cat and taiyaki graphic",
//   //     "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//   //   ],
//   // },
//   {
//     id: 7,
//     categories: ["ALL", "BAG"],
//     img: "/bag/Picture10.png",
//     name: "Bag",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: ["/bag/Picture65.png", "/bag/Picture66.png", "/bag/Picture67.png"],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   {
//     id: 8,
//     categories: ["ALL", "BAG"],
//     img: "/bag/Picture65.png",
//     name: "Bag",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: ["/bag/Picture65.png", "/bag/Picture66.png", "/bag/Picture67.png"],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   {
//     id: 9,
//     categories: ["ALL", "JACKET"],
//     img: "/jacket/Picture62.png",
//     name: "Jacket",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: [
//       "/jacket/Picture62.png",
//       "/jacket/Picture63.png",
//       "/jacket/Picture64.png",
//     ],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   {
//     id: 10,
//     categories: ["ALL", "JACKET"],
//     img: "/jacket/Picture63.png",
//     name: "Jacket",
//     price: "$95.50",
//     reviews: "(4.1k) Customer Reviews",
//     soldOutText: "Almost Sold Out",
//     brand: "Al Karam",
//     images: [
//       "/jacket/Picture62.png",
//       "/jacket/Picture63.png",
//       "/jacket/Picture64.png",
//     ],
//     sales: 10402,
//     reviewsCount: 1243,
//     rating: 4.1,
//     description:
//       "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//     features: [
//       "Material: 100% high-quality cotton",
//       "Fit: Relaxed and unisex sizing",
//       "Design: Durable, fade-resistant cat and taiyaki graphic",
//       "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//     ],
//   },
//   // {
//   //   id: 11,
//   //   categories: ["ALL", "BELT"],
//   //   img: "/belt/Picture7.png",
//   //   name: "Belt",
//   //   price: "$95.50",
//   //   reviews: "(4.1k) Customer Reviews",
//   //   soldOutText: "Almost Sold Out",
//   //   brand: "Al Karam",
//   //   images: [
//   //     "/furniture/Picture10.png",
//   //     "/furniture/Picture11.png",
//   //     "/furniture/Picture12.png",
//   //   ],
//   //   sales: 10402,
//   //   reviewsCount: 1243,
//   //   rating: 4.1,
//   //   description:
//   //     "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//   //   features: [
//   //     "Material: 100% high-quality cotton",
//   //     "Fit: Relaxed and unisex sizing",
//   //     "Design: Durable, fade-resistant cat and taiyaki graphic",
//   //     "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//   //   ],
//   // },
//   // {
//   //   id: 12,
//   //   categories: ["ALL", "BELT"],
//   //   img: "/belt/Picture8.png",
//   //   name: "Belt",
//   //   price: "$95.50",
//   //   reviews: "(4.1k) Customer Reviews",
//   //   soldOutText: "Almost Sold Out",
//   //   brand: "Al Karam",
//   //   images: [
//   //     "/furniture/Picture10.png",
//   //     "/furniture/Picture11.png",
//   //     "/furniture/Picture12.png",
//   //   ],
//   //   sales: 10402,
//   //   reviewsCount: 1243,
//   //   rating: 4.1,
//   //   description:
//   //     "Embrace your love for cats and sweet treats with the Cat Taiyaki Tee! This fun and quirky T-shirt features an adorable design of a playful cat enjoying a taiyaki, the iconic fish-shaped Japanese dessert. Made from premium-quality cotton, it offers a soft, breathable, and comfortable fit perfect for everyday wear.",
//   //   features: [
//   //     "Material: 100% high-quality cotton",
//   //     "Fit: Relaxed and unisex sizing",
//   //     "Design: Durable, fade-resistant cat and taiyaki graphic",
//   //     "Perfect for casual outings, cozy days, or gifting to fellow cat enthusiasts",
//   //   ],
//   // },
// ];

export default function NewArrivalSec() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  // build unique category tabs
  const categories = useMemo<string[]>(() => {
    const catSet = new Set<string>(productArrival.flatMap((p) => p.categories));
    const list = Array.from(catSet);
    // ensure ALL is first
    const idx = list.indexOf("ALL");
    if (idx > -1) {
      list.splice(idx, 1);
      list.unshift("ALL");
    }
    return list;
  }, []);

  // filter products by selected category
  const filteredProducts = useMemo<any[]>(
    () =>
      productArrival.filter(
        (p) => activeCategory === "ALL" || p.categories.includes(activeCategory)
      ),
    [activeCategory]
  );

  return (
    <section className="main-container py-10 flex flex-col items-center gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">New Arrivals</h1>
        <p className="text-textColor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition 
                ${
                  isActive
                    ? "bg-red-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
}
