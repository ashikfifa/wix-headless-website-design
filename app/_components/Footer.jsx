import React from "react";
import {
  companyData,
  moreFromWixData,
  productData,
  resourceData,
} from "../fonts/mock-data";
import youtubeIcon from "@/app/assets/icon/youtubeIcon.svg";
import upRoundIcon from "@/app/assets/icon/upIconRound.svg";
import fbIcon from "@/app/assets/icon/facebookIcon.svg";
import tiktokIcon from "@/app/assets/icon/tiktokIcon.svg";
import { FaXTwitter } from "react-icons/fa6";
import { CiCircleChevUp } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-black py-10 px-20 text-white">
      <div className=" flex w-full gap-8 ">
        <div className=" w-[32%] md:w-full">
          <div>
          <h3>Logo</h3>

          <p className=" mt-5">
            Wix Studio is the platform built for agencies and enterprises. Smart
            design capabilities, flexible dev tools and streamlined business
            management mean you can do more—with more.
          </p>
          </div>
          <div className=" mt-24 flex items-center gap-9 hover:cursor-pointer md:gap-10">
            <Image src={youtubeIcon} alt="youtubeIcon" />
            <FaXTwitter />
            <FaInstagram />
            <Image src={fbIcon} alt="fbIcon" />
            <Image src={tiktokIcon} alt="tiktokIcon" />
          </div>
        </div>

        <div className=" w-[4%]"></div>

        <div className="w-[18%]">
          <p className=" mb-5 text-lg font-semibold">Product </p>

          <ul>
            {productData?.map((item, index) => (
              <li
                key={index}
                className=" mb-2 font-thin hover:text-violet-300 cursor-pointer"
              >
                {" "}
                {item?.name}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[12%]">
          <p className=" mb-5 text-lg font-semibold">Resources </p>

          <ul>
            {resourceData?.map((item, index) => (
              <li
                key={index}
                className=" mb-2 hover:text-violet-300 cursor-pointer"
              >
                {" "}
                {item?.name}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[12%]">
          <p className=" text-lg font-semibold mb-5">More from wix </p>

          <ul>
            {moreFromWixData?.map((item, index) => (
              <li
                key={index}
                className=" mb-2 hover:text-violet-300 cursor-pointer"
              >
                {" "}
                {item?.name}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[12%]">
          <p className=" mb-5  text-lg font-semibold">Company </p>

          <ul>
            {companyData?.map((item, index) => (
              <li
                key={index}
                className=" mb-2 hover:text-violet-300 cursor-pointer"
              >
                {" "}
                {item?.name}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" mt-5">
        <div className=" border-b-[1px]"></div>

        <div className=" mt-5 flex items-center justify-between text-white mb-10">
          <div className=" flex gap-8 items-center">
            <span className=" text-base border-b-[1px] border-white sm:w-auto sm:text-sm">
              {" "}
              Terms of Use
            </span>

            <span className=" text-base border-b-[1px] border-white sm:w-auto sm:text-sm">
              {" "}
              Privacy Policy
            </span>
          </div>

          <div className=" flex items-center gap-3">
            <span className=" text-base border-b-[1px] border-white sm:w-auto sm:text-sm">
              {" "}
              Wix Studio is part of Wix.com Ltd. © 2006-2024
            </span>
            {/* <CiCircleChevUp /> */}
            <Image src={upRoundIcon} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
