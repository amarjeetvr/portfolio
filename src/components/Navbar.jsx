import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBriefcase } from "react-icons/hi";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { LOGO2 } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 
        ${scrolled ? "backdrop-blur-sm" : "bg-transparent"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Title */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Full Stack Developer | DevOps Engineer
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          <a href="/amar%20resume%20(1).pdf" download="amar resume .pdf">
            <button
              className={`${
                active === "resume" ? "abhishek" : "abhishek-btn"
              } font-medium cursor-pointer border-[1px]`}
              onClick={() => setActive("resume")}
            >
              <span className="flex items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Resume
              </span>
            </button>
          </a>

          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <a href="/amar%20resume%20(1).pdf" download="amar resume (1).pdf">
                <button
                  className={`${
                    active === "resume" ? "abhishek" : "abhishek-btn"
                  } font-medium cursor-pointer border-[1px]`}
                  onClick={() => {
                    setActive("resume");
                    setToggle(false);
                  }}
                >
                  <span className="flex items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    Download Resume
                  </span>
                </button>
              </a>

              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
