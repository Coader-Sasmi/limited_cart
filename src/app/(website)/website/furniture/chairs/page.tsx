import { ProductCard } from "@/components";

export default function FurniturePage() {
  const productArrival = [
    {
      img: "/Picture1.png",
      name: "Red Chair",
    },
  ];

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
