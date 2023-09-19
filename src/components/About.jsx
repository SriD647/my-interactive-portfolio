import React from "react";
import { personalDetails } from './Details';
import coding from "../assets/coding.png";
import dumbbell from "../assets/dumbbell.jpeg";
import humanity from "../assets/humanity.png";

const About = () => {

  return (
    <div className="md:px-10 px-7 my-20 bg-[#1a1a29]" id="about">
      <div className="flex flex-row">
        <div className="my-3 text-white md:w-2/3 leading-[2]">
          <h1 className="text-primary font-semibold text-2xl mt-5" style={{ paddingBottom: '2%' }}>ABOUT ME</h1>
          <p style={{fontSize: '1.2rem'}}>{personalDetails.description}</p>
        </div>

        <div className="flex flex-col items-end" style={{ transform: 'translate(190%, 20%)' }}>
          <a href={personalDetails.gA} target="_blank" rel="noopener noreferrer">
            <img
              src={coding}
              alt=""
              className="w-20 h-20 mb-8 transform hover:scale-110"
            />
          </a>
          <a href={personalDetails.youtube} target="_blank" rel="noopener noreferrer">
            <img
              src={dumbbell}
              alt=""
              className=" rounded-full w-20 h-20 mb-8 transform hover:scale-110"
            />
          </a>
          <a href={personalDetails.aol} target="_blank" rel="noopener noreferrer">
            <img
              src={humanity}
              alt=""
              className="w-20 h-20 mb-8 transform hover:scale-110"
            />
          </a>
        </div>
      </div>

      <div className="h-10 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
};

export default About;