"use client";
import React from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

type Theme = "light" | "dark";

const Mode = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const theme = localStorage.getItem("theme") as Theme | null;
    if (theme) {
      setTheme(theme);
      if (theme === "light") {
        document.documentElement.classList.remove("dark");
      } else if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  },[]);
  return (
    <div>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.1,
          duration: 0.7,
        }}
        data-tooltip-id="theme-tooltip"
        data-tooltip-content="Select Theme"
        data-tooltip-place="bottom"
      
        
          className={` w-10 h-10 flex justify-center items-center rounded-full p-2 fixed bottom-2 sm:top-8 right-4 border-2 border-slate-300 hover:scale-[1.12] transition-all" ${
            theme === "light" ? "bg-slate-50" : "bg-gray-950"
          } `}
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
              window.localStorage.setItem("theme", "dark");
              document.documentElement.classList.add("dark");
            } else if (theme === "dark") {
              setTheme("light");
              window.localStorage.setItem("theme", "light");
              document.documentElement.classList.remove("dark");
            }
          }}
        >
          {theme === "light" ? (
            <span>
              <FaSun fill="black" />
            </span>
          ) : (
            <span>
              <FaMoon fill="white" />
            </span>
          )}
      </motion.button>
      <Tooltip id="theme-tooltip" className="text-sm" />
    </div>
  );
};

export default Mode;
