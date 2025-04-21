"use client";

import { AdminNav } from "@/components/layout/AdminNav";
// import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React, { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //   const { user } = useAuth();
  //   console.log(user);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-[999] border-b bg-white shadow-sm">
        <div className="flex h-16 items-center px-4 md:px-6 justify-between">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 border rounded-md"
          >
            ☰ {/* Simple menu icon */}
          </button>

          {/* Title */}
          <Link href="/admin" className="font-bold text-lg">
            <img
              src="/main_logo.png"
              alt="main_logo"
              className=" w-32 h-auto cursor-pointer rounded-sm hidden lg:block"
            />
          </Link>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside
          className={`
      w-64 bg-white border-r shadow-md
      sticky top-0 h-[calc(100vh-64px)] overflow-y-auto
      transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:relative lg:flex transition-transform duration-300
    `}
        >
          <div className="p-4">
            <AdminNav setIsSidebarOpen={setIsSidebarOpen} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
