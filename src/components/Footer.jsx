
import React, { useState } from "react";
import { LOGO2 } from "../assets";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="mb-4 sm:mb-0"
        >
         
        </Link>
        <p className="text-secondary text-[17px] leading-[30px] text-center select-none sm:ml-4">
          {new Date().getFullYear()} &copy; Created Amarjeet Verma. All rights
          reserved.
        </p>
      </div>
      <div className="w-full h-auto flex justify-center text-purple-500 font-bold self-start text-2xl mt-4 sm:mt-6">
        <Typewriter
          text={["Thank's for visiting!", "Download my resume!", "Love to Code"]}
          loop
          speed={80}
          cursor={false}
        />
      </div>
    </div>
  );
};

export default Footer;
