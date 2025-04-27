import { ProductCard } from "@/components";

export const productArrival = [
  {
    id: "1",
    img: "/Picture1.png",
    name: "Red Chair",
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

export default function FurniturePage() {
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
