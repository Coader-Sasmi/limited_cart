/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  AddUpdateSupplierDrawer,
  CustomDrawer,
  SupplierList,
} from "@/components";
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
  const [openAddUpdateSupplierDrawer, setOpenAddUpdateSupplierDrawer] =
    useState(false);
  const { data, isValidating, mutate } = useSwr<{
    data: Supplier[];
  }>(`supplier`);
  // console.log(data);

  const dataArray = data as unknown as Supplier[];
  const handleRefresh = () => mutate();

  const handleResetAll = () => {
    setSortingValue("");
    setCurrentPage(0);
    setLimitPerPage(20);
  };

  return (
    <>
      <CustomDrawer
        open={openAddUpdateSupplierDrawer}
        onClose={() => setOpenAddUpdateSupplierDrawer(false)}
        anchor="right"
        drawerStyle="w-[75vw] md:w-[30vw] h-screen "
      >
        <AddUpdateSupplierDrawer
          mutate={mutate}
          setOpenAddUpdateSupplierDrawer={() =>
            setOpenAddUpdateSupplierDrawer(false)
          }
        />
      </CustomDrawer>
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
          <div className="lg:col-span-4 md:col-span-12 col-span-12 flex gap-2 justify-end items-center ">
            {/* <Pagination
            currentPage={currentPage}
            perPage={limitPerPage}
            setCurrentPage={setCurrentPage}
            totalCount={productArr?.length}
            setPerPage={setLimitPerPage}
            lastPage={false}
          /> */}
            {/* <Tooltip title="Add Supplier">
              <div className="flex cursor-pointer justify-center items-center text-xl common-transition text-primary w-10 h-10 rounded-md border bg-primary/5">
                <BiAddToQueue
                  onClick={() => setOpenAddUpdateSupplierDrawer(true)}
                />
              </div>
            </Tooltip> */}
          </div>
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
