import { ProductCard } from "@/components";

export default function SofaPage() {
  const productArrival = [
    {
      img: "/Picture2.png",
      name: "White Sofa",
    },
    {
      img: "/furniture/Picture10.png",
      name: "Brown Sofa",
    },
    {
      img: "/furniture/Picture11.png",
      name: "Gray Sofa",
    },
    {
      img: "/furniture/Picture12.png",
      name: "Long White Sofa",
    },
    {
      img: "/furniture/Picture13.png",
      name: "Green Sofa",
    },
    {
      img: "/furniture/Picture14.png",
      name: "Dark Blue Sofa",
    },
    {
      img: "/furniture/Picture15.png",
      name: "Light Blue Sfa",
    },
    {
      img: "/furniture/Picture16.png",
      name: "Sofa",
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
