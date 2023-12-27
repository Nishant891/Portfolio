"use client";
import React from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";

const Intro = () => {
  return (
    <div
      id="home"
      className="h-5/6 w-full mt-[8.5rem] mb-16 sm:mb-28 sm:mt-0 lg:mt-0 lg:w-9/12 lg:h-[60vh] flex flex-col justify-center items-center lg:flex-row scroll-mt-28"
    >
      <div className="w-9/12 h-2/3 order-2 mt-3 lg:w-1/2 lg:h-full lg:order-1 p-2 mb-2 flex-col justify-center items-center">
        <motion.h1
          className="w-full h-full lg:text-2xl font-medium sm:text-4xl flex flex-col justify-center text-center lg:text-start "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold text-2xl sm:text-4xl md:text-4xl mb-4">
            Hello, I&apos;m Nishant.
          </span>
          <span className="font-bold text-xl sm:text-3xl md:text-3xl mb-3">
            I am an <span className="text-green-500">Indie Hacker</span> and a{" "}
            <span className="text-red-500">Ronin</span>(Freelancer).
          </span>
          <span className="italic text-lg sm:text-xl md:text-3xl">
            I like to learn and apply.
          </span>
          <div className="h-auto lg:w-1/2 w-full mt-4 flex lg:justify-start justify-center items-center gap-3 text-center lg:text-start text-lg sm:text-xl md:text-2xl">
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
              href="https://github.com/Nishant891"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="GitHub"
              data-tooltip-place="bottom"
            >
              <FaGithub />
            </motion.a>
            <Tooltip id="github-tooltip" className="text-sm" />
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.3,
                duration: 0.7,
              }}
              href="https://twitter.com/home"
              data-tooltip-id="twitter-tooltip"
              data-tooltip-content="Twitter"
              data-tooltip-place="bottom"
            >
              <FaXTwitter />
            </motion.a>
            <Tooltip id="twitter-tooltip" className="text-sm" />
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.5,
                duration: 0.7,
              }}
              href="https://www.linkedin.com/in/nishant-sharma-771653245/"
              data-tooltip-id="linkedIn-tooltip"
              data-tooltip-content="LinkedIn"
              data-tooltip-place="bottom"
            >
              <FaLinkedin />
            </motion.a>
            <Tooltip id="linkedIn-tooltip" className="text-sm" />
            <a href="/Resume.pdf" target="blank">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.7,
                  duration: 0.7,
                }}
                className="w-[5.8rem] h-[2.5rem] flex flex-row justify-center items-center gap-1 font-bold text-sm rounded-sm ml-2 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-hover"
              >
                Resume
                <FaFileDownload />
              </motion.button>
            </a>
          </div>
        </motion.h1>
      </div>
      <div className="w-full h-1/2 order-1 lg:w-1/2 lg:h-full lg:order-2 p-2 flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="Profile Picture"
              quality={95}
              className="w-[16rem] h-[16rem] rounded-full border-4 border-gray-300 object-cover shadow-lg shadow-black/[0.03]"
              src="/profilePic.jpg"
              width={16*16} 
              height={16*16}
            ></Image>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-7xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
