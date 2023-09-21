import React from "react";
import { ProjectsDeployed, Technologies } from "./Details";
import GitHub from '../assets/github.png';
import Deploy from '../assets/icons/deploy.png';

const Projects = () => {
  const gradientStyle = {
    background:
      "-webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const projectCardStyle = {
    width: "400px",
    height: "450px",
    background: '#1e1e2a',
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.9)"
  };

  return (
    <div className="md:px-10 px-7 my-20 bg-[#1a1a29] flex flex-col items-center justify-center">
      <h1 className="text-primary font-semibold text-2xl mt-5 pt-15">PROJECTS</h1>
      <p className="text-header mb-4 pt-5" style={{ fontSize: "1.2rem" }}>
        The following are my current projects. Each one of them has
        played a significant role in my growth as a coder.
      </p>
      <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        {ProjectsDeployed.map((project, index) => (
          <div
            key={index}
            className="text-center rounded-lg mt-2 pt-4 mr-50 shadow-lg"
            style={{
              ...projectCardStyle,
              maxHeight: "450px",
            
            }}
          >
            <h2 className="text-primary text-xl font-semibold mb-2">
              {project.name}
            </h2>
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              style={{ width: '100%' }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-auto h-40 mx-auto rounded transform group-hover:scale-105 transition duration-300"
                style={{ border: "2px solid black", width: "85%" }} // Specify the border size and style here
              />
            </a>
            <div className="flex justify-center pt-4 pb-2">
              {project.technologies.map((tech, techIndex) => (
                <img
                  key={techIndex}
                  src={Technologies.find(tech0 => tech0.name === tech).icon}
                  alt={tech.name}
                  className="w-10 h-10 mr-5"
                />
              ))}
            </div>
            <p className="text-purple-100 text-left text-sm px-2 mt-2">
              {project.description}
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mr-2 text-sm"
              >
                <img
                  src={GitHub}
                  className="w-8 h-8 mx-auto transform hover:scale-110"
                />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                <img
                  src={Deploy}
                  className="w-12 h-12 mx-auto transform hover:scale-110 transform -translate-y-1.5"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div id="contact"></div>
    </div>
  );
};

export default Projects;