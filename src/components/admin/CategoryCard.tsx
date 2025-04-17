/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CustomDialog } from "@/components/core";
import { CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { AddUpdateCategoryDialog } from ".";

export default function CategoryCard({
  curCategory,
  mutate,
}: {
  curCategory: any;
  mutate?: () => void;
}) {
  const [openCategoryModel, setCategoryModel] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  // const { push } = useRouter();
  // console.log(curCategory);
  const router = useRouter();

  return (
    <div className="admin-bg relative overflow-hidden p-5 flex flex-col gap-5 admin-card">
      {removeLoading ? (
        <div className="absolute backdrop-blur-sm flex items-center justify-center z-30 inset-0 w-full h-full">
          <CircularProgress className="!text-youtube" size={26} />
        </div>
      ) : null}
      <div className="absolute right-3 bottom-6 w-5 h-24 z-10 rotate-45 rounded-full bg-instagram/5"></div>
      <div className="absolute -right-2 bottom-3 w-5 h-16 z-10 rotate-45 rounded-full bg-instagram/5"></div>
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
          curCategory={curCategory}
          mutate={mutate}
        />
      </CustomDialog>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-text font-medium">
            {curCategory?.CategoryName}
          </h1>
          <h1 className="text-primary-text font-medium">
            {curCategory?.CategoryID}
          </h1>
          <div className="text-xs opacity-70">
            Created At :{" "}
            {dayjs(curCategory?.createdAt?.["$date"]).format(
              "DD MMM YYYY, hh:mm A"
            )}
          </div>
          <p></p>
        </div>
        <div className="flex items-center justify-end gap-2 pt-3">
          <div
            onClick={() =>
              router.push(
                `/admin/category/subcategory?${curCategory?.CategoryID}`
              )
            }
            className="bg-tertiary cursor-pointer z-20 text-white h-8 w-8 flex items-center justify-center rounded-full"
          >
            <MdOutlinePlaylistAdd className="text-xl" />
          </div>
          <div
            onClick={() => setCategoryModel(true)}
            className="bg-primary cursor-pointer z-20 text-white h-8 w-8 flex items-center justify-center rounded-full"
          >
            <AiFillEdit className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
