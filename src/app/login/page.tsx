"use client";

import { LoginForm } from "@/components";

const LoginPage = () => {
  return (
    <>
      <section className="bg-primary/10 main-spacing pb-8 lg:pb-16 2xl:py-20">
        <aside className="main-container flex justify-between lg:h-[25rem] md:max-h-fit">
          <div className="hidden w-full lg:flex flex-col items-center justify-center gap-4 text-white bg-primary rounded-l-3xl px-12">
            {/* <img src="/loginbanner.jpeg" alt="" className="h-72 rounded-lg" /> */}
            <h3 className="w-full lg:w-3/4 text-center font-semibold text-xl md:text-2xl lg:text-3xl pt-8">
              Change The Way Of Growing Your Business
            </h3>
            <p className="description text-white">
              A unique and personalized plan for your business
            </p>
          </div>

          <div className="w-full bg-white px-12 flex flex-col justify-center items-center rounded-r-3xl rounded-l-3xl lg:rounded-l-none py-12">
            {/* <Link href="https://www.igcaindia.com/" target="_">
              <img src="/logo.webp" alt="logo" className="md:h-12 h-10" />
            </Link> */}
            <h2 className="font-semibold text-3xl mt-8 mb-10">Hello Again!</h2>
            <LoginForm />
          </div>
        </aside>
      </section>
    </>
  );
};
export default LoginPage;
