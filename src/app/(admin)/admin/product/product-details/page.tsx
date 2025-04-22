"use client";
import { IoStopwatchOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";

export default function ProductDetails() {
  const ProductArr = [
    {
      image: "./instant_snacks/s1.avif",
    },
    {
      image: "./instant_snacks/s2.avif",
    },
    {
      image: "./instant_snacks/s3.avif",
    },
    {
      image: "./instant_snacks/s4.avif",
    },
  ];
  const swiftitArr = [
    {
      image: "/delivery.avif",
      title: "Superfast Delivery",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you.",
    },
    {
      image: "/money.avif",
      title: "Best Prices & Offers",
      description:
        "Best price destination with offers directly from the manufacturers.",
    },
    {
      image: "/cart.avif",
      title: "Wide Assortment",
      description:
        "Choose from 5000+ products across food, personal care, household & other categories.",
    },
  ];
  const ProductDetailsArr = [
    {
      title: "Flavour",
      des: "Peprika & Exotic Spcies",
    },
    {
      title: "FSSAI License",
      des: "8990788757646",
    },
    {
      title: "Key Features",
      des: `Gourmet potato chips
Made from thinly sliced potatoes
Cooked to golden perfection
Packed with fiery flavour of crushed paprika and exotic spices
Crispy snack with a satisfying crunc`,
    },
    {
      title: "Type",
      des: "Potato Chips",
    },
    {
      title: "Shelf Life",
      des: "18 months",
    },
    {
      title: "Return Policy",
      des: `This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.
In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.`,
    },
    {
      title: "Unit",
      des: "113 g",
    },
    {
      title: "Manufacturer's Name and Address",
      des: "Excelus FoodBev Pvt. Ltd. Gat # 142, Pali Budruk, Tal. Khalapur, Raigad, Maharashtra 410206, India",
    },
    {
      title: "Marketer’s Name and Address",
      des: "Excelus FoodBev Pvt. Ltd. Gat # 142, Pali Budruk, Tal. Khalapur, Raigad, Maharashtra 410206, India",
    },
    {
      title: "Country of Origin",
      des: "India",
    },
    {
      title: "Customer Care Details",
      des: "hello@logoipsum.com",
    },
    {
      title: "Seller",
      des: "KEMEXEL ECOMMERCE PRIVATE LIMITED",
    },
    {
      title: "Seller FSSAI",
      des: "7846589439",
    },
    {
      title: "Disclaimer",
      des: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more or different information. It is recommended not to solely rely on the information presented.",
    },
  ];
  return (
    <aside className="bg-gray-50">
      <section className="main-container py-10 flex items-start lg:flex-row flex-col gap-10 w-full">
        <section className="w-full flex flex-col gap-5 overflow-y-auto">
          <div className=" flex md:flex-row flex-col gap-5">
            <div className="flex justify-center items-center ">
              <img
                src="/instant_snacks/s7.avif"
                alt="image"
                className="w-[40rem] h-auto rounded-lg"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-5">
              {ProductArr?.map((curElm, i) => (
                <div key={i} className=" shadow rounded-lg">
                  <img
                    src={curElm?.image}
                    alt="image"
                    className="w-20 h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-semibold">Product Details</h1>
            {ProductDetailsArr?.map((curElm, i) => (
              <div key={i}>
                <h1>{curElm?.title}</h1>
                <p className="text-tertiary">{curElm?.des}</p>
              </div>
            ))}
          </div>
        </section>

        <section className=" w-full lg:sticky lg:top-0 self-start flex flex-col gap-8">
          <p className="text-sm text-secondary">
            Home / Snacks & Munchies / Kettle Studio Crushed Peprika with Exotic
            Spices Potato
          </p>
          <h1 className="text-2xl font-semibold lg:w-2/3 w-full ">
            Kettle Studio Crushed Peprika with Exotic Spices Potato Chips
          </h1>
          <div className="flex items-center bg-secondary/10 py-1 px-3 w-fit rounded-lg gap-2">
            <IoStopwatchOutline />
            <span className="text-xs font-semibold">8 MINS</span>
          </div>

          <div className="w-full h-[0.01rem] bg-gray-200"></div>
          <div className="flex items-center justify-between">
            <div>
              <small className="text-tertiary font-semibold">113 g</small>
              <div className="flex items-center gap-2">
                <p>MRP</p>
                <h1 className="flex items-center font-semibold">
                  <MdCurrencyRupee />
                  99
                </h1>
              </div>
              <small>(Inclusive of all taxes)</small>
            </div>

            <button className="border rounded-lg text-sm py-2 px-5 font-semibold border-secondary text-secondary">
              ADD
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="font-semibold">Why shop from swiftit?</h1>
            <div className="flex flex-col gap-5">
              {swiftitArr?.map((curElm, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="flex justify-center items-center rounded-full bg-gray-100 overflow-hidden">
                    <img
                      src={curElm?.image}
                      alt="image"
                      className="w-20 h-auto "
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="font-semibold">{curElm?.title}</p>
                    <p className="text-tertiary">{curElm?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </aside>
  );
}
