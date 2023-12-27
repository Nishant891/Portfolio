import React from "react";
import { Tooltip } from "react-tooltip";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-2 border-slate-300 w-10/12 p-4 flex flex-col items-center justify-center gap-2">
      <small className="mt-10">&copy; 2023 Nishant. All rights reserved.</small>
      <div className="h-auto text-3xl w-full mt-4 flex justify-center items-center gap-3 text-center">
        <a href="https://github.com/Nishant891">
          <FaGithub />
        </a>

        <a href="https://twitter.com/home">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/nishant-sharma-771653245/">
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-4 mb-10">
        This personel portfolio is made using <span className="font-bold">NextJS, ReactJS, TailwindCSS, TypeScript, Framer Motion</span> and <span className="font-bold">Resend</span>.
      </p>
    </footer>
  );
};

export default Footer;
