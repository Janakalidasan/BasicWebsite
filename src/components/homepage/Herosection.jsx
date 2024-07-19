import React from "react";
import Hermoimgs from "../../images/heroimgs.png";
function Herosection() {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="container mx-auto px-4 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left px-5">
          <h1 className="text-3xl lg:text-5xl md:text-5xl font-medium text-gray-800 leading-tight">
            Lessons and insights <br />{" "}
            <span className="text-colors">from 8 years</span>
          </h1>
          <p className="mt-4 md:mt-5 mb-3 text-sm md:text-base">
            Where to grow your business as a photographer: site or social media?
          </p>
          <a
            href="#"
            className="bg-colors text-white py-2 px-4 rounded-lg inline-block text-sm md:text-base"
          >
            Register
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src={Hermoimgs}
            className="md:w-fit h-96 object-cover"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
