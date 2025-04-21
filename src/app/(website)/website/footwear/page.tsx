import { ProductCard } from "@/components";

export default function FootwearPage() {
  const productArrival = [
    {
      img: "/product_1.png",
      name: "Shiny Dress",
    },
    {
      img: "/product_2.png",
      name: "Long Dress",
    },
    {
      img: "/Picture3.png",
      name: "Shoes",
    },
    {
      img: "/footwear/Picture5.png",
      name: "Chair",
    },

    {
      img: "/footwear/Picture7.png",
      name: "Chair",
    },
    {
      img: "/footwear/Picture8.png",
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
