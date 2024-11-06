import React from "react";
import multipleBusinessImg from "@/app/assets/images/contant manger - large.webp";
import Image from "next/image";

const MultipleBusiness = () => {
  return (
    <div className=" bg-[rgb(101,68,249)] text-white">
      <div className="py-16 px-10 lg:py-28">
        <div className="flex items-center gap-10 flex-wrap sm:flex-wrap-reverse md:flex-wrap-reverse lg:flex-nowrap">
          <div className=" w-full lg:w-[50%] md:w-full ">
            <Image
              className=" rounded-3xl"
              src={multipleBusinessImg}
              alt="multipleBusinessImg"
            />
          </div>
          <div className=" w-full lg:w-[45%] md:w-full">
            <p className=" xl:text-7xl font-medium md:text-5xl">
              Run multiple business streams from one dashboard
            </p>
            <p className=" text-lg mt-9">Control backend operations, business applications, and update your site’s content using a single, flexible dashboard for simplified server-side management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleBusiness;
