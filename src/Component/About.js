import React from "react";
import aboutImg from "../about-img.jpg";

const About = () => {
  return (
    <div className=" p-8">
      <div>
        <img
          alt="bg"
          className=" w-[22rem] mx-auto rounded-2xl"
          src={aboutImg}
        ></img>
      </div>
      <div>
        <h3 className=" text-2xl text-center font-bold pt-4 px-4 text-blue-800">
          About Me
        </h3>
        <h3 className=" text-3xl text-center font-bold p-4">
          Front-end Developer based in Roorkee, Uttarakhand, India
        </h3>
        <p className=" px-4 pb-4 text-center text-base font-mono">
          Hey, My name is Utpal, and I am a Front-end Developer. I am passionate
          about web technologies and looking to grow in this field.
        </p>
        <p className="px-4 text-center text-base font-mono">
          My main stack is React.js in combination with Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default About;
