import React from "react";
import Button from "../components/Button";
import mattProfile from "../assets/images/mattProfile.jpg";
import samanthaProfile from "../assets/images/samanthaProfile.jpg";
import alexProfile from "../assets/images/alexProfile.jpg";

const Community = () => {
  return (
    <section className="border-b-2 pb-24">
      <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-20">
        <div>
          <h2 className="h2-style">
            <span className="font-anton text-gray-400 text-opacity-100">/</span>
            <span className="font-anton text-gray-400 text-opacity-80">/</span>
            <span className="font-anton text-gray-400 text-opacity-60">/</span>
            <span className="font-anton text-gray-400 text-opacity-40 mr-4">/</span>
            Supportive Community
          </h2>
          <p className="my-10 font-inter text-gray-md text-md max-sm:text-md w-[430px] max-sm:w-auto">
            Stay motivated and engaged with a little help from a supportive community of other members
          </p>
          <Button label="Join Now" arrow={true} />
        </div>
        <div className="flex relative">
          <img
            src={mattProfile}
            alt="profile"
            className="w-44 h-44 max-md:w-28 max-md:h-28 border-4 border-black  rounded-full object-cover"
          />
          <img
            src={samanthaProfile}
            alt="profile"
            className="w-44 h-44 max-md:w-28 max-md:h-28  border-4 border-black rounded-full object-cover -ml-8"
          />
          <img
            src={alexProfile}
            alt="profile"
            className="w-44 h-44 max-md:w-28 max-md:h-28 border-4 border-black  rounded-full object-cover -ml-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
