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
    </section>
  );
}
