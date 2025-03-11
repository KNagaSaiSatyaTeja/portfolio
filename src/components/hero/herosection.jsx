import React, { useState, useEffect } from "react";
import me from "../../../public/assets/me.png";
import resume from "../../../public/assets/Naga Sai Resume.pdf";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import "./herosection.css";

const words = ["AI Enthusiast", "Tech Explorer", "Full Stack Developer"];

export default function Herosection() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 80 : 190;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setWordIndex((prev) => (prev + 1) % words.length);
          setCharIndex(0);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div
      className="h-screen mt-3  p-8  md:p-18 md:h-auto flex flex-col md:flex-row items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="w-full md:w-3/6 font-mono  text-white text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-2xl md:text-4xl md:mb-4 italic">
          Hi, I am
          <b>
            <i> K. Naga Sai Satya Teja</i>
          </b>
        </h1>
        <p className="text-lg  md:text-2xl mt-4 p-3 border rounded-lg bg-opacity-10 w-full">
          I am a student passionate about learning and growing into a skilled
          <span className="font-bold"> full-stack developer</span>. I'm eager to
          build dynamic web applications, enhance my coding skills, and stay
          updated with the latest technologies.
        </p>
        <h1 className="text-2xl font-bold text-red-700 bg-black rounded-xl w-full md:w-2/3 mx-auto p-2 mt-4">
          {text}
          <span className="animate-blink">|</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6 gap-3 w-full">
          <a
            href={resume}
            download
            className="rounded-full w-full hover:py-4 hover:px-8 hover:bg-transparent hover:border-2 md:w-auto bg-purple-600 md:mx-auto px-6 py-3 flex items-center justify-center gap-2"
          >
            Resume <ArrowDownTrayIcon className="h-6" />
          </a>
          <a
            href="#contact"
            className="rounded-full w-full md:w-auto bg-purple-600 md:mx-auto px-6 py-3 text-center hover:py-4 hover:px-8 hover:bg-transparent hover:border-2"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="hidden md:flex md:w-3/6 md:p-6  justify-center md:h-full items-center">
        <img src={me} className="h-auto max-w-full object-contain" alt="Me" />
      </div>
    </div>
  );
}
