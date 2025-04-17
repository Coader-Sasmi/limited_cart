/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SupplierList } from "@/components";
import useSwr from "@/components/hooks/useSwr";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

export interface Supplier {
  SupplierID: number;
  SupplierName: string;
  SupplierDescription: string;
  SupplierEmailId: string;
  SupplierPhone: string;
  // add any other fields here…
}

export default function SupplierPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [limitPerPage, setLimitPerPage] = useState(20);
  const [sortingValue, setSortingValue] = useState("");
  const { data, isValidating, mutate } = useSwr<{
    data: Supplier[];
  }>(`supplier`);
  console.log(data);

  const dataArray = data as unknown as Supplier[];
  const handleRefresh = () => mutate();

  // const sortingSchema = [
  //   {
  //     key: "2",
  //     placeHolder: "Select Category",
  //     name: "sort",
  //     type: "select",
  //     value: sortingValue,
  //     initialValue: "",
  //     options: [
  //       {
  //         label: "Electronics",
  //         value: "Electronics",
  //       },
  //       {
  //         label: "Computers",
  //         value: "Computers",
  //       },
  //       {
  //         label: "Accessories",
  //         value: "Accessories",
  //       },
  //       {
  //         label: "Wearables",
  //         value: "Wearables",
  //       },
  //     ],
  //   },
  // ];

  const handleResetAll = () => {
    setSortingValue("");
    setCurrentPage(0);
    setLimitPerPage(20);
  };

  // const supplierArr = [
  //   {
  //     SupplierName: "Supplier 1",
  //     SupplierDescription: "High-quality electronics supplier.",
  //     SupplierEmailId: "supplier1@example.com",
  //     SupplierPhone: "123-456-7890",
  //     SupplierAddress: "123 Main St, Cityville, Country",
  //   },
  //   {
  //     SupplierName: "Supplier 2",
  //     SupplierDescription: "Reliable industrial parts supplier.",
  //     SupplierEmailId: "supplier2@example.com",
  //     SupplierPhone: "234-567-8901",
  //     SupplierAddress: "456 Second St, Townsville, Country",
  //   },
  //   {
  //     SupplierName: "Supplier 3",
  //     SupplierDescription: "Organic produce supplier.",
  //     SupplierEmailId: "supplier3@example.com",
  //     SupplierPhone: "345-678-9012",
  //     SupplierAddress: "789 Third St, Village, Country",
  //   },
  //   {
  //     SupplierName: "Supplier 4",
  //     SupplierDescription: "Top-tier fashion materials.",
  //     SupplierEmailId: "supplier4@example.com",
  //     SupplierPhone: "456-789-0123",
  //     SupplierAddress: "101 Fourth Ave, Metropolis, Country",
  //   },
  //   {
  //     SupplierName: "Supplier 5",
  //     SupplierDescription: "Quality paper and printing supplies.",
  //     SupplierEmailId: "supplier5@example.com",
  //     SupplierPhone: "567-890-1234",
  //     SupplierAddress: "202 Fifth Blvd, Capital City, Country",
  //   },
  // ];

  return (
    <>
      {/* <CustomDialog
            open={openAddUpdateSubCategoryModel}
            onClose={() => setOpenAddUpdateSubCategoryModel(false)}
            sx={{
              borderRadius: 30,
            }}
            maxWidth="sm"
            paperProps={{
              style: {
                borderRadius: 18,
              },
            }}
          >
            <AddUpdateSubCategory
              mutate={mutate}
              subCategoryModelClose={() => setOpenAddUpdateSubCategoryModel(false)}
            />
          </CustomDialog> */}
      <section className="admin-container flex flex-col admin-gap">
        <div className="admin-bg rounded-lg w-full grid grid-cols-12 items-center gap-4">
          {/* <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <CustomSort
            setSortingValue={setSortingValue}
            sortingSchema={sortingSchema}
          />
        </div> */}

          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex  admin-gap">
            <div className="col-span-12 md:col-span-12 lg:col-span-9 flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <div className="flex items-center gap-3 order-2 md:order-1"></div>
              <h1 className="text-2xl font-semibold tracking-tight uppercase">
                Supplier
              </h1>

              <div className="lg:col-span-4 md:col-span-3 col-span-12 flex justify-end md:justify-start items-center gap-2">
                <IconButton
                  className={`!text-instagram !rounded-md border bg-primary/5`}
                  onClick={handleRefresh}
                  disabled={isValidating}
                >
                  <IoMdRefresh
                    className={`text-xl ${isValidating ? "animate-spin" : ""}`}
                  />
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
          {/* <div className="lg:col-span-4 md:col-span-12 col-span-12 flex gap-2 justify-end items-center ">
          <Pagination
            currentPage={currentPage}
            perPage={limitPerPage}
            setCurrentPage={setCurrentPage}
            totalCount={productArr?.length}
            setPerPage={setLimitPerPage}
            lastPage={false}
          />
        </div> */}
        </div>
        <div className="max-w-full overflow-x-scroll scroll-bar-none">
          <div className="flex flex-col min-w-[55rem]">
            <div className=" grid grid-cols-12 text-sm font-semibold px-5 py-2 bg-primary/30 text-primary uppercase shadow-lg rounded-t-md items-center">
              <div className="col-span-1 text-center">id </div>
              <div className="col-span-2 text-center">Name</div>
              <div className="col-span-2 text-center">Description</div>
              <div className="col-span-2 text-center">EmailId</div>
              <div className="col-span-2 text-center">Phone</div>
              <div className="col-span-3 text-center">Address</div>
            </div>
            {dataArray?.length > 0 ? (
              <div className="w-full flex flex-col shadow-shadow-primary rounded-b-md ">
                {dataArray?.map((_: any, i: number) => (
                  <SupplierList key={i} i={i} data={_} />
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
    </>
  );
}
