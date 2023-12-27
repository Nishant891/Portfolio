"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-16 sm:mb-20 max-w-[45rem] text-center leading-8 scroll-mt-28 p-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h1 className="text-3xl mb-6 font-bold">About me</h1>
      <p className="mb-3 mt-10">
        <span className="font-bold">
          I am currently pursuing a Bachelor&apos;s degree
        </span>{" "}
        in <span className="italic">Computer Science and Engineering.</span> In
        the early stages of my academic journey, I delved into{" "}
        <span className="underline">competitive programming</span>, honing my{" "}
        <span className="italic font-semibold">problem-solving skills</span>. I
        then developed a keen interest in understanding the underlying
        architecture, leading me to transition into{" "}
        <span className="text-blue-500">web development</span>. I learned{" "}
        <span className="text-green-500 font-bold">HTML, CSS, JavaScript</span>,
        and ventured into frameworks such as{" "}
        <span className="text-purple-500">
          React, Tailwind CSS, Node.js, and Next.js
        </span>
        . Actively participating in numerous hackathons, I&apos;ve been involved in
        creating projects that showcase my practical skills. I was a <span className="font-bold">Project Management Head</span>{" "}
        in the core group of <span className="underline">GDSC (Google Developer Students Club)</span>.
      </p>
      <p>
        Within the structured curriculum of my university, I explored the
        concepts of
        <span className="text-orange-500 font-bold">
          {" "}
          computer architecture,
        </span>{" "}
        <span className="text-red-500 font-bold">
          {" "}
          OOPs with Java
        </span>{" "}
        and learned about the inner workings of operating systems, with a
        particular focus on <span className="underline">Linux</span>, through
        hands-on practices. This academic foundation has provided me with a
        deeper understanding of the{" "}
        <span className="italic font-semibold">
          hardware-software interface
        </span>
        . My journey in programming began with{" "}
        <span className="text-yellow-500 italic font-bold">Python</span> during
        high school, where I built{" "}
        <span className="text-pink-500">face detection attendence system</span> and{" "}
        <span className="text-blue-500">chatbots</span>. Beyond web and system
        development, my interests extend to the realm of{" "}
        <span className="text-indigo-500">game development</span>. Utilizing{" "}
        <span className="text-blue-700">C++ and CMake</span>, I enjoy creating{" "}
        <span className="italic font-semibold">
          interactive and engaging games
        </span>
        , which aids me in building{" "}
        <span className="italic font-bold">
          logical thinking skills
        </span>
        .
      </p>
      <p>
        I am driven by a genuine curiosity for technology love for hands-on
        learning and commitment to creating meaningful solutions.
      </p>
    </motion.section>
  );
}
