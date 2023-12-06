// Card.js
import React from "react";
import img1 from "../assets/1ydfa.jpg";

const Card = () => {
  return (
    <div className="m-auto max-w-sm sm:w-60 w-50 m-3  rounded overflow-hidden shadow-md hover:shadow-2xl ">
      <img className="w-full" src={img1} alt="Card" />
      <div className="px-3 py-2 bg-white">
        <p className="text-gray-700 mt-1 text-lg">Kids 1 year Diploma (Level-1)</p>
      </div>
      <div className="px-6 py-4 bg-white">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-700 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default Card;
