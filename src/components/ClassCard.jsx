import React from "react";

const ClassCard = (props) => {
  return (
    <div className="w-[28%] flex-none max-lg:w-[40%] max-sm:w-[85%]">
      <div className={`w-full h-[415px] ${props.bg} bg-cover bg-center`}></div>
      <h3 className="font-anton text-2xl uppercase my-5">{props.classInfo.title}</h3>
      <p className="text-gray-md font-inter text-sm w-[65%]">{props.classInfo.description}</p>
    </div>
  );
};

export default ClassCard;
