import React from "react";
import { Details } from "./Details";
import coding from "../assets/coding.png";
import dumbbell from "../assets/dumbbell.jpeg";
import humanity from "../assets/humanity.png";

const About = () => {
  return (
    <div className="md:px-10 px-7 my-20 bg-[#1a1a29]" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        {Details.description}
      </p>

      <div className="flex flex-col items-end" style={{ transform: 'translateY(-100%),translateX(-500%)'}}>
        <img
          src={coding}
          alt=""
          className="rounded-full w-20 h-20 mb-4"
        />
        <img
          src={dumbbell}
          alt=""
          className="rounded-full w-20 h-20 mb-4"
        />
        <img
          src={humanity}
          alt=""
          className="rounded-full w-20 h-20 mb-4"
        />
      </div>

      <div className="h-10 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
};

export default About;
