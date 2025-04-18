import { IoStar } from "react-icons/io5";

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
      img: "/furniture/Picture9.jpg",
      name: "Chair",
    },
    {
      img: "/furniture/Picture10.jpg",
      name: "Chair",
    },
    {
      img: "/furniture/Picture11.png",
      name: "Chair",
    },
    {
      img: "/furniture/Picture12.jpg",
      name: "Chair",
    },
    {
      img: "/furniture/Picture13.jpg",
      name: "Chair",
    },
    {
      img: "/furniture/Picture14.jpg",
      name: "Chair",
    },
    {
      img: "/furniture/Picture15.jpg",
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
          <div key={i} className="flex flex-col gap-2 shadow-xl rounded-lg p-4">
            <img src={item.img} alt="image" className="w-auto h-60" />
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2>{item.name}</h2>
                  <small>Al Karam</small>
                </div>
                <div className="flex gap-2">
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                </div>
              </div>
              <small>(4.1k) Customer Reviews</small>
              <div className="flex justify-between">
                <h1>$95.50</h1>
                <small className="text-primary">Almost Sold Out</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
