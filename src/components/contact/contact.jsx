import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function ContactMe() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 px-6 py-20"
      id="contact"
    >
      <h1 className="text-5xl font-extrabold text-gray-100 mb-8">Contact Me</h1>
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center">
        <p className="text-lg text-gray-600 mb-6">
          Feel free to reach out for collaborations or any inquiries.
        </p>
        <div className="flex flex-col items-center space-y-6 text-gray-700">
          <div className="flex items-center md:gap-4 gap-2 bg-gray-200 md:px-6 px-2 py-3   rounded-lg shadow-md w-full max-w-md">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span className="md:text-xl  text-sm">nagasai.koli@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 bg-gray-200 px-6 py-3 rounded-lg shadow-md w-full max-w-md">
            <FaPhone className="text-green-500 text-2xl" />
            <span className="text-lg">+91 8328389425</span>
          </div>
          <div className="flex items-center gap-4 bg-gray-200 px-6 py-3 rounded-lg shadow-md w-full max-w-md">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span className="text-lg">Hyderabad, India</span>
          </div>
          <div className="flex items-center gap-4 bg-gray-200 px-6 py-3 rounded-lg shadow-md w-full max-w-md">
            <FaLinkedin className="text-blue-700 text-2xl" />
            <a
              href="https://www.linkedin.com/in/kollimarla-naga-sai-satya-teja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4 bg-gray-200 px-6 py-3 rounded-lg shadow-md w-full max-w-md">
            <FaGithub className="text-gray-800 text-2xl" />
            <a
              href="https://github.com/KNagaSaiSatyaTeja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline text-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
