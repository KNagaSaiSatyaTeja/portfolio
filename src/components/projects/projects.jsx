import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Quiz Website",
    description:
      "An interactive quiz website that offers engaging quizzes, instant feedback, and progress tracking for a fun learning experience. ",
    image: "/quiz.png",
    github: "https://github.com/KNagaSaiSatyaTeja/quiz-app",
    liveDemo: "https://knagasaisatyateja.github.io/quiz-app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    image: "/portfolio.png",
    github: "https://github.com/KNagaSaiSatyaTeja/portfolio",
    liveDemo: "https://knagasaisatyateja.github.io/portfolio/",
  },
];

export default function Projects() {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white py-17 px-6 md:px-20"
      id="projects"
    >
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
