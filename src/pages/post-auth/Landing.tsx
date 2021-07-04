import React from "react";
import { OnboardingSlider } from "../../components/OnboardingSlider";

const Landing = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card-body">
        <div className="bg-white shadow-none lg:shadow-lg">
          <div className="hidden lg:block bg-primary w-full p-8 text-center">
            <h3 className="text-white text-2xl al">
              How to get started
              <img
                src="../public/images/close.svg"
                className="float-right w-4 mt-2"
              />
            </h3>
          </div>
          <div className="relative pb-20 h-screen lg:h-auto pt-28 lg:pt-0">
            <div className="swiper-wrapper p-0 lg:p-16 ">
              <OnboardingSlider/>
              
            </div>
            {/* <div className="d-hidden md:d-flex swiper-button-prev bg-white w-16 h-16 text-xs rounded-full text-bg-primary"></div>
            <div className="d-hidden md:d-flex swiper-button-next bg-white w-16 h-16 text-xs rounded-full text-bg-primary"></div>
            <div className="bottom-24 swiper-pagination"></div> */}
            {/* Button  */}
            <div className="text-center absolute w-full bottom-10">
              <button className="btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
