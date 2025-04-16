/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

type LeaveListProps = {
  i: number;
  data: any;
};
export default function ProductList({ data, i }: LeaveListProps) {
  // console.log(data);
  return (
    <>
      <div
        className={`grid items-center grid-cols-12 p-3 h-16 text-sm ${
          i % 2 === 0 ? "" : "bg-tertiary/10 border-y"
        }`}
      >
        <div className={`col-span-1 text-center`}>{i + 1}</div>
        <div className="col-span-2 ">{data?.name}</div>

        <p className="text-sm  text-center col-span-1">{data?.price} </p>

        <div className={`col-span-2 flex justify-center items-center`}>
          {data?.category}
        </div>
        <div className="col-span-3 line-clamp-1 text-center">{data?.image}</div>
        <div className={`col-span-3 text-xs`}>{data?.description}</div>
      </div>
    </>
  );
}
