"use client";

export default function SupportSec() {
  const supportArr = [
    {
      img: "/support1.png",
      title: "High Quality",
      des: "crafted from top materials",
    },
    {
      img: "/support2.png",
      title: "Warrany Protection",
      des: "Over 2 years",
    },
    {
      img: "/support3.png",
      title: "Free Shipping",
      des: "Order over 150 $",
    },
    {
      img: "/support4.png",
      title: "24 / 7 Support",
      des: "Dedicated support",
    },
  ];
  return (
    <section className="shadow-xl">
      <div className="main-container flex justify-center items-center ">
        <div className="lg:p-16 md:p-8 p-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {supportArr.map((logo, i) => (
            <div key={i} className="flex gap-3 items-center">
              <img src={logo.img} alt="logo" className="h-auto w-auto" />
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">{logo.title}</h1>
                <p>{logo.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
