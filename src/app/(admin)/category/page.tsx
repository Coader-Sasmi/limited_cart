/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { AddUpdateCategoryDialog, CategoryCard } from "@/components";
import { CustomDialog } from "@/components/core";
import useSwr from "@/components/hooks/useSwr";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
// import { Category } from "@mui/icons-material";

export default function AllDepartment() {
  const [sortingValue, setSortingValue] = useState("");
  const [searchAttribute, setSearchAttribute] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [limitPerPage, setLimitPerPage] = useState(20);
  const [openCategoryModel, setCategoryModel] = useState(false);

  const { data, isValidating, mutate } = useSwr<{
    data: any[];
  }>(`category`);

  const handleResetAll = () => {
    setSortingValue("");
    setSearchAttribute("");
    setCurrentPage(0);
    setLimitPerPage(20);
  };
  const handleRefresh = () => mutate();

  return (
    <section className="admin-container flex flex-col admin-gap">
      <CustomDialog
        sx={{
          borderRadius: 30,
        }}
        maxWidth="xs"
        paperProps={{
          style: {
            borderRadius: 18,
          },
        }}
        open={openCategoryModel}
        onClose={() => setCategoryModel(false)}
      >
        <AddUpdateCategoryDialog
          setCategoryModel={setCategoryModel}
          mutate={mutate}
        />
      </CustomDialog>
      {/* <BreadCrumb pathArr={[]} heading="Departments" /> */}
      <div className="admin-bg rounded-lg w-full grid grid-cols-12 gap-4">
        {/* <div className="lg:col-span-4 md:col-span-5 col-span-12">
            <CustomSearch
              placeholder="Search Department..."
              setSearchAttribute={setSearchAttribute}
              searchAttribute={searchAttribute}
            />
          </div> */}
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
              searchAttribute?.length <= 0 &&
              sortingValue?.length <= 0 &&
              currentPage === 0 &&
              limitPerPage === 20
            }
            onClick={handleResetAll}
            className={`px-2 py-2 rounded-md text-xs  ${
              searchAttribute?.length <= 0 &&
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
        <div className="lg:col-span-4 col-span-12 flex gap-4  justify-end items-center">
          {/* <Pagination
              currentPage={currentPage}
              perPage={limitPerPage}
              setCurrentPage={setCurrentPage}
              totalCount={data?.totalCount!}
              setPerPage={setLimitPerPage}
              lastPage={!data?.haveNextPage}
            /> */}
          <Tooltip title="Add Category">
            <div className="flex justify-center items-center text-xl common-transition text-primary w-10 h-10 rounded-md border bg-primary/5">
              <BiAddToQueue onClick={() => setCategoryModel(true)} />
            </div>
          </Tooltip>
        </div>
      </div>

      {isValidating ? (
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 admin-gap">
          {[...Array(18)].map((item, i) => (
            <CategorySkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          {data?.data && data?.data?.length > 0 ? (
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 admin-gap">
              {data?.data?.map((data: any, i: number) => (
                <CategoryCard curCategory={data} key={i} mutate={mutate} />
              ))}
            </div>
          ) : (
            <>
              <p>No Department Found</p>
              {/* <NoDataFound title="No Department Found" /> */}
            </>
          )}
        </>
      )}
    </section>
  );
}

const CategorySkeleton = () => {
  return (
    <div className="w-full admin-card p-3 min-h-[7rem]">
      <div className="w-full flex justify-between flex-col h-full">
        <div className="flex flex-col gap-2">
          <div className="w-20 h-4 rounded-md skeleton"></div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 rounded-md skeleton"></div>
            {/* <div className="w-full h-3 rounded-md skeleton"></div> */}
          </div>
        </div>
        <div className="w-full justify-end gap-4 flex">
          <div className="w-9 h-9 rounded-lg skeleton items-end"></div>
          <div className="w-9 h-9 rounded-lg skeleton items-end"></div>
        </div>
      </div>
    </div>
  );
};
