import React, { useState } from "react";

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex place-content-between py-6 shadow-lg">
      <a href="/">
        <span className=" pl-12 font-mono text-2xl font-extrabold cursor-pointer">
          Utpal.Dev
        </span>
      </a>
      <div className="block md:hidden">
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
      <ul className="flex pr-12">
        <li onClick={openNav} className=" px-4 text-lg font-bold">
          Home
        </li>
        <li onClick={openNav} className=" px-4 text-lg font-bold">
          About
        </li>
        <li onClick={openNav} className=" px-4 text-lg font-bold">
          Project
        </li>
        <li onClick={openNav} className=" px-4 text-lg font-bold">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Head;
