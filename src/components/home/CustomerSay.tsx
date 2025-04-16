import { IoStar } from "react-icons/io5";

export default function CustomerSay() {
  return (
    <section className="main-container py-10 flex flex-col justify-center items-center gap-8 ">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-semibold text-center">
          This Is What Our Customers Say
        </h1>
        <p className="text-textColor text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>
      <div className="relative flex ">
        <img
          src="./card1.png"
          alt="image"
          className="h-auto w-auto absolute -left-20 hidden lg:block"
        />
        <div className="flex justify-center items-center w-full z-10">
          <div className=" flex md:flex-row flex-col gap-8 shadow-xl p-10 rounded-lg bg-white md:w-2/3">
            <img src="./card3.png" alt="image" className="lg:h-72 w-auto" />
            <div className="flex flex-col gap-4">
              <p className="text-textColor">
                You {`won't`} regret it. I would like to personally thank you
                for your outstanding product. Absolutely wonderful!
              </p>
              <div className="flex gap-2">
                <IoStar className="text-yellow-400" />
                <IoStar className="text-yellow-400" />
                <IoStar className="text-yellow-400" />
                <IoStar className="text-yellow-400" />
                <IoStar className="text-yellow-400" />
              </div>
              <div className="bg-black h-[0.1rem] w-32 md:w-56"></div>
              <h1 className="text-2xl font-medium">James K.</h1>
              <p className="text-textColor">Traveler</p>
            </div>
          </div>
        </div>
        <img
          src="./card2.png"
          alt="image"
          className="h-auto w-auto absolute -right-20 hidden lg:block"
        />
      </div>
      <div className=" flex">
        <img src="./left_arrow.png" alt="image" className="h-20 w-20" />
        <img src="./right_arrow.png" alt="image" className="h-20 w-20" />
      </div>
    </section>
  );
}
