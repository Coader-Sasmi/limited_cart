"use client";
import { Fragment } from "react";

export default function LogoSec() {
  const logoArr = [
    {
      img: "./logo_1.png",
    },
    {
      img: "./logo_2.png",
    },
    {
      img: "./logo_3.png",
    },
    {
      img: "./logo_4.png",
    },
    {
      img: "./logo_5.png",
    },
  ];
  return (
    <section className="shadow-xl">
      <div className="main-container lg:p-16 md:p-8 p-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
        {logoArr.map((logo, i) => (
          <Fragment key={i}>
            <img src={logo.img} alt="logo" className="h-auto w-auto" />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
