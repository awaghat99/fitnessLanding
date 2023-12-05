import React from "react";

const ClassCard = (props) => {
  return (
    <div className="w-[28%] flex-none max-lg:w-[40%] max-sm:w-[85%]">
      <div className={`w-full h-[415px] ${props.bg} bg-cover bg-center`}></div>
      <h2 className="h2-styles">{props.classInfo.title}</h2>
      <p>{props.classInfo.description}</p>
    </div>
  );
};

export default ClassCard;
