import React from "react";
import aboutImg from "../about-img.jpg";
import resume from "../Utpal_Kumar_Resume_Front_end.pdf";

const About = () => {
  return (
    <div
      className=" p-16 md:flex md:p-0 justify-center items-center md:py-28"
      id="about"
    >
      <div>
        <img
          alt="bg"
          className=" w-[22rem] mx-auto rounded-2xl md:mx-auto md:w-[28rem]"
          src={aboutImg}
        ></img>
      </div>
      <div className=" md:pl-8">
        <h3 className=" text-2xl text-center font-bold pt-4 px-4 md:p-0 text-blue-800">
          About Me
        </h3>
        <h3 className=" text-3xl text-center font-bold p-4 md:w-[34rem] md:text-left">
          Front-end Developer based in Roorkee, Uttarakhand, India
        </h3>
        <p className=" px-2 pb-4 text-base text-center md:w-[34rem] md:text-left md:px-4">
          Hey, My name is Utpal, and I am a Front-end Developer. I am passionate
          about web technologies and looking to grow in this field.
        </p>
        <p className="px-2 text-center text-base md:text-left md:px-4">
          My main stack is React.js in combination with Tailwind CSS
        </p>

        <button className="mx-auto flex justify-center md:block text-base md:text-left bg-slate-600 text-white rounded-xl px-6 py-2 md:mx-4 my-2 hover:bg-slate-400 hover:text-slate-100">
          <a
            href={resume}
            download="Utpal_Kumar_Resume_Front_end.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
