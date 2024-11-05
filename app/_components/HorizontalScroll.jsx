"use client";
import { useRef } from "react";
import WixApiSection from "./WixApiSection";
import { sliderDataMock } from "@/app/fonts/mock-data";

const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={scrollRef}
      onWheel={handleWheel}
      className=" flex overflow-x-auto w-full space-x-4 gap-10 bg-ashCOlor px-5"
    >
      {sliderDataMock?.map((item, index) => (
        <WixApiSection item={item} key={index} />
      ))}
    </div>
  );
};

export default HorizontalScroll;
