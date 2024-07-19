import React from "react";
import iconone from "../../images/otherimage/Social-Icons-1.png";
import icontwo from "../../images/otherimage/Social-Icons-2.png";
import iconthree from "../../images/otherimage/Social-Icons-3.png";
import iconfour from "../../images/otherimage/Social-Icons-4.png";

function Footer() {
  return (
    <div className="container-fuild w-full bg-[#263238]">
      <div className="container  mx-auto py-10 mt-28 px-8 md:px-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-xl text-white ">My logo</h2>
            <p className="text-[#F5F7FA] mt-4">
              Copyright © 2020 Landify UI Kit.
              <br />
              All rights reserved
            </p>
            <div className="flex space-x-4 mt-6">
              <img src={iconone} alt="Social Icon 1" />
              <img src={icontwo} alt="Social Icon 2" />
              <img src={iconthree} alt="Social Icon 3" />
              <img src={iconfour} alt="Social Icon 4" />
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-white">Company</h2>
            <ul className="text-[#F5F7FA] mt-4 space-y-2">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl text-white">Company</h2>
            <ul className="text-[#F5F7FA] mt-4 space-y-2">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl text-white">Stay up to date</h2>
            <input
              type="text"
              placeholder="Enter your email"
              className="mt-4 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
