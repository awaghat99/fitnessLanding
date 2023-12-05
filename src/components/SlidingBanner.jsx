import React from "react";
import { slidingBannerWords } from "../constants";

const SlidingBanner = () => {
  return (
    <div className="flex overflow-hidden mt-36 max-md:mt-0">
      <div className="flex bg-lemon-yellow px-2 py-2  animate-slide">
        {slidingBannerWords.map((phrase, index) => (
          <div
            className="flex text-black font-inter font-bold uppercase text-2xl items-center whitespace-nowrap"
            key={index}>
            <p>{phrase}</p>
            <p className="rotate-90 mx-3">X</p>
          </div>
        ))}
      </div>
      <div className="flex bg-lemon-yellow px-2 py-2 animate-slide">
        {slidingBannerWords.map((phrase, index) => (
          <div
            className="flex text-black font-inter font-bold uppercase text-2xl items-center whitespace-nowrap"
            key={index}>
            <p>{phrase}</p>
            <p className="rotate-90 mx-3">X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingBanner;
