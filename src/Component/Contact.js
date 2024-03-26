import React from "react";

const Contact = () => {
  return (
    <div className="py-10" id="contact">
      <h3 className=" text-2xl font-bold text-center text-blue-700">
        Contact Me
      </h3>
      <h3 className="text-3xl font-bold text-center pt-4 text-gray-700 ">
        Don't be shy! Hit me up! 👇
      </h3>
      <div className=" flex flex-col items-center justify-center py-8">
        <span className=" bg-white rounded-full shadow-md shadow-slate-500 w-12 h-12 items-center justify-center flex">
          <svg
            className=" bg-white shadow-lg rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="tabler-icon tabler-icon-map-search"
          >
            <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
            <path d="M9 4v13"></path>
            <path d="M15 7v5"></path>
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M20.2 20.2l1.8 1.8"></path>
          </svg>
        </span>
        <span>
          <h1 className=" text-center text-xl font-bold p-1">Location</h1>
          <p className=" text-center">Roorkee, Uttarakhand, India</p>
        </span>
      </div>
      <div className=" flex flex-col items-center justify-center pb-8">
        <span className=" bg-white rounded-full shadow-md shadow-slate-500 w-12 h-12 items-center justify-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="tabler-icon tabler-icon-mail"
          >
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
        </span>
        <span>
          <h1 className=" text-center text-xl font-bold py-1">Mail</h1>
          <p className=" text-center hover:text-blue-700 underline">
            <a href="mailto:utpalkumar567@gmail.com">utpalkumar567@gmail.com</a>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Contact;
