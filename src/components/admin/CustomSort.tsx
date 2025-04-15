"use client";

import { InputField } from "@/components/core";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function CustomSort({
  setSortingValue,
  resetKey,
  sortingSchema,
}: {
  setSortingValue: Dispatch<SetStateAction<string>>;
  resetKey?: number;
  sortingSchema: {
    key: string | number;
    placeHolder?: string;
    name: string;
    type: string;
    value: string;
    initialValue: string;
    options: {
      value: string;
      label: string;
    }[];
  }[];
}) {
  const handleFilterApplied = (
    val: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (val) setSortingValue(val.target.value);
  };
  return (
    <div className="flex items-center gap-5 w-full">
      {sortingSchema.map((_, i) => (
        <div className="w-full" key={i}>
          <InputField
            id={0}
            InputProps={{
              style: {
                borderRadius: "10px",
                height: "3rem",
              },
            }}
            type={_?.type}
            name={_?.name}
            value={_?.value}
            onChange={(e) => handleFilterApplied(e)}
            placeholder={_?.placeHolder}
            options={_.options}
            key={resetKey}
          />
        </div>
      ))}
    </div>
  );
}
