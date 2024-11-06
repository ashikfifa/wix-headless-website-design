"use client";
import React, { useRef } from "react";
import WixApiSection from "./WixApiSection";
import { sliderDataMock } from "@/app/helpers/mock-data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 px-4">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="bg-white p-2 rounded-full shadow-md text-gray-700"
        >
          <FaArrowLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="bg-white p-2 rounded-full shadow-md text-gray-700"
        >
          <FaArrowRight />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide w-full space-x-4 gap-10 bg-ashCOlor px-5 scrollbar-hide"
      >
        {sliderDataMock?.map((item, index) => (
          <WixApiSection item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
