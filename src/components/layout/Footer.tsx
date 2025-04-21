"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiYoutube } from "react-icons/si";

const menuArr = [
  { title: "Furniture", path: "/website/furniture" },
  { title: "Footwear", path: "/website/footwear" },
  { title: "Bags", path: "/website/bag" },
  { title: "Jacket", path: "/website/jacket" },
  { title: "Accessories", path: "/website/accessories" },
];
const supportArr = [
  { title: "About Us", path: "/" },
  { title: "Contact Us", path: "/" },
  { title: "Privacy & Cookies", path: "/website/privacy" },
  { title: "Term & Condition", path: "/" },
  { title: "Careers", path: "/" },
  { title: "Content guideline & Reporting", path: "/" },
  { title: "Legal", path: "/" },
];

export default function Footer() {
  const socialMediaArr = [
    {
      icon: <BiLogoFacebookCircle />,
    },
    {
      icon: <RiTwitterFill />,
    },
    {
      icon: <LuInstagram />,
    },
    {
      icon: <RxLinkedinLogo />,
    },
    {
      icon: <SiYoutube />,
    },
  ];
  return (
    <>
      <section className="main-container py-5 border-t">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 ">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <img
                src="/main_logo.png"
                alt="main_logo"
                className="w-40 bg-white p-2 rounded-md h-auto cursor-pointer"
              />
            </Link>
            <p>
              Limitedcart LCC 16833 Grand Circle, Omaha, NE 68116 Mob: +1 (248)
              766-8292
            </p>
            <div className="flex gap-2 items-center">
              {socialMediaArr?.map((curElm, i) => (
                <div
                  key={i}
                  className="border border-gray-50 rounded-full p-2 hover:border-tertiary hover:text-tertiary cursor-pointer"
                >
                  {curElm?.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="font-semibold tracking-wide text-xl uppercase">
              category
            </h1>
            <div className="flex flex-col gap-2">
              {menuArr?.map((curElm, i) => (
                <p
                  key={i}
                  className=" hover:underline-primary hover:text-primary "
                >
                  <Link href={curElm?.path}>{curElm?.title}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="font-semibold tracking-wide text-xl uppercase">
              support
            </h1>
            <div className="flex flex-col gap-2">
              {supportArr?.map((curElm, i) => (
                <p
                  key={i}
                  className=" hover:underline-primary hover:text-primary "
                >
                  <Link href={curElm?.path}>{curElm?.title}</Link>
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="font-semibold tracking-wide text-xl uppercase">
              Newsletter
            </h1>
            <div className="flex gap-2 items-center">
              {socialMediaArr?.map((curElm, i) => (
                <div
                  key={i}
                  className="border border-gray-50 rounded-full p-2 hover:border-primary hover:text-primary cursor-pointer"
                >
                  {curElm?.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="w-9 bg-primary h-[0.05rem]"></div> */}
      <div className=" p-4 flex lg:flex-row flex-col justify-between items-center bg-tertiary text-white">
        <p>
          All rights reserved &copy; {new Date().getFullYear()} limitedcart.com
        </p>
        <p>
          Developed & Maintained by{" "}
          <Link
            href="https://www.adnibog.com/"
            target="_"
            className="hover:text-primary font-semibold hover:border-b"
          >
            Adnibog Systems
          </Link>
        </p>
      </div>
    </>
  );
}
