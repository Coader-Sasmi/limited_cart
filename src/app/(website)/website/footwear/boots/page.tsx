import { ProductCard } from "@/components";
export const productArrival = [
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
    name: "Black Boots",
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
    name: "Black Boots",
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
];

export default function FootwearPage() {
  return (
    <section className="main-container py-10 flex flex-col justify-center items-center gap-8 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 w-full ">
        {productArrival?.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
