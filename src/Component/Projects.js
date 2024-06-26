import React from "react";
import youtubeClone from "../youtube-clone.png";

const Projects = () => {
  return (
    <div className=" bg-gray-50 py-10 md:py-14" id="project">
      <h1 className=" text-4xl font-bold text-center pb-6 underline">
        Projects
      </h1>
      {/* After creating more than one project wrap in a div tag from below here and make it flex */}
      <div className="md:flex md:place-content-between md:px-8 md:items-center">
        <div className=" md:flex md:flex-col md:items-start md:px-16 md:justify-center">
          <div>
            <img
              alt="clone-snippet"
              src={youtubeClone}
              className=" w-96 mx-auto border border-black rounded-2xl"
            ></img>
          </div>
          <div>
            <h1 className=" text-2xl font-bold p-2 text-center">
              Youtube Clone
            </h1>
            <div className="flex gap-4 justify-center text-sm underline underline-offset-1 font-medium md:pb-4">
              <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                <a
                  href="https://utpal-youtube-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </span>
              <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                <a
                  href="https://github.com/utpalkumar567/youtube-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Link
                </a>
              </span>
            </div>
            <p className=" text-center px-4 text-base pb-8 md:w-96 md:p-0  md:text-justify">
              This project is a frontend clone of YouTube built using ReactJS,
              Tailwind CSS, React Router DOM, and Redux Toolkit. It aims to
              provide a familiar user interface similar to YouTube, allowing
              users to browse videos, search for content, and view video
              details.
            </p>
          </div>
        </div>
        <h1 className=" invisible md:visible md:text-lg md:font-bold">
          More Projects Comming Soon...
        </h1>
        <h1 className=" invisible md:visible md:text-lg md:font-bold">
          More Projects Comming Soon...
        </h1>
        <h1 className=" invisible md:visible md:text-lg md:font-bold">
          More Projects Comming Soon...
        </h1>
      </div>
    </div>
  );
};

export default Projects;
