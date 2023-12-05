import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { testimonials } from "../constants";

const ReviewSlider = () => {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div>
      <Slide pauseOnHover={false} slidesToShow={1} slidesToScroll={1} responsive={responsiveSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className=" flex flex-col justify-between py-4 px-10 h-full">
            <div>
              <p className="font-anton uppercase text-3xl max-sm:text-xl">{testimonial.review}</p>
            </div>
            <div className="flex items-center mt-8">
              <img
                src={testimonial.profilePic}
                alt="profile"
                className="w-20 h-20 object-cover rounded-full"
              />
              <div className="ml-6">
                <p className="text-sm font-inter font-bold">{testimonial.name}</p>
                <p className="text-sm font-inter ">{testimonial.social}</p>
                <p className="text-sm font-inter ">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ReviewSlider;
