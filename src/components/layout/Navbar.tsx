/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineInformationCircle, HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { ResponsiveNav } from ".";
import useSwr from "../hooks/useSwr";

export interface NavItem {
  title: string;
  path?: string;
  subcategories?: NavItem[];
}

export const NavArr: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Furniture",
    path: "/website/furniture",
    subcategories: [
      { title: "Sofas", path: "/website/furniture/sofas" },
      { title: "Chairs", path: "/website/furniture/chairs" },
    ],
  },
  {
    title: "Footwear",
    path: "/website/footwear",
    subcategories: [
      { title: "Sneakers", path: "/website/footwear/sneakers" },
      { title: "Boots", path: "/website/footwear/boots" },
    ],
  },
  {
    title: "Bags",
    path: "/website/bag",
    subcategories: [
      { title: "Male", path: "/website/bags/male" },
      { title: "Female", path: "/website/bags/female" },
    ],
  },
  {
    title: "Jacket",
    path: "/website/jacket",
    subcategories: [
      { title: "Male", path: "/website/jacket/male" },
      { title: "Female", path: "/website/jacket/female" },
    ],
  },
  {
    title: "Belt",
    path: "/website/belt",
    subcategories: [
      { title: "Male", path: "/website/belt/male" },
      { title: "Female", path: "/website/belt/female" },
    ],
  },
  { title: "Wallet ", path: "/website/wallet" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { data } = useSwr<{
    data: any[];
  }>(`category`);
  // console.log(data);

  return (
    <nav
      className={`sticky top-0 z-[9999] transition-all duration-100 ease-in-out border-b `}
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
            <div className="border-2 px-1 rounded-md text-3xl lg:hidden block text-tertiary">
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
              <img src="/Profile.png" alt="profile" className="w-5 h-auto" />
            </div>
          </div>
        </section>
      </aside>
      <section className="main-container bg-white flex gap-8 py-3 items-center justify-between w-full">
        <div className="hidden lg:flex gap-8">
          <AllCategoriesModal />
          <div className="flex gap-8 py-3">
            {NavArr.map((item, i) => {
              const active =
                item.path === pathname || pathname.startsWith(item.path + "/");

              return (
                <div
                  key={i}
                  className={`relative group ${
                    active ? "font-semibold text-primary" : ""
                  }`}
                >
                  {/* Parent link */}
                  <Link href={item.path ?? "#"}>
                    <p className="px-2 py-1 hover:text-primary">{item.title}</p>
                  </Link>

                  {/* Sub‐menu (if any) */}
                  {item.subcategories && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                      <ul className="flex flex-col">
                        {item.subcategories.map((sub, j) => {
                          const subActive = pathname === sub.path;
                          return (
                            <li key={j}>
                              <Link href={sub.path ?? "#"}>
                                <p
                                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                                    subActive ? "bg-gray-100 font-medium" : ""
                                  }`}
                                >
                                  {sub.title}
                                </p>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className=" flex md:gap-8 gap-3 items-center justify-between">
          <div className="flex">
            <p className="text-gray-500">
              Contact: <span className="text-black">{`+1-408-800-6217`}</span>{" "}
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

export const AllCategoriesModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const pathname = usePathname();

  const isActive = (menuPath?: string) =>
    !!menuPath &&
    (pathname === menuPath || pathname.startsWith(`${menuPath}/`));

  const updatePosition = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom, left: rect.left });
  };

  useEffect(() => {
    if (!open) return;
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  return (
    <div>
      <button
        ref={buttonRef}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center px-4 py-2 border rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring"
      >
        <AiOutlineMenu className="mr-2" />
        <span>All Categories</span>
      </button>

      {open &&
        createPortal(
          <>
            {/* backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-25 z-40"
              onClick={() => setOpen(false)}
            />

            {/* dropdown panel */}
            <div
              style={{ top: pos.top, left: pos.left }}
              className="fixed bg-white rounded-md shadow-lg mt-1 w-40 z-50"
            >
              <div className="p-4 space-y-2">
                {NavArr.map((item) => (
                  <div key={item.title} className="relative group">
                    {/* Parent link/button */}
                    {item.path ? (
                      <Link href={item.path}>
                        <p
                          className={`block px-2 py-1 rounded ${
                            isActive(item.path)
                              ? "bg-gray-200 font-semibold"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          {item.title}
                        </p>
                      </Link>
                    ) : (
                      <span className="block px-2 py-1 rounded hover:bg-gray-100">
                        {item.title}
                      </span>
                    )}

                    {/* Submenu on hover */}
                    {item.subcategories && (
                      <div className="absolute top-0 left-full ml-0 hidden w-32 rounded-md bg-white shadow-lg group-hover:block">
                        <div className="p-2 space-y-1">
                          {item.subcategories.map((sub) => (
                            <Link key={sub.title} href={sub.path!}>
                              <p
                                className={`block px-2 py-1 text-sm rounded ${
                                  isActive(sub.path)
                                    ? "bg-gray-200 font-medium"
                                    : "hover:bg-gray-50"
                                }`}
                                onClick={() => setOpen(false)}
                              >
                                {sub.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  );
};
