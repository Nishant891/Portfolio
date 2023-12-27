"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full z-20 flex items-center justify-center rounded-none border border-gray-300 border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:w-9/12 sm:rounded-full md:w-7/12 lg:w-5/12"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex w-full flex-wrap items-center justify-center text-gray-600 gap-3 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => {
            return (
              <li
                className="flex items-center justify-center m-0"
                key={link.hash}
              >
                <Link
                  className="flex items-center justify-center rounded-full px-2 py-2 hover:text-gray-950 transition"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          
        </ul>
      </motion.div>
    </header>
  );
}
