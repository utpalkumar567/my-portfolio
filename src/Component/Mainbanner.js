import React from "react";
import image from "../hero-img.jpeg";

const Mainbanner = () => {
  return (
    <div className=" bg-gray-50 h-full w-full py-10">
      <div className=" px-8">
        <img
          className=" h-72 mx-auto border-4 border-black rounded-tl-[60%] rounded-tr-[40%] rounded-br-[30%] rounded-bl-[70%]"
          alt="main"
          src={image}
        ></img>
      </div>
      <div>
        <h3 className=" text-4xl font-bold text-center pt-4">
          Front-End React Developer
        </h3>
        <h3 className=" text-lg text-gray-600 text-center py-4 px-4">
          Hi, I'm Utpal Kumar. A passionate Front-end React Developer based in
          Roorkee, Uttarakhand, India. 📍
        </h3>
        <div className=" flex justify-center gap-4 pb-4 ">
          <span className="transition duration-300 ease-in-out hover:-translate-y-1">
            <a href="https://www.linkedin.com/in/utpal-kumar-247625215/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-linkedin"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
          </span>
          <span className="transition duration-300 ease-in-out hover:-translate-y-1">
            <a href="https://github.com/utpalkumar567/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-lg font-semibold text-gray-700 pb-4 underline underline-offset-2">
            Tech Stack
          </h1>
          <ul className="flex flex-wrap gap-[2rem] items-center justify-center">
            <li>
              <img
                alt="skill icon"
                className=" transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                src="https://skillicons.dev/icons?i=html,css,js"
              ></img>
            </li>
            <li>
              <img
                alt="skill icon"
                className=" transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                src="https://skillicons.dev/icons?i=react,redux,tailwind"
              ></img>
            </li>
            <li>
              <img
                alt="skill icon"
                className=" transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                src="https://skillicons.dev/icons?i=bootstrap,wordpress,visualstudio"
              ></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mainbanner;
