import React from "react";
import { membershipTiers } from "../constants";
import MembershipCard from "../components/MembershipCard";

const Membership = () => {
  return (
    <section>
      <h2 className="h2-style">
        <span className="font-anton text-gray-400 text-opacity-100">/</span>
        <span className="font-anton text-gray-400 text-opacity-80">/</span>
        <span className="font-anton text-gray-400 text-opacity-60">/</span>
        <span className="font-anton text-gray-400 text-opacity-40 mr-4">/</span>
        Membership
      </h2>
      <p className="my-10 font-inter text-gray-md text-md max-sm:text-md w-[430px] max-sm:w-auto">
        Gaine up your routine with our growing library of workouts led by our world-class trainers
      </p>
      <div className="flex w-full flex-wrap justify-between max-lg:justify-center max-lg:gap-6">
        {membershipTiers.map((tier, index) => {
          return <MembershipCard tier={tier} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Membership;
