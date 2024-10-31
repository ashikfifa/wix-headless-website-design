import React from "react";
import slider1 from "@/app/assets/images/slider-1.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const WixApiSection = () => {
  return (
    <div className=" bg-ashCOlor">
      <div className="py-16 px-10 lg:py-28 lg:px-20">
        <p className=" text-xl font-medium ">WIX APIs</p>
        <p className=" text-6xl font-medium mt-5 flex flex-col">
          Engineered for excellence.
          <span>Trusted by millions. Ready to use.</span>{" "}
        </p>
      </div>

      <div className=" flex rounded-lg">
        <div className=" bg-white">
          <p className=" font-medium text-lg">Headless Bookings</p>

          <p>
            Integrate flexible booking features based on location and
            availability, schedule or manage appointments, sync staff calendars,
            set up automated reminders and more.
          </p>
          <button>Starter Template</button>
          <span className=" flex items-center gap-3 text-lg border-b-2 border-white w-[60%] sm:w-auto sm:text-xl">
            Read documentation <FaArrowRightLong />
          </span>
        </div>

        <div>
          <Image src={slider1} alt="slider1" />
        </div>
      </div>
    </div>
  );
};

export default WixApiSection;
