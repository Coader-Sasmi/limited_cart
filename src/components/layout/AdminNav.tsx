/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiObjectsHorizontalRight } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { LuGitCompareArrows, LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import useAuth from "../hooks/useAuth";

interface AdminNavProps {
  setIsSidebarOpen?: (open: boolean) => void;
  isSidebarOpen?: boolean;
}

export function AdminNav({ setIsSidebarOpen, isSidebarOpen }: AdminNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  //   console.log(user);

  const routes = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: <LuLayoutDashboard />,
      active: pathname === "/admin",
    },
    {
      href: "/admin/category",
      label: "Category",
      icon: <BiObjectsHorizontalRight />,
      active: pathname === "/admin/category",
    },
    // {
    //   href: "/subcategory",
    //   label: "Sub Category",
    //   icon: <TbArrowBigRightLine />,
    //   active: pathname === "/subcategory",
    // },
    {
      href: "/admin/supplier",
      label: "Supplier",
      icon: <LuGitCompareArrows />,
      active: pathname === "/admin/supplier",
    },
    {
      href: "/admin/product",
      label: "Products",
      icon: <MdOutlineShoppingCart />,
      active: pathname === "/admin/product",
    },
  ];

  return (
    <div
      className={`flex flex-col h-full py-4 ${
        isSidebarOpen ? "md:block" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-5">
        <Link href="/admin" className="font-bold text-lg lg:hidden">
          <img
            src="/main_logo.png"
            alt="main_logo"
            className=" w-32 h-auto cursor-pointer rounded-sm "
          />
        </Link>
        <div className="flex flex-col gap-4">
          {routes.map((curElm) => (
            <div
              key={curElm.href}
              //   variant={curElm.active ? "secondary" : "ghost"}
              //   size="sm"
              className="w-full justify-start"
              //   asChild
              onClick={() => {
                if (setIsSidebarOpen) {
                  setIsSidebarOpen(false);
                }
              }}
            >
              <Link href={curElm.href}>
                <div className="flex items-center gap-3">
                  <div className="text-primary">{curElm.icon}</div>
                  <h4>{curElm.label}</h4>
                </div>
              </Link>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <HiOutlineLogout />
            </div>
            <button
              onClick={async () => {
                await logout();
                router.push("/");
                // alert("hello world");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
