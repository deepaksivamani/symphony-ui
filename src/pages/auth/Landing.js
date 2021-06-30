import React from "react";

const Landing = () => {
  return (
    <div class="flex justify-between items-center h-calc ">
      <div class="card-body">
        <div class="bg-white shadow-none lg:shadow-lg">
          <div class="hidden lg:block bg-primary w-full p-8 text-center">
            <h3 class="text-white text-2xl al">
              How to get started
              <img
                src="../public/images/close.svg"
                class="float-right w-4 mt-2"
              />
            </h3>
          </div>
          <div
            id="slider"
            class="swiper-container w-full lg:h-500 h-screen relative pb-12"
          >
            <div class="swiper-wrapper  ">
              {/* Slider - 1 */}
              <div class="swiper-slide bg-cover bg-center">
                <div class="block p-4 lg:p-20 text-center w-full h-screen lg:h-auto flex lg:block items-center">
                  <div class="onboarding">
                    <img
                      src={
                        require("../../assets/images/onboarding.jpeg").default
                      }
                    />
                    <h3 class="onboarding-title">Welcome to Symphony</h3>
                    <p class="onboarding-para">
                      Symphony is platform to allow music artists to create
                      microsites and run ads automatically.
                    </p>
                  </div>
                </div>
              </div>
              {/* Slide-2 */}
              
            </div>
            {/* <div class="d-hidden md:d-flex swiper-button-prev bg-white w-16 h-16 text-xs rounded-full text-bg-primary"></div>
            <div class="d-hidden md:d-flex swiper-button-next bg-white w-16 h-16 text-xs rounded-full text-bg-primary"></div>
            <div class="bottom-24 swiper-pagination"></div> */}
            {/* Button  */}
            <div class="text-center absolute w-full bottom-0 mb-5 px-4">
              <button class="btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
