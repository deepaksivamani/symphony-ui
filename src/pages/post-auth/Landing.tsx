import React from "react";

const Landing = () => {
  return (
    <div className="flex justify-between items-center h-calc mt-14">
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
          <div
            id="slider"
            className="swiper-container w-full lg:h-500 h-screen relative pb-12"
          >
            <div className="swiper-wrapper  ">
              {/* Slider - 1 */}
              <div className="swiper-slide bg-cover bg-center">
                <div className="block p-4 lg:p-20 text-center w-full h-screen lg:h-auto flex lg:block items-center">
                  <div className="onboarding">
                    <img
                      src={
                        require("../../assets/images/onboarding.jpeg").default
                      }
                    />
                    <h3 className="onboarding-title">Welcome to Symphony</h3>
                    <p className="onboarding-para">
                      Symphony is platform to allow music artists to create
                      microsites and run ads automatically.
                    </p>
                  </div>
                </div>
              </div>
              {/* Slide-2 */}
              
            </div>
            {/* <div className="d-hidden md:d-flex swiper-button-prev bg-white w-16 h-16 text-xs rounded-full text-bg-primary"></div>
            <div className="d-hidden md:d-flex swiper-button-next bg-white w-16 h-16 text-xs rounded-full text-bg-primary"></div>
            <div className="bottom-24 swiper-pagination"></div> */}
            {/* Button  */}
            <div className="text-center absolute w-full bottom-0 mb-5 px-4">
              <button className="btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
