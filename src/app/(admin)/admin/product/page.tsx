"use client";

import { CustomSort, Pagination, ProductList } from "@/components";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [limitPerPage, setLimitPerPage] = useState(20);
  const [sortingValue, setSortingValue] = useState("");
  const sortingSchema = [
    {
      key: "2",
      placeHolder: "Select Category",
      name: "sort",
      type: "select",
      value: sortingValue,
      initialValue: "",
      options: [
        {
          label: "Furniture",
          value: "Furniture",
        },
        {
          label: "Bags",
          value: "Bags",
        },
        {
          label: "Jacket",
          value: "Jacket",
        },
        {
          label: "Footwear",
          value: "Footwear",
        },
        {
          label: "Accessories",
          value: "Accessories",
        },
      ],
    },
  ];

  const handleResetAll = () => {
    setSortingValue("");
    setCurrentPage(0);
    setLimitPerPage(20);
  };

  const productArr = [
    {
      name: "Modern Sofa",
      price: "$799",
      category: "Furniture",
      image: "sofa.jpg",
      description:
        "A comfortable and stylish modern sofa perfect for any living room.",
    },
    {
      name: "Leather Messenger Bag",
      price: "$199",
      category: "Bags",
      image: "leather_messenger_bag.jpg",
      description:
        "A handcrafted leather bag ideal for work or casual outings.",
    },
    {
      name: "Winter Down Jacket",
      price: "$299",
      category: "Jacket",
      image: "winter_jacket.jpg",
      description:
        "A warm and durable jacket designed to withstand cold winters.",
    },
    {
      name: "Running Sneakers",
      price: "$129",
      category: "Footwear",
      image: "running_sneakers.jpg",
      description:
        "Lightweight and breathable sneakers for everyday running and training.",
    },
    {
      name: "Trendy Sunglasses",
      price: "$89",
      category: "Accessories",
      image: "sunglasses.jpg",
      description: "Modern and chic sunglasses to complete any outfit.",
    },
    {
      name: "Office Desk Chair",
      price: "$399",
      category: "Furniture",
      image: "office_chair.jpg",
      description:
        "An ergonomic desk chair providing comfort and support during long work hours.",
    },
  ];

  return (
    <section className="admin-container flex flex-col admin-gap">
      <div className="admin-bg rounded-lg w-full grid grid-cols-12 items-center gap-4">
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <CustomSort
            setSortingValue={setSortingValue}
            sortingSchema={sortingSchema}
          />
        </div>

        <div className="lg:col-span-4 md:col-span-6 col-span-12 flex  admin-gap">
          <div className="col-span-12 md:col-span-12 lg:col-span-9 flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <div className="flex items-center gap-3 order-2 md:order-1"></div>
            <div className="lg:col-span-4 md:col-span-3 col-span-12 flex justify-end md:justify-start items-center gap-2">
              <IconButton
                className={`!text-instagram !rounded-md border bg-primary/5`}
              >
                <IoMdRefresh className={`text-xl `} />
              </IconButton>

              <button
                disabled={
                  sortingValue?.length <= 0 &&
                  currentPage === 0 &&
                  limitPerPage === 20
                }
                onClick={handleResetAll}
                className={`px-2 py-2 rounded-md text-xs  ${
                  currentPage === 0 &&
                  sortingValue?.length <= 0 &&
                  limitPerPage === 20
                    ? "bg-pink-blue/5 text-pink-blue/40 cursor-not-allowed"
                    : "!text-pink-blue ripple bg-pink-blue/10"
                }`}
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-12 col-span-12 flex gap-2 justify-end items-center ">
          <Pagination
            currentPage={currentPage}
            perPage={limitPerPage}
            setCurrentPage={setCurrentPage}
            totalCount={productArr?.length}
            setPerPage={setLimitPerPage}
            lastPage={false}
          />
        </div>
      </div>
      <div className="max-w-full overflow-x-scroll scroll-bar-none">
        <div className="flex flex-col min-w-[55rem]">
          <div className=" grid grid-cols-12 text-sm font-semibold px-5 py-2 bg-primary/30 text-primary uppercase shadow-lg rounded-t-md items-center">
            <div className="col-span-1 text-center">id </div>
            <div className="col-span-2 text-center">name</div>
            <div className="col-span-1 text-center">price</div>
            <div className="col-span-2 text-center">category</div>
            <div className="col-span-3 text-center">image</div>
            <div className="col-span-3 text-center">description</div>
          </div>
          {productArr?.length ? (
            <div className="w-full flex flex-col shadow-shadow-primary rounded-b-md ">
              {productArr?.map((_, i) => (
                <ProductList key={i} i={i} data={_} />
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-md h-96 justify-center items-center">
              <h1 className="text-primary text-2xl font-bold">No Data</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
