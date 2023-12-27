"use client";

import React from "react";
import { tags } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const MidPoint = Math.ceil(tags.length / 2);
  const FirstHalve = tags.slice(0, MidPoint);
  const SecondHalve = tags.slice(MidPoint);
  return (
    <section
      id="skills"
      className="mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-20"
    >
      <h1 className="text-3xl mb-6 font-bold">My skills</h1>
      <div className="mt-10 max-w-[53rem] flex flex-col sm:flex-row">
        <div className="max-w-full sm:max-w-[50%] sm:p-6 sm:m-4">
          <ul className="">
            {FirstHalve.map((skill, index) => (
              <motion.li
                className="px-5 py-3 font-bold text-lg text-gray-950 dark:text-gray-50 flex gap-2 items-center"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <skill.icon size={26}/>
                <span className="text-sm sm:text-lg">{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="max-w-full sm:max-w-[50%] sm:p-6 sm:m-4">
          <ul className="">
            {SecondHalve.map((skill, index) => (
              <motion.li
                className="px-5 py-3 font-bold text-lg text-gray-950 dark:text-gray-50 flex gap-2 items-center whitespace-nowrap"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <skill.icon size={26} />
                <span className="text-sm sm:text-lg">{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
