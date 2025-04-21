import { ProductCard } from "@/components";

export default function FurniturePage() {
  const productArrival = [
    {
      img: "/Picture2.png",
      name: "White SOfa",
    },
    {
      img: "/Picture1.png",
      name: "Chair",
    },
    {
      img: "/furniture/Picture10.png",
      name: "Chair",
    },
    {
      img: "/furniture/Picture11.png",
      name: "Chair",
    },
    {
      img: "/furniture/Picture12.png",
      name: "Chair",
    },
    {
      img: "/furniture/Picture13.png",
      name: "Chair",
    },
    {
      img: "/furniture/Picture14.png",
      name: "Chair",
    },
    {
      img: "/furniture/Picture15.png",
      name: "Chair",
    },
    {
      img: "/furniture/Picture16.png",
      name: "Chair",
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
