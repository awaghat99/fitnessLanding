import React from "react";
import headerLogo from "../assets/images/headerLogo.png";
import { footerLinks } from "../constants";
import Button from "../components/Button";
import tik from "../assets/icons/tik.svg";
import ig from "../assets/icons/ig.svg";

const Footer = () => {
  return (
    <footer className="flex flex-wrap max-lg:flex-col">
      <div className="w-[45%] pl-8 max-lg:w-full max-lg:pt-6 max-lg:border-b-2 max-lg:border-b-lemon-yellow max-lg:pb-6">
        <h2 className="h2-style">Gain Your Change Now!</h2>
        <p className="my-10 font-inter text-gray-md text-md max-sm:text-md w-[430px] max-sm:w-auto">
          Gaine up your routine with our growing library of workouts led by our world-class trainers
        </p>
        <Button label="Join Now" arrow="true" />
      </div>
      <div className="w-[55%] border-l-2 border-lemon-yellow flex justify-between px-10 max-lg:pt-6 max-lg:px-2 max-lg:w-full max-lg:border-l-0 ">
        <img src={headerLogo} className="w-16 h-20" />
        <div className="pr-14 max-lg:pr-0">
          {footerLinks.map((link, index) => {
            return (
              <p key={index} className="font-inter leading-loose">
                {link.text}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between w-full mt-36 text-xs font-inter text-gray-dk uppercase leading-loose">
        <div className="max-lg:w-2/3">
          <p>Copyight &copy; 2023 RayClub. All rights reserved</p>
          <p>Terms of use Privacy policy</p>
        </div>
        <div className="flex pr-20 gap-x-6 max-lg:pr-2">
          <img src={tik} className="w-6 h-6 filter invert" />
          <img src={ig} className="w-6 h-6 filter invert" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
