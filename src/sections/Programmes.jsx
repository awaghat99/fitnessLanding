import React from "react";
import ClassCard from "../components/ClassCard";
import { classesInfo } from "../constants";

const Programmes = () => {
  return (
    <section className="mt-10">
      <h2 className="h2-style">
        <span className="font-anton text-gray-400 text-opacity-100">/</span>
        <span className="font-anton text-gray-400 text-opacity-80">/</span>
        <span className="font-anton text-gray-400 text-opacity-60">/</span>
        <span className="font-anton text-gray-400 text-opacity-40 mr-4">/</span>
        Our Programs
      </h2>
      <p className="my-10 font-inter text-gray-md text-md max-sm:text-md w-[430px] max-sm:w-auto">
        Gaine up your routine with our growing library of workouts led by our world-class trainers
      </p>
      <div className="flex gap-8 flex-nowrap overflow-x-scroll pt-8 pb-16 scrollbar">
        {classesInfo.map((classInfo, index) => {
          return <ClassCard classInfo={classInfo} key={index} bg={classInfo.imageExtension} />;
        })}
      </div>
    </section>
  );
};

export default Programmes;
