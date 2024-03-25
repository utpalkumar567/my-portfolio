import React from "react";

const Head = () => {
  return (
    <div className="flex place-content-between py-6 shadow-lg">
      <a href="/">
        <span className=" pl-12 font-mono text-2xl font-extrabold cursor-pointer">
          Utpal.Dev
        </span>
      </a>
      <ul className="flex pr-12">
        <li className=" px-4 text-lg font-bold">Home</li>
        <li className=" px-4 text-lg font-bold">About</li>
        <li className=" px-4 text-lg font-bold">Project</li>
        <li className=" px-4 text-lg font-bold">Contact</li>
      </ul>
    </div>
  );
};

export default Head;
