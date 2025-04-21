import { ProductCard } from "@/components";

export default function BagPage() {
  const productArrival = [
    {
      img: "/bag/Picture10.png",
      name: "bag",
    },

    {
      img: "/bag/Picture65.png",
      name: "bag",
    },
    {
      img: "/bag/Picture66.png",
      name: "bag",
    },
    {
      img: "/bag/Picture67.png",
      name: "bag",
    },
    {
      img: "/bag/Picture68.png",
      name: "bag",
    },
    {
      img: "/bag/Picture69.png",
      name: "bag",
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
