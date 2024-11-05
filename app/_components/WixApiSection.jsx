import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const WixApiSection = (props) => {
  const { item } = props;
  return (
    <div className=" flex w-[590px] flex-shrink-0 bg-white border border-white rounded-2xl mb-24 ">
      <div className=" p-5 w-[50%] ">
        <p className=" font-medium text-3xl"> {item?.title} </p>

        <p className=" mt-5">{item?.descriptions}</p>
        <button>Starter Template</button>
        <span className=" flex items-center gap-3 text-lg border-b-2 border-white w-[60%] sm:w-auto sm:text-xl">
          Read documentation <FaArrowRightLong />
        </span>
      </div>

      <div className=" w-[50%]">
        <Image
          className="rounded-tr-2xl rounded-br-2xl"
          src={item?.imageSlider}
          alt="slider1"
        />
      </div>
    </div>
  );
};

export default WixApiSection;
