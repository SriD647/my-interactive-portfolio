import React from "react";
import { personalDetails } from './Details';
import coding from "../assets/coding.png";
import dumbbell from "../assets/dumbbell.jpeg";
import humanity from "../assets/humanity.png";

const About = () => {
  return (
    <div className="md:px-10 px-7 my-20 bg-[#1a1a29]" id="about">
      <div className="flex flex-col md:flex-row items-center width-full justify-center">
        <div className="my-3 text-white md:w-2/3 width-full leading-[2] text-center">
          <h1 className="text-primary font-semibold text-2xl mt-2" style={{ paddingBottom: '2%' }}>ABOUT ME</h1>
          <p className=" text-left pr-10 " style={{ fontSize: '1.2rem' }}>{personalDetails.description}</p>
        </div>
      </div>

      <div className="flex sd: flex-col md:flex-row justify-center md:space-x-4">
        <div className="mb-8 p-1 transform hover:scale-110 rounded-lg md:border border-purple-400  shadow-lg">
          <a href={personalDetails.gA} target="_blank" rel="noopener noreferrer">
          <div>
            <img
              src={coding}
              alt=""
              className="w-16 h-16"
            />
          </div>
          </a>

        </div>

        <div className="mb-8 p-1 transform hover:scale-110 rounded-lg md:border border-purple-400  shadow-lg">
          <a href={personalDetails.youtube} target="_blank" rel="noopener noreferrer">
          <div>
            <img
              src={dumbbell}
              alt=""
              className="w-16 h-16"
            />
            </div>
          </a>
        </div>

        <div className="mb-8 p-1 transform hover:scale-110 rounded-lg md:border border-purple-400  shadow-lg">
          <a href={personalDetails.aol} target="_blank" rel="noopener noreferrer">
          <div>
            <img
              src={humanity}
              alt=""
              className="w-16 h-16"
            />
            </div>
          </a>
        </div>
      </div>

      <div className="h-10 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block" id="skills"></div>
    </div>
  );
};

export default About;
