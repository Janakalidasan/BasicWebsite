import React from "react";
import imgs from "../../images/otherimage/image-9.png";
import one from "../../images/otherimage/ourclient-1.png";
import two from "../../images/otherimage/ourclient-2.png";
import three from "../../images/otherimage/ourclient-3.png";
import four from "../../images/otherimage/ourclient-4.png";
import five from "../../images/otherimage/ourclient-5.png";
import six from "../../images/otherimage/ourclient-6.png";
function Homesectionseven() {
  return (
    <div className="container-fuild bg-[#F5F7FA]">
      <div className="container mx-auto">
        <div className="ccontainer mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 p-5">
          <div className="flex justify-center">
            <img src={imgs} alt="" />
          </div>
          <div>
            <p className="text-[#717171]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="text-colors font-bold mt-5 text-lg">Tim Smith</p>
            <p className="text-[#89939E]">
              British Dragon Boat Racing Association
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-6 w-[215px] lg:w-[485px] gap-5 mt-5">
              <img src={one} alt="" className="" />
              <img src={two} alt="" className="" />
              <img src={three} alt="" className="" />
              <img src={four} alt="" className="" />
              <img src={five} alt="" className="" />
              <img src={six} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesectionseven;
