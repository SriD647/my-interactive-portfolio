import React from "react";

const Footer = () => {
  return (
    <div className="w-full my-3 max-w-7xl bg-[#1a1a29]">
      <div className="text-white opacity-50 grid grid-cols-1 sm:grid-cols-4 gap-10 justify-center items-center  pt-7 pb-5">
        <p className="text-center">Copyright © 2023 | Sri Rao</p>
        <p className="hidden sm:block text-center">Full-Stack Engineer</p>
        <p className="hidden sm:block text-center">Humanitarian</p>
        <p className="hidden sm:block text-center">Fitness Enthusiast</p>
      </div>
    </div>
  );
};

export default Footer;

