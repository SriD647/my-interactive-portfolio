import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Resume", link: "resume" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full my-8 max-w-7xl mb-12 mt-2 sticky top-0 bg-[#1a1a29] z-50">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <span className="text-white hover:text-primary ">Sri's portfolio</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-2 cursor-pointer md:hidden w-10 h-10 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-primary cursor-pointer duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
