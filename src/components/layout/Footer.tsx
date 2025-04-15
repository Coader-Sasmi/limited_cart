"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiYoutube } from "react-icons/si";

const menuArr = [
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
  { title: "Privacy & Cookies", path: "/privacy" },
  { title: "Term & Condition", path: "/term" },
  { title: "Cancellation Policy", path: "/cancellation" },
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
      <section className="main-container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 place-content-center md:place-items-center">
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
                <p
                  key={i}
                  className="rounded-full border border-tertiary padding-5 cursor-pointer"
                >
                  {curElm?.icon}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="font-semibold tracking-wide text-xl">Company</h1>
            <div className="flex flex-col gap-2">
              {menuArr?.map((curElm, i) => (
                <p key={i} className=" hover:underline">
                  <Link href={curElm?.path}>{curElm?.title}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <p>Careers</p>
            <p>Content guideline & Reporting</p>
            <p>Legal</p>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="font-semibold tracking-wide text-xl">Contact</h1>
            <p>
              PriceTonight Booking Private Limited
              <br /> VIIM-29, SailashreeVihar
              <br /> Chandrashkerpur
              <br /> Bhubaneswar – 751021
              <br /> Mob: +91-72056 92170
            </p>
            {/* <div className="flex items-center gap-2">
              <img src="./facebook.png" alt="image" className="w-6 h-auto" />
              <img src="./instagram.png" alt="image" className="w-6 h-auto" />
              <img src="./twitter.png" alt="image" className="w-6 h-auto" />
              <img src="./youtube.png" alt="image" className="w-6 h-auto" />
              <img src="./linkedin.png" alt="image" className="w-6 h-auto" />
            </div> */}
          </div>
        </div>
      </section>
      <div className="w-9 bg-primary h-[0.05rem]"></div>
      <div className=" p-4 flex lg:flex-row flex-col justify-between items-center">
        <p>
          All rights reserved &copy; {new Date().getFullYear()} limitedcart.com
        </p>
        <p>
          Developed & Maintained by{" "}
          <Link
            href="https://www.adnibog.com/"
            target="_"
            className="hover:text-secondary font-semibold hover:border-b"
          >
            Adnibog Systems
          </Link>
        </p>
      </div>
    </>
  );
}
