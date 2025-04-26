/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { CustomDrawer } from "../core";
import { NavArr, NavItem } from "./Navbar";

type CaseFixedProps = {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

export default function ResponsiveDrawer({
  openDrawer,
  setOpenDrawer,
}: CaseFixedProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [openSubItems, setOpenSubItems] = useState<Record<string, boolean>>({});

  const toggle = (title: string) =>
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));

  const toggleSub = (title: string) =>
    setOpenSubItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));

  return (
    <CustomDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
      drawerStyle="w-[75vw] md:w-[50vw] h-screen "
    >
      <section className="p-5">
        <div className="flex justify-end items-end text-2xl">
          <RxCross2 onClick={() => setOpenDrawer(false)} />
        </div>
        <div className="flex flex-col gap-2">
          {NavArr.map((item: NavItem) => (
            <div key={item.title}>
              {/* Main category */}
              <div className="flex justify-between items-center">
                <Link href={item.path ?? "#"}>
                  <p className="text-base font-medium">{item.title}</p>
                </Link>

                {item.subcategories && (
                  <button
                    onClick={() => toggle(item.title)}
                    aria-expanded={!!openItems[item.title]}
                    className="p-1 focus:outline-none"
                  >
                    <HiChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openItems[item.title] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Subcategories */}
              {item.subcategories && openItems[item.title] && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {item.subcategories.map((sub) => (
                    <div key={sub.title}>
                      <div className="flex justify-between items-center">
                        <Link href={sub.path ?? "#"}>
                          <p className="text-sm pl-2 py-1 hover:bg-gray-100 rounded">
                            {sub.title}
                          </p>
                        </Link>

                        {sub.innerSubcategories && (
                          <button
                            onClick={() => toggleSub(sub.title)}
                            aria-expanded={!!openSubItems[sub.title]}
                            className="p-1 focus:outline-none"
                          >
                            <HiChevronDown
                              className={`h-4 w-4 transition-transform ${
                                openSubItems[sub.title] ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Inner Subcategories */}
                      {sub.innerSubcategories && openSubItems[sub.title] && (
                        <div className="ml-6 mt-1 flex flex-col gap-1">
                          {sub.innerSubcategories.map((inner) => (
                            <Link key={inner.title} href={inner.path ?? "#"}>
                              <p className="text-xs pl-2 py-1 hover:bg-gray-100 rounded">
                                {inner.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </CustomDrawer>
  );
}
