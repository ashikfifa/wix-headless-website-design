import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const JoinWix = () => {
  return (
    <div className="bg-customPurple  ">
      <div className=" flex w-full flex-wrap">
        <div className="wixApiHeight mt-16 bg-black rounded-tr-3xl md:w-[60%] sm:w-full ">
          <div className="px-8 py-16">
            <p className=" text-2xl lg:text-5xl font-medium text-white mt-16 md:text-3xl">
              Need a scalable solution for your business? Discover the benefits
              of Wix Enterprise.
            </p>

            <button className=" px-6 py-3 rounded-3xl mt-12 bg-white">
              Explore Wix Enterprise
            </button>
          </div>
        </div>

        <div className="flex py-10 sm:w-full md:w-[40%]  lg:py-0  ">
          <div className=" flex flex-col justify-center pl-10">
            <p className=" text-2xl lg:text-5xl font-medium md:text-3xl">
              {" "}
              Join our Wix Studio Community
            </p>

            <div className=" mt-8 flex gap-5">
              <div className=" flex items-center gap-2">
                <FaXTwitter />
                <span className=" flex items-center gap-3 text-lg border-b-2 border-black w-[60%] md:text-base sm:w-auto sm:text-xl">
                  {" "}
                  Twitter <FaArrowRightLong />
                </span>
              </div>

              <div className=" flex items-center gap-2">
                <FaDiscord />
                <span className=" flex items-center gap-3 text-lg border-b-2 border-black w-[60%] md:text-base sm:w-auto sm:text-xl">
                  {" "}
                  Discord <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWix;
