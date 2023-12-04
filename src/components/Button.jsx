import React from "react";
import rightArrow from "../assets/icons/right-arrow.svg";

const Button = (props) => {
  return (
    <button className=" flex items-center gap-2 bg-lemon-yellow text-black rounded-full py-2 px-4 font-anton uppercase">
      {props.label}
      {props.arrow && <img src={rightArrow} alt="right arrow" className="w-4" />}
    </button>
  );
};

export default Button;
