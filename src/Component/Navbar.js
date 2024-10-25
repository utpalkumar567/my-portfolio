import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6 md:mr-72">
        <a href="/">
          <span className=" pl-12 font-mono text-2xl font-extrabold cursor-pointer">
            Utpal.Dev
          </span>
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm md:flex-grow md:flex md:justify-end">
          <a
            onClick={openNav}
            href="/"
            className="block py-2 text-lg font-bold md:px-4 md:inline-block md:mt-0"
          >
            Home
          </a>
          <a
            onClick={openNav}
            href="#about"
            className="block py-2 text-lg font-bold md:px-4 md:inline-block md:mt-0"
          >
            About
          </a>
          <a
            onClick={openNav}
            href="#project"
            className="block py-2 text-lg font-bold md:px-4 md:inline-block md:mt-0"
          >
            Project
          </a>
          <a
            onClick={openNav}
            href="#contact"
            className="block py-2 text-lg font-bold md:px-4 md:inline-block md:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
