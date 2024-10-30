import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import heroBannerImage from "../assets/images/hero.webp";
import heroBannerImageMobile from "../assets/images/hero-img1.webp";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="bg-[rgb(33,30,30)] text-white flex flex-wrap items-center h-auto md:pl-14 sm:pl-3">
      <div className="lg:w-[50%] p-4 pt-20 sm:p-5">
        <p className=" text-2xl font-thin">WIX HEADLESS</p>

        <p className="text-6xl font-medium mt-10 ">
          Bring Wix business solutions to any tech stack
        </p>
        <p className=" text-lg mt-8">
          Power your projects with Wix’s industry-leading server-side APIs to
          build exactly what you want, anywhere.
        </p>
        <div className=" flex flex-col md:flex-row gap-10 pt-5 ">
          {" "}
          <button className=" px-6 py-2 rounded-3xl text-xl bg-white text-black w-[60%] sm:w-auto">
            Get Started
          </button>{" "}
          <span className=" flex items-center gap-3 text-lg border-b-2 border-white w-[60%] sm:w-auto sm:text-xl">
            {" "}
            Read documentation <FaArrowRightLong />
          </span>{" "}
        </div>
      </div>
      <div className=" w-full lg:w-[50%]  ">
        <Image  className="hidden lg:block" src={heroBannerImage} width={"100%"} alt="wix hero banner" />
        <Image className=" block mt-10 mb-5 lg:hidden" src={heroBannerImageMobile} width={"100%"} alt="wix hero banner for mobile"/>
      </div>
    </div>
  );
};

export default HeroBanner;
