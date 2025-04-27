/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/website/product-details.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
// import { productArrival } from "../jacket/page";
import { jacketProducts } from "@/components/utils/productCollections";

function ProductDetailsPage() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const [product, setProduct] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // if there's no id in the URL yet, bail out
    if (!idParam) return;

    // look up the product
    const found = jacketProducts.find((p: any) => p.id === idParam) ?? null;
    setProduct(found);
  }, [idParam]);

  if (!product) {
    return (
      <div className="main-container py-8">
        <p className="text-center">Loading… or product not found.</p>
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

// Wrap in Suspense if you really need it, otherwise you can export ProductDetailsPage directly
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="main-container py-10">
        <ProductDetailsPage />
      </section>
    </Suspense>
  );
}
