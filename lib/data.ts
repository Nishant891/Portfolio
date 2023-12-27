import Chess from "@/public/Chess.png";
import CodingFlux from "@/public/CodingFlux.png";
import DNKExportEase from "@/public/DNKExportEase.png";
import SNAP from "@/public/SNAP.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaFileCode,
  FaJava,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFramer,
  SiMysql,
  SiAppwrite,
  SiCodemirror,
  SiSocketdotio,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const tags = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    name: "JAVASCRIPT",
    icon: IoLogoJavascript,
  },
  {
    name: "REACTJS",
    icon: FaReact,
  },
  {
    name: "NEXTJS",
    icon: TbBrandNextjs,
  },
  {
    name: "TAILWINDCSS",
    icon: SiTailwindcss,
  },
  {
    name: "TYPESCRIPT",
    icon: SiTypescript,
  },
  {
    name: "NODEJS",
    icon: FaNodeJs,
  },
  {
    name: "EXPRESSJS",
    icon: SiExpress,
  },
  {
    name: "APPWRITE",
    icon: SiAppwrite,
  },
  {
    name: "MYSQL",
    icon: SiMysql,
  },
  {
    name: "MONGODB",
    icon: DiMongodb,
  },
  {
    name: "GIT",
    icon: FaGitAlt,
  },
  {
    name: "PYTHON",
    icon: FaPython,
  },
  {
    name: "JAVA",
    icon: FaJava,
  },
  {
    name: "C/C++",
    icon: FaFileCode,
  },
  {
    name: "SOCKET.IO",
    icon: SiSocketdotio,
  },
  {
    name: "CODEMIRROR",
    icon: SiCodemirror,
  },
  {
    name: "FRAMER MOTION",
    icon: SiFramer,
  },
];

export const projectsData = [
  {
    id: 1,
    title: "DNK ExportEase",
    status: "Ongoing",
    description: "It is a unique ecommerce platform with special focus on creating a seller's identity. I participated and won 3rd prize at our college hackathon with this project. I work on it in my free time and use it to learn TypeScript, MongoDB, Redis, etc.",
    tech_stack: ["nextjs", "reactjs", "typescript", "tailwindcss", "mongodb", "expressjs", "git"],
    Url: DNKExportEase,
    githubLink: "https://github.com/Nishant891/DNKExportEase-Frontend",
    extraLink: "https://github.com/Nishant891/DNKExportEase-Frontend",
  },
  {
    id: 2,
    title: "CodingFlux",
    status: "Done",
    description: "Learned a lot from this project, from React, Websockets, Fromik, Codemirror Editor, Express to Responsive design and Hosting. I participated with this project in 3 hackathons. My best project so far and well-documented.",
    tech_stack: ["reactjs", "javascript", "tailwindcss", "appwrite", "expressjs", "codemirror", "socket.io", "git"],
    Url: CodingFlux,
    githubLink: "https://github.com/Nishant891/CodingFlux",
    extraLink: "https://codingflux.vercel.app",
  },
  {
    id: 3,
    title: "Chess-Frontend",
    status: "Done",
    description:
      "I wanted to build this as a platform for people to play chess and other games. I learned to create a full fledged login/signup system with cookie sessions and used react-chesboard with chess.js.",
    tech_stack: ["reactjs", "javascript", "tailwindcss", "expressjs", "mysql", "git"],
    Url: Chess,
    githubLink: "https://github.com/Nishant891/chess",
    extraLink: "https://www.loom.com/share/3bde2cb19f884f118bddc19e3a8e150f?sid=433cafc7-0785-49b5-b9df-41c9ff8f497d",
  },
  {
    id: 4,
    title: "SNAP",
    status: "Done",
    description:
      "I created this chatbot during intel openVINO hackathon. I used Natural Language Processing and created this with very minimum training dataset. I will train it with more data and host it online using flask.",
    tech_stack: ["python", "git"],
    Url: SNAP,
    githubLink: "https://github.com/Nishant891/ChatBot",
    extraLink: "https://github.com/Nishant891/ChatBot",
  },
];