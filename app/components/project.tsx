"use client";
import { StaticImageData } from "next/image";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll, motion } from "framer-motion";
import { tags } from "@/lib/data";
import { FaSquareGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { ReactNode } from "react";
import { Tooltip } from "react-tooltip";

type ProjectProps = {
  id: number;
  title: string;
  status: string;
  description: ReactNode;
  tech_stack: string[];
  Url: StaticImageData;
  githubLink: string;
  extraLink: string;
};

const Project = ({
  id,
  title,
  description,
  status,
  tech_stack,
  Url,
  githubLink,
  extraLink,
}: ProjectProps) => {
  const project_tag = tags.filter((tag) => {
    return tech_stack.includes(tag.name.toLowerCase());
  });
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <>
      <motion.section
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="group mt-14 sm:mt-10 gap-4 max-w-[45rem] max-h-[36rem] sm:h-[30rem] relative flex items-center justify-start even:justify-end"
      >
        <Link
          href={extraLink}
          className="max-w-[65%]  hidden sm:block"
        >
          <Image
            src={Url}
            alt="Project I worked on"
            quality={95}
            className="rounded-lg shadow-lg transition hover:scale-[1.01] hover:-translate-x-4 hover:-translate-y-4 group-even:hover:translate-x-4 group-even:hover:-translate-y-4 opacity-90"
          ></Image>
        </Link>
        <div className="group-even:left-0 items-end group-even:items-start max-w-[18rem] max-h-full sm:max-h-full sm:max-w-[20rem] sm:absolute sm:right-0 flex flex-col gap-5">
          <Link
            href={extraLink}
            className="flex justify-center items-center gap-2"
          >
            <h1 className="text-2xl font-semibold text-center hover:text-blue-600">
              {title}
            </h1>
            <span
              className={`${
                id == 1 ? "bg-blue-600" : "bg-green-500"
              } text-white px-2 rounded-3xl text-[12px] flex justify-center items-center gap-1 font-semibold`}
            >
              {" "}
              <GoDotFill />
              {status}
            </span>
          </Link>
          <p className="leading-relaxed text-gray-700 dark:text-gray-950 text-start sm:m-auto bg-white p-3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            {description}
          </p>
          <ul className="w-4/5 flex flex-wrap justify-end group-even:justify-start mt-4 gap-1 sm:mt-0">
            {project_tag.map((tag, index) => (
              <>
                <a
                  data-tooltip-id={`${tag.name}-tooltip`}
                  data-tooltip-content={`${tag.name}`}
                  data-tooltip-place="bottom"
                >
                  <li
                    className="px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full"
                    key={index}
                  >
                    <tag.icon size={26} />
                  </li>
                </a>
                <Tooltip id={`${tag.name}-tooltip`} />
              </>
            ))}
          </ul>
          <div className="flex flex-wrap justify-end mr-3 group-even:justify-start group-even:ml-3 mt-0 gap-3">
            <Link href={githubLink}>
              <FaSquareGithub size={30} />
            </Link>
            <Link href={extraLink}>
              <FaExternalLinkAlt size={27} />
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Project;
