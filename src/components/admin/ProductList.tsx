/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Tooltip } from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";

type LeaveListProps = {
  i: number;
  data: any;
};
export default function ProductList({ data, i }: LeaveListProps) {
  console.log(data);
  return (
    <>
      <div
        className={`grid items-center grid-cols-12 p-3 h-16 text-sm ${
          i % 2 === 0 ? "" : "bg-tertiary/10 border-y"
        }`}
      >
        <div className={`col-span-1 text-center`}>{i + 1}</div>
        <div className="col-span-2 text-center">{data?.ProductName}</div>

        <p className="text-sm  text-center col-span-1">{data?.UnitPrice} </p>

        <div className={`col-span-2 flex justify-center items-center`}>
          {data?.CategoryName}
        </div>
        <div className="col-span-2 line-clamp-1 text-center">{data?.image}</div>
        <div className={`col-span-3 text-xs text-center`}>
          {data?.ProductDescription}
        </div>
        <div className={`col-span-1 text-xl text-center`}>
          <Tooltip title="view details ">
            {/* <Link href={`/admin/product/product-details?id=${data?.ProductId}`}> */}
            <AiOutlineEye />
            {/* </Link> */}
          </Tooltip>
        </div>
      </div>
    </>
  );
}
