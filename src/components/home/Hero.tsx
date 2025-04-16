"use client";

export default function Hero() {
  return (
    <section className="main-container py-10 ">
      <div className="flex lg:flex-row flex-col gap-10 w-full">
        <div className="w-full">
          <img src="./hero_man.png" alt="image" className="h-auto w-auto" />
        </div>
        <div className="flex flex-col gap-5 items-center w-full ">
          <div>
            <img src="./girls.png" alt="image" className="h-auto w-auto" />
          </div>
          <div>
            <img src="./hero_text.png" alt="image" className="h-auto w-auto" />
          </div>
          <p>NEW COLLECTION</p>
          <button className="bg-black text-white w-40 py-2 text-sm rounded-md">
            SHOP NOW
          </button>
          <div>
            <img src="./hero_girl.png" alt="image" className="h-auto w-auto" />
          </div>
        </div>
        <div className="w-full">
          <img src="./hero_shoes.png" alt="image" className="h-auto w-auto" />
        </div>
      </div>
    </section>
  );
}
