import React from "react";
import ReviewSlider from "../components/ReviewSlider";

const Testimonials = () => {
  return (
    <section>
      <h2 className="h2-style text-black">
        <span className="font-anton text-gray-400 text-opacity-100">/</span>
        <span className="font-anton text-gray-400 text-opacity-80">/</span>
        <span className="font-anton text-gray-400 text-opacity-60">/</span>
        <span className="font-anton text-gray-400 text-opacity-40 mr-4">/</span>
        What they say
      </h2>
      <p className="my-10 font-inter text-black text-md max-sm:text-md w-[430px] max-sm:w-auto">
        Gaine up your routine with our growing library of workouts led by our world-class trainers
      </p>
      <div>
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Testimonials;
