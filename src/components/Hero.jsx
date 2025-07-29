import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { TicoCanvas } from "./canvas";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import {
  BsTwitter,
  BsGithub,
  BsDiscord,
    BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
     "MERN Stack Developer",
  "DevOps & CI/CD Enthusiast",
  "Tech Innovator & Problem Solver",
  "Code + Fitness Driven",
  "Gaming & Logic Lover",
  "Always Exploring Tech",
  "Elegant Full-Stack Builder",
  "In Code We Trust",
  "Pixels by Day, Lifts by Night",
  "JS to Java — Fluent Thinker",
  "Web Builder, Line by Line"
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"></div>
          <div className="w-1 sm:h-80 h-40 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              Amarjeet <span className="hidden sm:inline">Verma</span>
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 sm:-mb-10 text-white-100 max-w-lg`}>
            {text}
            <Cursor cursorColor="#915eff" />
          </p>
        </div>
      </div>

      <TicoCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center md:mt-10 mt-5 md:gap-12">
        <Link target="_blank" to="https://www.linkedin.com/in/amarjeet-verma-3725a4288/">
          <BsLinkedin size={30} className="icon hover:text-[#0e76a8] hover:-translate-y-1 transition-all duration-100" />
        </Link>

        <Link target="_blank" to="https://github.com/amarjeetvr">
          <BsGithub size={30} className="icon hover:text-[#494646] hover:-translate-y-1 transition-all duration-100" />
        </Link>

        <Link target="_blank" to="https://x.com/Amarjeet4575">
          <BsTwitter size={30} className="icon hover:text-[#1DA1F2] hover:-translate-y-1 transition-all duration-100" />
        </Link>


   <Link target="_blank" to="https://www.youtube.com/@AMAR_888_YT">
    <BsYoutube
      size={30}
      className="icon hover:text-[#FF0000] hover:-translate-y-1 transition-all duration-100"
    />
  </Link>

        <Link target="_blank" to="https://www.instagram.com/the_amar._/">
          <BsInstagram size={30} className="icon hover:text-[#E1306C] hover:-translate-y-1 transition-all duration-100" />
        </Link>

        <Link target="_blank" to="https://www.facebook.com/amarjeet.verma.98229241">
          <BsFacebook size={30} className="icon hover:text-[#1877F2] hover:-translate-y-1 transition-all duration-100" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
