/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Cancel, CloudUpload } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { ChangeEventHandler } from "react";

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  image?: any;
  className?: string;
  setIsImage?: any;
  defaultImage?: string;
};

export default function UploadImage({
  onChange,
  image,
  className,
  setIsImage,
  defaultImage,
}: Props) {
  return (
    <div
      className={`${className} overflow-hidden w-full min-h-[12rem]  ${
        image
          ? "bg-themeGray shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
          : "bg-transparent border border-dashed border-primary"
      } text-white relative grid place-content-center rounded-md cursor-pointer`}
    >
      {image ? (
        <div className="relative h-60 w-full object-cover">
          <img
            src={image ? URL?.createObjectURL(image) : ""}
            className="w-full object-cover h-full"
            alt="image"
          />
        </div>
      ) : defaultImage ? (
        <img className="relative h-60 w-full object-cover" src={defaultImage} />
      ) : (
        <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
          <CloudUpload className="text-5xl text-blue-600" />
          <small className="text-primary">Upload Photos</small>
        </div>
      )}

      {image && (
        <span className="absolute top-0 z-50 cursor-pointer right-0">
          <Tooltip title="Clear">
            <IconButton onClick={() => setIsImage(null)}>
              <Cancel className="text-white" />
            </IconButton>
          </Tooltip>
        </span>
      )}

      <input
        type="file"
        className="absolute top-0 left-0 w-full h-full z-10 opacity-0 "
        onChange={onChange}
      />
    </div>
  );
}
