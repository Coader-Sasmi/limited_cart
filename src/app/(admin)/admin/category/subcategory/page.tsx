/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AddUpdateSubCategory, SubCategoryCard } from "@/components";
import { CustomDialog } from "@/components/core";
import useSwr from "@/components/hooks/useSwr";
import { IconButton, Tooltip } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";

function SubCategory() {
  const searchParams = useSearchParams();
  const ID = searchParams.get("ID");
  console.log(ID);
  // const { query } = useRouter();
  // const searchParams = useSearchParams();
  // const ID = searchParams.get("id");
  // console.log(ID);
  // const { role } = useRouter().query;
  const [sortingValue, setSortingValue] = useState("");
  const [searchAttribute, setSearchAttribute] = useState("");
  // const deferredValue = useDeferredValue(searchAttribute?.trim());
  const [openAddUpdateSubCategoryModel, setOpenAddUpdateSubCategoryModel] =
    useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [limitPerPage, setLimitPerPage] = useState(20);

  // let url = `SubCategory?departmentId=${query?.SubCategory}&perPage=${limitPerPage}&pageNo=${currentPage}&isTotalData=true`;
  // deferredValue?.length > 0 && (url += `&search=${deferredValue}`);
  // sortingValue && (url += `&${sortingValue}=true`);

  const { data, isValidating, mutate } = useSwr<{
    data: any[];
  }>(`search/categorysub/${ID}`);
  console.log(data);

  const subCatArr = [
    { name: "Sectional Sofa" },
    { name: "Sleeper Sofa" },
    { name: "Loveseat" },
    { name: "Recliner Sofa" },
    { name: "Chesterfield Sofa" },
  ];

  const handleResetAll = () => {
    setSortingValue("");
    setSearchAttribute("");
    setCurrentPage(0);
    setLimitPerPage(20);
  };
  const handleRefresh = () => mutate();

  // const pageArray = [
  //   {
  //     pageName: "Department",
  //     pagePath: `/panel/${role}/department`,
  //   },
  //   {
  //     pageName: "SubCategory",
  //     pagePath: "",
  //   },
  // ];

  return (
    <>
      <CustomDialog
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
      </CustomDialog>
      <section className="admin-container flex flex-col admin-gap">
        {/* <BreadCrumb pathArr={pageArray} heading="SubCategory" /> */}
        <div className="admin-bg rounded-lg w-full grid grid-cols-12 gap-4">
          {/* <div className="lg:col-span-4 md:col-span-5 col-span-12">
            <CustomSearch
              placeholder="Search SubCategory..."
              setSearchAttribute={setSearchAttribute}
              searchAttribute={searchAttribute}
            />
          </div> */}
          <div className="lg:col-span-4 md:col-span-3 col-span-12 flex justify-end md:justify-start items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight uppercase ">
              sub category
            </h1>

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
            <Tooltip title="Add Sub Category">
              <div className="flex justify-center items-center text-xl common-transition text-primary w-10 h-10 rounded-md border bg-primary/5">
                <BiAddToQueue
                  onClick={() => setOpenAddUpdateSubCategoryModel(true)}
                />
              </div>
            </Tooltip>
          </div>
        </div>
        {/* <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 admin-gap">
          {data?.map((data: any, i: number) => (
            <SubCategoryCard key={i} curSubCategory={data} mutate={mutate} />
          ))}
        </div> */}

        {isValidating ? (
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 admin-gap">
            {[...Array(18)].map((item, i) => (
              <SubCategorySkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {data?.data && data?.data?.length > 0 ? (
              <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 admin-gap">
                {subCatArr?.map((data: any, i: number) => (
                  <SubCategoryCard
                    key={i}
                    curSubCategory={data}
                    mutate={mutate}
                  />
                ))}
              </div>
            ) : (
              <>
                <p>No Sub Category Found</p>
                {/* <NoDataFound title="No Sub Category Found" /> */}
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="main-container py-10">
          <SubCategory />
        </section>
      </Suspense>
    </>
  );
}

const SubCategorySkeleton = () => {
  return (
    <div className="w-full admin-card p-3 md:p-5 min-h-[8rem]">
      <div className="w-full flex justify-between flex-col h-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="w-20 h-4 rounded-md skeleton"></div>
            <div className="w-6 h-6 rounded-md skeleton"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 rounded-md skeleton"></div>
            <div className="w-4/5 h-3 rounded-md skeleton"></div>
          </div>
        </div>
        <div className="w-full justify-end gap-4 flex pt-3">
          <div className="w-10 h-10 rounded-full skeleton items-end"></div>
          <div className="w-10 h-10 rounded-full skeleton items-end"></div>
        </div>
      </div>
    </div>
  );
};
