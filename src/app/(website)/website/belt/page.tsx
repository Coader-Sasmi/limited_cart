import { ProductCard } from "@/components";

export default function FootwearPage() {
  const productArrival = [
    {
      img: "/belt/Picture7.png",
      name: "Belt",
    },

    {
      img: "/belt/Picture8.png",
      name: "Belt",
    },
    {
      img: "/belt/Picture9.png",
      name: "Belt",
    },
    {
      img: "/belt/Picture73.png",
      name: "Belt",
    },
    {
      img: "/belt/Picture74.png",
      name: "Belt",
    },
    {
      img: "/belt/Picture75.png",
      name: "Belt",
    },
    {
      img: "/belt/Picture76.png",
      name: "Belt",
    },
    {
      img: "/belt/Picture77.png",
      name: "Belt",
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
