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
  path: string;
  subcategories?: NavItem[];
  innerSubcategories?: NavItem[];
}

export const NavArr: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Furniture",
    path: "/website/furniture",
    // subcategories: [
    //   { title: "100% Leather Sofa", path: "/website/furniture/leather-sofa" },
    //   {
    //     title: "Leatherette Sofa",
    //     path: "/website/furniture/leatherette-sofa",
    //   },
    //   {
    //     title: "Touch Leather Sofa",
    //     path: "/website/furniture/touch-leather-sofa",
    //   },
    //   { title: "Fabric Sofa", path: "/website/furniture/fabric-sofa" },
    // ],
  },
  {
    title: "Bags",
    path: "/website/bag",
    subcategories: [
      {
        title: "For Men",
        path: "/website/bag/men",
        // innerSubcategories: [
        //   {
        //     title: "100% Leather Laptop Bag",
        //     path: "/website/bag/men/leather-laptop-bag",
        //   },
        //   {
        //     title: "100% Leather Trolley Bag",
        //     path: "/website/bag/men/leather-trolley-bag",
        //   },
        //   {
        //     title: "100% Leather Backpack",
        //     path: "/website/bag/men/leather-backpack",
        //   },
        //   { title: "100% Leather Bag", path: "/website/bag/men/leather-bag" },
        // ],
      },
      {
        title: "For Women",
        path: "/website/bag/women",
        // innerSubcategories: [
        //   { title: "100% Leather Bag", path: "/website/bag/women/leather-bag" },
        //   {
        //     title: "100% Leather Backpack",
        //     path: "/website/bag/women/leather-backpack",
        //   },
        //   {
        //     title: "100% Leather Hand Bag",
        //     path: "/website/bag/women/leather-hand-bag",
        //   },
        //   { title: "100% Leather ", path: "/website/bag/women/leather" },
        // ],
      },
    ],
  },
  {
    title: "Jacket",
    path: "/website/jacket",
    subcategories: [
      {
        title: "For Men",
        path: "/website/jacket/men",
        // innerSubcategories: [
        //   {
        //     title: "Over Coat Jacket",
        //     path: "/website/jacket/men/over-coat-jacket",
        //   },
        //   {
        //     title: "Regular Jacket",
        //     path: "/website/jacket/men/regular-jacket",
        //   },
        // ],
      },
      {
        title: "For Women",
        path: "/website/jacket/women",
        // innerSubcategories: [
        //   {
        //     title: "Over Coat Jacket",
        //     path: "/website/jacket/women/over-coat-jacket",
        //   },
        //   {
        //     title: "Regular Jacket",
        //     path: "/website/jacket/women/regular-jacket",
        //   },
        // ],
      },
    ],
  },
  {
    title: "Footwear",
    path: "/website/footwear",
    subcategories: [
      {
        title: "For Men",
        path: "/website/footwear/men",
        // innerSubcategories: [
        //   {
        //     title: "Leather Shoes",
        //     path: "/website/footwear/men/leather-shoes",
        //   },
        //   {
        //     title: "Leather Sandal",
        //     path: "/website/footwear/men/leather-sandal",
        //   },
        //   { title: "Casual Shoes", path: "/website/footwear/men/casual-shoes" },
        // ],
      },
      {
        title: "For Women",
        path: "/website/footwear/women",
        // innerSubcategories: [
        //   {
        //     title: "Leather Shoes",
        //     path: "/website/footwear/women/leather-shoes",
        //   },
        //   {
        //     title: "Leather Sandal",
        //     path: "/website/footwear/women/leather-sandal",
        //   },
        //   {
        //     title: "Casual Shoes",
        //     path: "/website/footwear/women/casual-shoes",
        //   },
        // ],
      },
    ],
  },
  {
    title: "Accessories",
    path: "/website/accessories",
    subcategories: [
      {
        title: "For Men",
        path: "/website/accessories/men",
        // innerSubcategories: [
        //   {
        //     title: "Leather Belt ",
        //     path: "/website/accessories/men/leather-belt",
        //   },
        //   {
        //     title: "Leather Wallet",
        //     path: "/website/accessories/men/leather-wallet",
        //   },
        //   {
        //     title: "Leather Key Chain",
        //     path: "/website/accessories/men/leather-key-chain",
        //   },
        //   {
        //     title: "Leather Passport Cover",
        //     path: "/website/accessories/men/leather-passport-cover",
        //   },
        //   {
        //     title: "Leather Chest Bag",
        //     path: "/website/accessories/men/leather-chest-bag",
        //   },
        // ],
      },
      {
        title: "For Women",
        path: "/website/accessories/women",
        // innerSubcategories: [
        //   {
        //     title: "Leather Belt ",
        //     path: "/website/accessories/women/leather-belt",
        //   },
        //   {
        //     title: "Leather Wallet",
        //     path: "/website/accessories/women/leather-wallet",
        //   },
        //   {
        //     title: "Leather Hand Bag",
        //     path: "/website/accessories/women/leather-hand-bag",
        //   },
        //   {
        //     title: "Leather Passport Cover",
        //     path: "/website/accessories/women/leather-passport-cover",
        //   },
        //   {
        //     title: "Leather Chest Bag",
        //     path: "/website/accessories/women/leather-chest-bag",
        //   },
        // ],
      },
    ],
  },
  {
    title: "Trade Assurance",
    path: "/website/trade-assurance",
    // subcategories: [
    //   {
    //     title: "Shipping & logistics services",
    //     path: "/website/trade-assurance",
    //   },
    //   {
    //     title: "Safe & easy payments",
    //     path: "/website/trade-assurance",
    //   },
    //   {
    //     title: "Money-back policy",
    //     path: "/website/trade-assurance",
    //   },
    //   {
    //     title: "After-sales protections",
    //     path: "/website/trade-assurance",
    //   },
    // ],
  },
];

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { data } = useSwr<{
    data: any[];
  }>(`category`);
  // console.log(data);

  const pathname = usePathname();
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);

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
        <div className="hidden lg:flex items-center gap-8">
          <AllCategoriesModal />
          {/* <div className="flex gap-8 py-3">
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
                  
                  <Link href={item.path ?? "#"}>
                    <p className="px-2 py-1 hover:text-primary">{item.title}</p>
                  </Link>

                  
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
          </div> */}
          <div className="flex gap-8 py-3">
            {NavArr.map((item) => {
              const active =
                item.path === pathname || pathname.startsWith(item.path + "/");

              return (
                <div key={item.title} className="relative group">
                  {/* Parent link */}
                  <Link href={item.path ?? "#"}>
                    <p
                      className={`px-2 py-1 hover:text-primary ${
                        active ? "font-semibold text-primary" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                  </Link>

                  {/* Submenu */}
                  {item.subcategories && (
                    <div
                      className="
                absolute top-full left-0 mt-1
                w-48 bg-white border border-gray-200 rounded-md shadow-lg
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all
              "
                    >
                      <ul className="flex flex-col">
                        {item.subcategories.map((sub) => {
                          const subActive = pathname === sub.path;
                          return (
                            <li
                              key={sub.title}
                              className="relative group"
                              onMouseEnter={() => setHoveredSub(sub.title)}
                              onMouseLeave={() => setHoveredSub(null)}
                            >
                              <Link href={sub.path ?? "#"}>
                                <p
                                  className={`block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap ${
                                    subActive ? "bg-gray-100 font-medium" : ""
                                  }`}
                                >
                                  {sub.title}
                                </p>
                              </Link>

                              {/* Inner Submenu */}
                              {sub.innerSubcategories &&
                                hoveredSub === sub.title && (
                                  <div
                                    className="
                              absolute top-0 left-full ml-1
                              w-48 bg-white border border-gray-200 rounded-md shadow-lg
                              opacity-100 visible
                              transition-all
                            "
                                  >
                                    <ul className="flex flex-col">
                                      {sub.innerSubcategories.map((inner) => {
                                        const innerActive =
                                          pathname === inner.path;
                                        return (
                                          <li key={inner.title}>
                                            <Link href={inner.path ?? "#"}>
                                              <p
                                                className={`block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap ${
                                                  innerActive
                                                    ? "bg-gray-100 font-medium"
                                                    : ""
                                                }`}
                                              >
                                                {inner.title}
                                              </p>
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                )}
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
          {/* <button className="whitespace-nowrap bg-primary rounded-lg text-white py-1 px-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            Sign Up
          </button> */}
        </div>
      </section>
    </nav>
  );
}

export const AllCategoriesModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [hoveredParent, setHoveredParent] = useState<NavItem | null>(null);
  const [hoveredSub, setHoveredSub] = useState<NavItem | null>(null);
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
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-25 z-40"
              onClick={() => {
                setOpen(false);
                setHoveredParent(null);
                setHoveredSub(null);
              }}
            />

            {/* Dropdown panel */}
            <div
              style={{ top: pos.top, left: pos.left }}
              className="fixed bg-white rounded-md shadow-lg mt-1 z-50"
              onMouseLeave={() => {
                setHoveredParent(null);
                setHoveredSub(null);
                setOpen(false);
              }}
            >
              <div className="flex">
                {/* Column 1: Parent categories */}
                <ul className="py-4 px-2 space-y-1">
                  {NavArr.map((parent) => (
                    <li
                      key={parent.title}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded whitespace-nowrap"
                      onMouseEnter={() => {
                        setHoveredParent(parent);
                        setHoveredSub(null);
                      }}
                    >
                      <Link href={parent.path}>
                        <p
                          className={`${
                            isActive(parent.path) ? "font-semibold" : ""
                          }`}
                        >
                          {parent.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Column 2: Subcategories */}
                <div className="border-l border-gray-200">
                  <ul className="py-4 px-2 space-y-1">
                    {hoveredParent?.subcategories?.map((sub) => (
                      <li
                        key={sub.title}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded whitespace-nowrap"
                        onMouseEnter={() => setHoveredSub(sub)}
                      >
                        <Link href={sub.path!}>
                          <p
                            className={`${
                              isActive(sub.path) ? "font-medium" : ""
                            }`}
                          >
                            {sub.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Inner subcategories */}
                <div className="border-l border-gray-200">
                  <ul className="py-4 px-2 space-y-1">
                    {hoveredSub?.innerSubcategories?.map((inner) => (
                      <li
                        key={inner.title}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded whitespace-nowrap"
                      >
                        <Link href={inner.path!}>
                          <p
                            className={`${
                              isActive(inner.path) ? "font-medium" : ""
                            }`}
                          >
                            {inner.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  );
};
