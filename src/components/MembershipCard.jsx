import React from "react";
import logo from "../assets/images/headerLogo.png";
import Button from "../components/Button";

const MembershipCard = (props) => {
  return (
    <div className="  border-2 border-lemon-yellow w-[30%] max-lg:w-[47%] max-sm:w-full">
      <div className=" bg-hero bg-cover bg-center px-4 py-6">
        <img src={logo} alt="logo" className="w-16 " />
        <p className="font-anton uppercase text-4xl text-lemon-yellow mt-24">{props.tier.title}</p>
      </div>
      <div className=" flex p-4 bg-white justify-between items-center">
        <div>
          <p className="uppercase text-gray-dk font-inter text-sm mb-2">prices start from </p>
          <p className="uppercase text-black font-inter text-sm">{props.tier.price}</p>
        </div>
        <div>
          <Button label="select" arrow={true} />
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
