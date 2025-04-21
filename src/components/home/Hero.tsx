"use client";

export default function Hero() {
  return (
    <section className="main-container py-10 ">
      <div className="flex lg:flex-row flex-col gap-10 w-full">
        <div className="w-full bg-[#e0e0e0] flex items-center justify-center rounded-lg">
          <img src="/Picture1.png" alt="image" className="h-auto w-auto" />
        </div>
        <div className="flex flex-col gap-5 items-center w-full ">
          <div className=" bg-[#e0e0e0] flex items-center justify-center rounded-lg">
            <img src="/Picture4.png" alt="image" className="h-auto w-auto" />
          </div>
          <div>
            <img src="/hero_text.png" alt="image" className="h-auto w-auto" />
          </div>
          <p>NEW COLLECTION</p>
          <button className="bg-black text-white w-40 py-2 text-sm rounded-md">
            SHOP NOW
          </button>
          <div className=" bg-[#f6ada4] flex items-center justify-center rounded-lg">
            <img src="/Picture5.png" alt="image" className="h-auto w-auto" />
          </div>
        </div>
        <div className="w-full">
          <img src="/hero_shoes.png" alt="image" className="h-auto w-auto" />
        </div>
      </div>
    </section>
  );
}
