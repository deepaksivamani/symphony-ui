import React from "react";
import symphonyLogo from "../assets/images/symphonyLogo.svg";
import dashboardIcon from "../assets/images/dashboardIcon.svg";
import profileIcon from "../assets/images/profileIcon.svg";
import marketingIcon from "../assets/images/marketingIcon.svg";
import websiteIcon from "../assets/images/websiteIcon.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed top-0 w-full">
      <section className="hidden lg:block py-4 px-4 lg:px-10 bg-primary">
        <nav className="relative flex justify-between items-center">
          <a className="text-2xl text-white font-bold" href="#">
            <img src={symphonyLogo} width={"auto"} className="h-7" alt="logo" />
          </a>
          <div className="lg:hidden">
            <button className="p-2 navbar-burger">
              <svg
                className="w-10 h-3"
                width="39"
                height="13"
                viewBox="0 0 39 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
                <rect
                  x="19"
                  y="11"
                  width="20"
                  height="2"
                  rx="1"
                  fill="#C4C4C4"
                ></rect>
              </svg>
            </button>
          </div>
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <ul className="flex items-center text-white space-x-10">
              <li>
                <a
                  className="text-white font-bold text-lg flex justify-between items-center"
                  href="/dashboard"
                >
                  <span>
                    <img
                      className="w-8 mr-5"
                      src={dashboardIcon}
                      alt=""
                      width={"auto"}
                      height={"auto"}
                    />
                  </span>
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  className="text-white font-bold text-lg flex justify-between items-center"
                  href="/profile"
                >
                  <span>
                    <img
                      className="w-8 mr-5"
                      src={profileIcon}
                      alt=""
                      width={"auto"}
                      height={"auto"}
                    />
                  </span>
                  Profile
                </a>
              </li>

              <li>
                <a
                  className="text-white font-bold text-lg flex justify-between items-center"
                  href="/marketing"
                >
                  <span>
                    <img
                      className="w-8 mr-5"
                      src={marketingIcon}
                      alt=""
                      width={"auto"}
                      height={"auto"}
                    />
                  </span>
                  Marketing
                </a>
              </li>

              <li>
                <a
                  className="text-white font-bold text-lg flex justify-between items-center"
                  href="/website"
                >
                  <span>
                    <img
                      className="w-8 mr-5"
                      src={websiteIcon}
                      alt=""
                      width={"auto"}
                      height={"auto"}
                    />
                  </span>
                  Website
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <div className="opacity-100 py-4" style={{background: '#F2F2F2'}}></div>
    </div>
  );
};

export default Navbar;
