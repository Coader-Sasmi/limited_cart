export default function DealsSec() {
  return (
    <section className="bg-gray-50">
      <aside className="main-container py-10 w-full flex lg:flex-row flex-col items-center gap-10">
        <div className="relative lg:w-1/3 w-full flex flex-col gap-5 text-textColor">
          <h4 className="font-semibold ">Hurry, Before It’s Too Late!</h4>
          <h1 className="text-2xl font-semibold">Deals Of The Month</h1>
          <p className="text-textColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
          <button className="whitespace-nowrap w-24 text-sm bg-primary rounded-lg text-white py-1 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            Sign Up
          </button>
          <div className="absolute -bottom-10 right-0 flex">
            <img src="/left_arrow.png" alt="image" className="h-20 w-20" />
            <img src="/right_arrow.png" alt="image" className="h-20 w-20" />
          </div>
        </div>
        <div className="lg:w-2/3 w-full flex md:flex-row flex-col gap-8">
          <img src="/deal_chair.png" alt="image" className="lg:h-96 w-auto" />
          <div className="flex flex-col gap-8 w-full items-end justify-end">
            <div className="md:flex-row flex-col flex gap-8 justify-end md:items-end w-full">
              <div className="relative">
                <img
                  src="/deal_girl1.png"
                  alt="image"
                  className="md:h-80 w-auto"
                />
                <img
                  src="/Picture2.png"
                  alt="image"
                  className="md:h-80 w-auto absolute top-0"
                />
              </div>
              <div className="relative">
                <img
                  src="/deal_girl1.png"
                  alt="image"
                  className="md:h-80 w-auto hidden md:block"
                />
                <img
                  src="/Picture2.png"
                  alt="image"
                  className="md:h-80 w-auto absolute top-0"
                />
              </div>
              <div className="relative">
                <img
                  src="/deal_girl2.png"
                  alt="image"
                  className="md:h-80 w-auto"
                />
                <img
                  src="/Picture6.png"
                  alt="image"
                  className="h-60 w-auto absolute -top-3 -right-3"
                />
              </div>
            </div>
            <div className=" w-full">
              <img src="/slider.png" alt="image" className="h-auto w-auto" />
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
