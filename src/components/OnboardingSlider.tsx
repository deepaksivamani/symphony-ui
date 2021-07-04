import React, { Component } from "react";
import Slider from "react-slick";

interface OnboardingSliderProps {

}

export const OnboardingSlider: React.FC<OnboardingSliderProps> = ({}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
        return (
            <div>
            <Slider {...settings}>
              <div>
              <div className="onboarding">
                    <img
                      src={
                        require("../assets/images/onboarding.jpeg").default
                      }
                    />
                    <h3 className="onboarding-title">Welcome to Symphony</h3>
                    <p className="onboarding-para">
                      Symphony is platform to allow music artists to create
                      microsites and run ads automatically.
                    </p>
                  </div>
              </div>
              <div>
              <div className="onboarding">
                    <img
                      src={
                        require("../assets/images/onboarding.jpeg").default
                      }
                    />
                    <h3 className="onboarding-title">Welcome to Symphony</h3>
                    <p className="onboarding-para">
                      Symphony is platform to allow music artists to create
                      microsites and run ads automatically.
                    </p>
                  </div>
              </div>
              <div>
              <div className="onboarding">
                    <img
                      src={
                        require("../assets/images/onboarding.jpeg").default
                      }
                    />
                    <h3 className="onboarding-title">Welcome to Symphony</h3>
                    <p className="onboarding-para">
                      Symphony is platform to allow music artists to create
                      microsites and run ads automatically.
                    </p>
                  </div>
              </div>
              <div>
              <div className="onboarding">
                    <img
                      src={
                        require("../assets/images/onboarding.jpeg").default
                      }
                    />
                    <h3 className="onboarding-title">Welcome to Symphony</h3>
                    <p className="onboarding-para">
                      Symphony is platform to allow music artists to create
                      microsites and run ads automatically.
                    </p>
                  </div>
              </div>
            </Slider>
          </div>
        );
}