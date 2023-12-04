import React from "react";
import heroBackground from "../assets/images/hero-background.svg";
import Button from "../components/Button";
import deadlift from "../assets/images/deadlift.png";

const Hero = () => {
  return (
    <section className=" h-screen">
      <div className=" h-screen absolute right-0">
        <img src={heroBackground} alt="Hero Background" className="h-[100%]" />
      </div>
      <div className="flex h-full justify-center flex-col">
        <h1 className="text-7xl relative z-10 leading-tight uppercase font-anton max-md:text-6xl max-md:leading-tight max-sm:text-4xl">
          <span className="text-2xl text-lemon-yellow">Welcome To the</span>
          <br /> <span className="line-through decoration-lemon-yellow">Most wanted</span> <br /> Online
          Personal <br /> Training
        </h1>
        <div className="mt-6 relative z-10">
          <Button label="Join Now" arrow={true} />
        </div>
        <div className="w-[45%] absolute right-10 bottom-0  max-lg:hidden">
          <img src={deadlift} alt="man deadlifting" className="w-full overflow-clip" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
