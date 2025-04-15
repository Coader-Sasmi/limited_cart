/* eslint-disable prefer-const */
"use client";

import { Tooltip } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalCount,
  //   setPerPage,
  lastPage,
  perPage,
}: {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setPerPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  totalCount: number;
  lastPage: boolean;
}) {
  const handlePrePage = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (lastPage) return;
    setCurrentPage((prev) => prev + 1);
  };
  const handleJumpLastPage = () => {
    if (totalCount <= perPage || lastPage) return;
    let lastPageNo = Math.ceil(totalCount / perPage) - 1;
    setCurrentPage(lastPageNo);
  };

  return (
    <div className="flex items-center gap-3">
      <Tooltip title="First Page">
        <button
          onClick={() => setCurrentPage(0)}
          className={`px-1.5 py-1.5 rounded-md text-xl border border-instagram/20 ${
            currentPage === 0
              ? "bg-instagram/10 text-instagram cursor-not-allowed"
              : "!text-instagram ripple bg-instagram/10"
          }`}
        >
          <BiFirstPage />
        </button>
      </Tooltip>

      <Tooltip title="Previous Page">
        <button
          onClick={handlePrePage}
          className={`px-1.5 py-1.5 rounded-md text-xl border border-instagram/20  ${
            currentPage === 0
              ? "bg-instagram/10 text-instagram cursor-not-allowed"
              : "!text-instagram ripple bg-instagram/10"
          }`}
        >
          <MdKeyboardArrowLeft />
        </button>
      </Tooltip>
      <div className="text-sm font-medium ">
        {currentPage === 0 ? 1 : perPage * currentPage + 1}-
        {totalCount < perPage
          ? totalCount
          : currentPage === 0
          ? 1 * perPage
          : perPage * (currentPage + 1) > totalCount
          ? totalCount
          : currentPage === 0
          ? 1 * perPage
          : perPage * (currentPage + 1)}{" "}
        of {totalCount}
      </div>
      <Tooltip title="Next Page">
        <button
          onClick={handleNextPage}
          className={`px-1.5 py-1.5 rounded-md text-xl border border-instagram/20  ${
            lastPage
              ? "bg-instagram/10 text-instagram cursor-not-allowed"
              : "!text-instagram ripple bg-instagram/10"
          }`}
        >
          <MdKeyboardArrowRight />
        </button>
      </Tooltip>
      <Tooltip title="Last Page">
        <button
          onClick={() => handleJumpLastPage()}
          className={`px-1.5 py-1.5 rounded-md text-xl border border-instagram/20 ${
            totalCount <= perPage || lastPage
              ? "bg-instagram/10 text-instagram cursor-not-allowed"
              : "!text-instagram ripple bg-instagram/10"
          }`}
        >
          <BiLastPage />
        </button>
      </Tooltip>
    </div>
  );
}
