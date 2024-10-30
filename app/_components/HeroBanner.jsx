import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import heroBannerImage from "../assets/images/hero.webp";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className=" h-screen bg-[rgb(33,30,30)] text-white flex flex-wrap items-center pl-14">
      <div className=" w-full xl:w-[40%]  lg:w-[50%] p-4">
        <p className=" text-2xl font-thin">WIX HEADLESS</p>

        <p className=" text-6xl font-medium mt-10">
          Bring Wix business solutions to any tech stack
        </p>
        <p className=" text-lg mt-8">
          Power your projects with Wix’s industry-leading server-side APIs to
          build exactly what you want, anywhere.
        </p>
        <div className=" flex gap-10 items-center pt-5">
          {" "}
          <button className=" px-6 py-2 rounded-3xl text-xl bg-white text-black  ">
            Get Started
          </button>{" "}
          <span className=" flex items-center gap-3 text-xl border-b-2 border-white">
            {" "}
            Read documentation <FaArrowRightLong />
          </span>{" "}
        </div>
      </div>
      <div className=" w-full xl:w-[10%] lg:hidden  p-4"></div>
      <div className=" w-full xl:w-[50%] lg:w-[50%]">
        <Image src={heroBannerImage} width={"100%"} alt="wix hero banner" />
      </div>
    </div>
  );
};

export default HeroBanner;
