/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { CustomDialog } from "@/components/core";
import { CircularProgress, Tooltip } from "@mui/material";
import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { AddUpdateSubCategory } from ".";

const DesignationCard = ({
  curSubCategory,
  mutate,
}: {
  curSubCategory: any;
  mutate?: () => void;
}) => {
  //   const { query } = useRouter();

  const [openAddUpdateSubCategoryModel, setOpenAddUpdateSubCategoryModel] =
    useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  return (
    <div className="admin-card relative flex flex-col overflow-hidden">
      {/* 
      <aside className="admin-container">
        <RoleWisePageAccess
          open={openModule}
          onClose={() => setOpenModule(false)}
        />
      </aside> */}
      {removeLoading ? (
        <div className="absolute backdrop-blur-sm flex items-center justify-center z-30 inset-0 w-full h-full">
          <CircularProgress className="!text-youtube" size={26} />
        </div>
      ) : null}
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
          curSubCategory={curSubCategory}
        />
      </CustomDialog>
      <Tooltip title="Assign Module">
        <div
          // onClick={() => {
          //   setOpenModule(true);
          // }}
          className="absolute right-0 top-0 p-2 border rounded-bl-lg cursor-pointer"
        >
          <MdAssignmentAdd className="text-secondary text-xl" />
        </div>
      </Tooltip>
      <p className="text-primary-text font-medium text-lg">
        {curSubCategory?.title}
      </p>
      <div className="flex text-sm items-center gap-2">
        Dept :{" "}
        <span className="px-2 py-1 text-[10px] leading-3 bg-secondary text-white rounded-xl">
          {curSubCategory?.departmentId?.title}
        </span>
      </div>
      <div className="flex text-sm items-center gap-2">
        Designation Level :{" "}
        <span className="font-medium text-secondary">
          {curSubCategory?.level}
        </span>
      </div>
      {/* <div className="text-xs flex gap-1  items-center">
        ID :
        <CopyClipboard value={curSubCategory?._id?.$oid} />
      </div> */}

      <div className="flex gap-2 pt-3 w-full justify-end">
        <Tooltip title="Edit">
          <div
            onClick={() => setOpenAddUpdateSubCategoryModel(true)}
            className="h-10 w-10 cursor-pointer hover:scale-105 ease-in-out transition-all duration-200 hover:shadow-xl rounded-full bg-gradient-to-r from-blue-800 to-blue-600 flex justify-center items-center text-lg font-semibold hover:from-blue-600 hover:to-blue-800"
          >
            <TbEdit className="!text-white" />
          </div>
        </Tooltip>
        {/* 
        {query?.designation ? (
          <Tooltip title="Employee">
            <Link
              href={`/panel/${query?.role}/department/designation/${query?.designation}/employee/${curSubCategory?._id?.$oid}`}
            >
              <div className="h-10 w-10 cursor-pointer hover:scale-105 ease-in-out transition-all duration-200 hover:shadow-xl rounded-full bg-gradient-to-r from-green-800 to-green-600 flex justify-center items-center text-lg font-semibold hover:from-green-600 hover:to-green-800">
                <BsPersonVcard className="!text-white" />
              </div>
            </Link>
          </Tooltip>
        ) : null} */}
      </div>
    </div>
  );
};
export default DesignationCard;
