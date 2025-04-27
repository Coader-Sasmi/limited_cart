/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { productArrival } from "../utils/productCollections";
import ProductCard from "./ProductCard";

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
          <Link href={`${product.path}`} key={product.id}>
            <ProductCard item={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}
