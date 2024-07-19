import React from "react";
import one from "../../images/otherimage/ourclient-1.png";
import two from "../../images/otherimage/ourclient-2.png";
import three from "../../images/otherimage/ourclient-3.png";
import four from "../../images/otherimage/ourclient-4.png";
import five from "../../images/otherimage/ourclient-5.png";
import six from "../../images/otherimage/ourclient-6.png";

function homesectiontwo() {
  return (
    <div className="container-fuild">
      <div className="">
        <h2 className="text-[#4D4D4D] font-bold text-center text-3xl mt-4">
          Our Clients
        </h2>
        <p className="text-gray-500 font-medium text-center text-lg">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="container mx-auto mt-5 ">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 text-center justify-center mx-auto w-full p-5 gap-5">
            <img src={one} alt="" className="mx-auto" />
            <img src={two} alt="" className="mx-auto" />
            <img src={three} alt="" className="mx-auto" />
            <img src={four} alt="" className="mx-auto" />
            <img src={five} alt="" className="mx-auto" />
            <img src={six} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default homesectiontwo;
