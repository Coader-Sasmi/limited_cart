"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineInformationCircle, HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { ResponsiveNav } from "..";

export const NavArr = [
  { title: "Home", path: "/" },
  { title: "Furniture", path: "/website/furniture" },
  { title: "Footwear", path: "/website/footwear" },
  { title: "Bags", path: "/website/bag" },
  { title: "Jacket", path: "/website/jacket" },
  { title: "Accessories", path: "/website/accessories" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isActive = (menuPath: string) =>
    pathname === menuPath || pathname.startsWith(`${menuPath}/`);
  return (
    <nav
      className={`sticky top-0 z-[999] transition-all duration-100 ease-in-out border-b `}
    >
      <ResponsiveNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <section className="bg-tertiary">
        <div className="main-container py-2">
          <div className="flex items-center justify-end gap-2">
            <HiOutlineInformationCircle className="text-white" />
            <small className="text-white">Need Help</small>
          </div>
        </div>
      </section>
      <aside className="bg-secondary">
        <section className="main-container items-center justify-between py-4 lg:flex w-full">
          <div className="flex items-center justify-between w-full ">
            <Link href="/">
              <img
                src="/main_logo.png"
                alt="main_logo"
                className="lg:h-[2.8rem] h-10 w-auto cursor-pointer"
              />
            </Link>
            <div className="border-2 border-gray-700 px-1 rounded-md text-3xl lg:hidden block">
              <HiOutlineMenuAlt3
                onClick={() => setOpenDrawer(true)}
                className="rotate-180"
              />
            </div>
          </div>
          <div className="border lg:flex md:justify-between items-center rounded-md p-2 w-full hidden bg-white">
            <input
              type="text"
              placeholder="Search here..."
              className="pl-2 w-full outline-none "
              aria-label="Search here"
            />
            <BiSearch className="text-xl" />
          </div>
          <div className="lg:flex gap-5 hidden w-full justify-end items-end">
            <div className="bg-white p-2 rounded-md flex items-center gap-2">
              <IoCartOutline />
              <small>Cart</small>
              <div className="bg-primary rounded-full  h-4 w-4 flex justify-center items-center ">
                <small className="text-white font-semibold">2</small>
              </div>
            </div>
            <div className="bg-white p-2 rounded-md flex items-center gap-2">
              {/* <Link href="/login"> */}
              <img src="/Profile.png" alt="profile" className="w-5 h-auto" />
              {/* </Link> */}
            </div>
          </div>
        </section>
      </aside>
      <section className="main-container bg-white flex gap-8 py-3 items-center justify-between w-full">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 py-1 px-4 border rounded-md">
            <AiOutlineMenu />
            <p className="whitespace-nowrap">All Categories</p>
          </div>
          <div className="lg:flex gap-8 py-3 hidden">
            {NavArr?.map((curElm, i) => (
              <div key={i} className={isActive(curElm.path) ? "active" : ""}>
                <Link href={curElm?.path}>
                  <p
                    className={`${
                      curElm?.path === pathname ? "text-primary" : ""
                    }`}
                  >
                    {curElm?.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex gap-8">
          <div className="flex">
            <p className="text-gray-500">
              Contact: <span className="text-black">{`(808) 555-0222`}</span>{" "}
            </p>
          </div>
          <button className="whitespace-nowrap bg-primary rounded-lg text-white py-1 px-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            Sign Up
          </button>
        </div>
      </section>
    </nav>
  );
}
