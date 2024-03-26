import React from "react";
import youtubeClone from "../youtube-clone.png";

const Projects = () => {
  return (
    <div className=" bg-gray-50 py-10">
      <div>
        <h1 className=" text-4xl font-bold text-center pb-6 underline">
          Projects
        </h1>
        <div>
          <img
            alt="clone-snippet"
            src={youtubeClone}
            className=" px-4 w-96 mx-auto border border-black rounded-2xl"
          ></img>
        </div>
        <div>
          <h1 className=" text-2xl font-bold p-2 text-center">Youtube Clone</h1>
          <div className="flex gap-4 justify-center text-sm underline underline-offset-1 font-medium">
            <span className=" cursor-pointer  hover:text-blue-600">
              <a
                href="https://utpal-youtube-clone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Link
              </a>
            </span>
            <span className=" cursor-pointer  hover:text-blue-600">
              <a
                href="https://github.com/utpalkumar567/youtube-clone"
                target="_blank"
                rel="noreferrer"
              >
                Github Link
              </a>
            </span>
          </div>
          <p className=" text-center px-4 text-base pb-8">
            This project is a frontend clone of YouTube built using ReactJS,
            Tailwind CSS, React Router DOM, and Redux Toolkit. It aims to
            provide a familiar user interface similar to YouTube, allowing users
            to browse videos, search for content, and view video details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
