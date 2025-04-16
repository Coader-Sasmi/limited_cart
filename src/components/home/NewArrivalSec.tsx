import { IoStar } from "react-icons/io5";

export default function NewArrivalSec() {
  const categoryName = [
    {
      name: "Men’s Fashion",
    },
    {
      name: "Women’s Fashion",
    },
    {
      name: "Women Accessories",
    },
    {
      name: "Men Accessories",
    },
    {
      name: "Discount Deals",
    },
  ];
  const productArrival = [
    {
      img: "./product_1.png",
      name: "Shiny Dress",
    },
    {
      img: "./product_2.png",
      name: "Long Dress",
    },
    {
      img: "./product_3.png",
      name: "Full Sweater",
    },
    {
      img: "./product_4.png",
      name: "White Dress",
    },
    {
      img: "./product_5.png",
      name: "Colorful Dress",
    },
    {
      img: "./product_6.png",
      name: "White Shirt",
    },
  ];
  return (
    <section className="main-container py-10 flex flex-col justify-center items-center gap-8 ">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-semibold">New Arrivals</h1>
        <p className="text-textColor text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
          <br /> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 w-full lg:w-2/3">
        {categoryName.map((item, i) => (
          <div key={i}>
            <p className="cursor-pointer bg-gray-100 rounded-lg text-center py-2 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:bg-primary hover:text-white">
              {item.name}
            </p>
          </div>
        ))}
      </div>
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
