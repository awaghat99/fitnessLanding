import React from "react";
import social1 from "../assets/images/social1.jpg";
import social2 from "../assets/images/social2.jpg";
import social3 from "../assets/images/social3.jpg";
import ig from "../assets/icons/ig.svg";
import tik from "../assets/icons/tik.svg";
import youtube from "../assets/icons/youtube.svg";

const Social = () => {
  return (
    <section className="border-b-2 pb-12">
      <div className="flex items-start justify-between max-md:flex-col ">
        <div>
          <h2 className="h2-style">
            <span className="font-anton text-gray-400 text-opacity-100">/</span>
            <span className="font-anton text-gray-400 text-opacity-80">/</span>
            <span className="font-anton text-gray-400 text-opacity-60">/</span>
            <span className="font-anton text-gray-400 text-opacity-40 mr-4">/</span>
            On Instagram
          </h2>
          <p className="my-10 font-inter text-gray-md text-md max-sm:text-md w-[430px] max-sm:w-auto">
            Stay motivated and engaged with a little help from a supportive community of other members
          </p>
        </div>
        <div>
          <p className="text-5xl font-anton uppercase max-sm:text-2xl text-lemon-yellow">#JoinRayClub</p>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-y-11 gap-x-2 justify-between max-md:justify-center mt-14">
        <div className=" relative w-[30%] max-lg:w-[48%] max-sm:w-[90%]">
          <img src={social1} alt="random" className=" w-full aspect-square object-cover object-top" />
          <div className="transform -skew-x-12 absolute bg-lemon-yellow w-[20%] h-[20%] top-[40%] left-[40%] flex items-center justify-center">
            <img src={ig} className="w-2/5 aspect-square" />
          </div>
        </div>

        <div className=" relative w-[30%] max-lg:w-[48%] max-sm:w-[90%]">
          <img src={social2} alt="random" className="w-full aspect-square object-cover" />
          <div className="transform -skew-x-12 absolute bg-lemon-yellow w-[20%] h-[20%] top-[40%] left-[40%] flex items-center justify-center">
            <img src={tik} className="w-2/5 aspect-square" />
          </div>
        </div>

        <div className=" relative w-[30%] max-lg:w-[48%] max-sm:w-[90%]">
          <img src={social3} alt="random" className="w-full aspect-square object-cover" />
          <div className="transform -skew-x-12 absolute bg-lemon-yellow w-[20%] h-[20%] top-[40%] left-[40%] flex items-center justify-center">
            <img src={youtube} className="w-2/5 aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
