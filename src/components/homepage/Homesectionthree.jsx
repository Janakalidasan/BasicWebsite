import React from "react";
import first from "../../images/otherimage/threesec-1.png";
import second from "../../images/otherimage/threesec-2.png";
import third from "../../images/otherimage/threesec-3.png";

const items = [
  {
    img: first,
    text: "Membership Organisations",
    para: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    img: second,
    text: "National Associations",
    para: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    img: third,
    text: "Clubs And Groups",
    para: "Our membership management software provides full automation of membership renewals and payments",
  },
];

function Homesectionthree() {
  return (
    <div className="mt-5">
      <h2 className="text-center font-bold text-[#4D4D4D] text-xl lg:text-3xl md:text-2xl">
        Manage your entire community <br /> in a single system
      </h2>
      <p className="text-center text-[#717171] p-2">
        Who is Nextcent suitable for?
      </p>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={`Image ${index + 1}`}
                className="w-fit h-auto object-cover"
              />
              <h3 className="mt-2 text-center font-bold text-xl px-[60px] lg:px-[120px]">{item.text}</h3>
              <p className="mt-1 text-center text-[15px] lg:px-[40px] px-0">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homesectionthree;
