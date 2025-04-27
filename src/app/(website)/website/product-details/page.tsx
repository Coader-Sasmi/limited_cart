/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/website/product-details.tsx
"use client";
import { allCollections, Product } from "@/components/utils/productCollections";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ProductDetailsPage />
    </Suspense>
  );
}

function ProductDetailsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? ""; // e.g. "jackets"
  const idParam = searchParams.get("id") ?? ""; // e.g. "3"

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (!category || !idParam) return;

    // grab the right array (or empty if invalid)
    const collection = allCollections[category] ?? [];

    // find by ID
    const found = collection.find((p) => p.id === idParam) ?? null;
    setProduct(found);
  }, [category, idParam]);

  if (!category || !idParam) {
    return (
      <div className="main-container py-8">
        <p>Waiting for product selection…</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="main-container py-8">
        <p>Product not found in “{category}.”</p>
      </div>
    );
  }

  return (
    <div className="main-container py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Image gallery */}
        <div className="flex md:flex-row flex-col w-full lg:w-1/2">
          <div className="flex md:flex-col gap-3 md:space-y-3 md:mr-4 overflow-auto">
            {product.images.map((src: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`border rounded overflow-hidden hover:scale-105 transition ${
                  selectedImage === idx ? "border-black" : "border-gray-300"
                }`}
              >
                <img
                  src={src}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-16 h-16"
                />
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center w-full">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className=" w-96 h-auto rounded"
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#017B7A] mb-2">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center space-x-2 text-xs md:text-sm text-gray-500 uppercase mb-6">
              <span>{product.sales.toLocaleString()} SALES</span>
              <span>·</span>
              <span>{product.reviewsCount.toLocaleString()} REVIEWS</span>
              <span>·</span>
              <span>{product.rating.toFixed(1)} ★</span>
            </div>

            <h2 className="uppercase text-sm font-semibold text-gray-700 mb-2">
              Description
            </h2>
            <p className="text-gray-700 mb-6 text-sm md:text-base">
              {product.description}
            </p>

            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Key Features:
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 text-sm md:text-base">
              {product.features.map((feat: string, i: number) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-3 border border-black text-black bg-white rounded hover:bg-gray-100 transition">
              Add to Cart
            </button>
            <button className="flex-1 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
