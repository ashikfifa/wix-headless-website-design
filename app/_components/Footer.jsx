import React from "react";
import {
  companyData,
  moreFromWixData,
  productData,
  resourceData,
} from "../helpers/mock-data";
import youtubeIcon from "@/app/assets/icon/youtubeIcon.svg";
import upRoundIcon from "@/app/assets/icon/upIconRound.svg";
import fbIcon from "@/app/assets/icon/facebookIcon.svg";
import tiktokIcon from "@/app/assets/icon/tiktokIcon.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-black py-10 px-10 text-white">
      <div className="flex flex-wrap w-full">
        {/* Logo and Social Media Section */}
        <div className=" mb-9 lg:flex-[2] md:w-full lg:w-auto lg:mb-0">
          <div>
            <p className=" text-lg font-semibold md:text-3xl">Logo</p>
            <p className="mt-5">
              Wix Studio is the platform built for agencies and enterprises.
              Smart design capabilities, flexible dev tools and streamlined
              business management mean you can do more—with more.
            </p>
          </div>
          <div className="mt-5 md:mb-9 lg:mt-24 flex items-center gap-9 hover:cursor-pointer">
            <Image src={youtubeIcon} alt="youtubeIcon" />
            <FaXTwitter />
            <FaInstagram />
            <Image src={fbIcon} alt="fbIcon" />
            <Image src={tiktokIcon} alt="tiktokIcon" />
          </div>
        </div>

        {/* Spacer for large screens only */}
        <div className="hidden lg:block lg:flex-[1] lg:w-auto w-full"></div>

        {/* Product Section */}
        <div className=" mb-9 lg:flex-[1] md:w-1/2 lg:w-auto w-full lg:mb-0">
          <p className="mb-5 text-lg font-semibold">Product</p>
          <ul>
            {productData?.map((item, index) => (
              <li
                key={index}
                className="mb-2 font-thin hover:text-violet-300 cursor-pointer"
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="mb-9 lg:flex-[1] md:w-1/2 lg:w-auto w-full md:mb-0">
          <p className="mb-5 text-lg font-semibold">Resources</p>
          <ul>
            {resourceData?.map((item, index) => (
              <li
                key={index}
                className="mb-2 hover:text-violet-300 cursor-pointer"
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>

        {/* More from Wix Section */}
        <div className="mb-9 lg:flex-[1] md:w-1/2 lg:w-auto w-full lg:mb-0">
          <p className="text-lg font-semibold mb-5">More from Wix</p>
          <ul>
            {moreFromWixData?.map((item, index) => (
              <li
                key={index}
                className="mb-2 hover:text-violet-300 cursor-pointer"
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div className="lg:flex-[1] md:w-1/2 lg:w-auto w-full">
          <p className="mb-5 text-lg font-semibold">Company</p>
          <ul>
            {companyData?.map((item, index) => (
              <li
                key={index}
                className="mb-2 hover:text-violet-300 cursor-pointer"
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" mt-5">
        <div className=" border-b-[1px]"></div>

        <div className=" mt-5 flex flex-wrap items-center justify-between text-white mb-10">
          <div className=" flex flex-wrap gap-8 items-center">
            <span className="text-sm md:text-base lg:text-base border-b-[1px] border-white sm:w-auto ">
              {" "}
              Terms of Use
            </span>

            <span className="text-sm border-b-[1px] border-white sm:w-auto md:text-base">
              {" "}
              Privacy Policy
            </span>
          </div>

          <div className=" flex items-center mt-8 gap-3 md:mt-0">
            <span className=" text-sm border-none md:border-b-[1px]  border-white sm:w-auto md:text-base">
              {" "}
              Wix Studio is part of Wix.com Ltd. © 2006-2024
            </span>
            {/* <CiCircleChevUp /> */}
            <Image src={upRoundIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
