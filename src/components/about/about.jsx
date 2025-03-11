import React, { useState, useEffect } from "react";
import about_me from "../../../public/assets/about_me.png";
import "../hero/herosection.css";

const words = ["AI Enthusiast", "Tech Explorer", "Full Stack Developer"];

export default function About() {
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
      className="h-screen flex flex-col md:flex-row items-center justify-center text-white bg-gray-800 px-6 md:px-16 md:mt-10 py-12 md:py-20"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-center rounded-2xl bg-black w-full  border-2 p-3 md:mt-12">
        <div className="w-full md:w-3/6  flex flex-col items-center md:items-start text-center md:text-left animate-fadeIn">
          <h1 className="text-3xl md:text-5xl font-bold italic leading-tight">
            About :
            <br />
            <b>
              <i> K. Naga Sai Satya Teja</i>
            </b>
          </h1>
          <p className="text-lg md:text-2xl mt-6 p-4 border border-gray-300 rounded-lg shadow-lg bg-gray-800 w-full">
            I am a student passionate about learning and growing into a skilled
            <span className="font-bold"> full-stack developer</span>. I'm eager
            to build dynamic web applications, enhance my coding skills, and
            stay updated with the latest technologies.
          </p>
          <h1 className="text-2xl font-bold text-red-700 bg-gray-200 rounded-xl w-full md:w-2/3 mx-auto p-3 mt-6 shadow-md animate-pulse">
            {text}
            <span className="animate-blink">|</span>
          </h1>
        </div>
        <div className="hidden md:ms-7 md:h-full md:flex md:w-3/6 justify-center items-center rounded-2xl p-12 bg-none animate-slideIn">
          <img
            src={about_me}
            className="h-auto sho-2xl max-w-full object-contain rounded-3xl  shadow-black"
            alt="Me"
          />
        </div>
      </div>
    </div>
  );
}
