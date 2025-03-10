import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMysql, SiPython, SiCplusplus, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "90%" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "85%" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-500" />,
    level: "80%",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    level: "90%",
  },
  { name: "React", icon: <FaReact className="text-blue-400" />, level: "95%" },
  {
    name: "C/C++",
    icon: <SiCplusplus className="text-blue-500" />,
    level: "70%",
  },
  {
    name: "Python",
    icon: <SiPython className="" />,
    level: "70%",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    level: "70%",
  },
  {
    name: "SQL",
    icon: <SiMysql className="text-gray-900" />,
    level: "65%",
  },
];

export default function Skills() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center   px-6 md:px-20 py-12 md:py-24"
      id="skils"
    >
      <h1 className="text-4xl md:text-6xl font-bold italic mb-10 text-white">
        My Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 shadow-lg rounded-xl"
          >
            <div className="text-6xl">{skill.icon}</div>
            <h2 className="text-xl font-bold mt-4">{skill.name}</h2>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
