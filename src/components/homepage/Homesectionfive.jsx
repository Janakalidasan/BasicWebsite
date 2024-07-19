import React from "react";
import first from "../../images/otherimage/fivth-1.png";
import two from "../../images/otherimage/fivth-2.png";
import three from "../../images/otherimage/fivth-3.png";
import four from "../../images/otherimage/fivth-4.png";
const items = [
    { img: first, count: "2,245,341", text: "Members" },
    { img: two, count: "46,328", text: "Clubs" },
    { img: three, count: "828,867", text: "Event Bookings" },
    { img: four, count: "1,926,436", text: "Payments" }
];
function Homesectionfive() {
  return (
    <div className="bg-[#F5F7FA] py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-5 lg:px-24">
        <div>
          <h3 className="text-3xl font-bold">
            Helping a local <br />
            <span className="text-colors">business reinvent itself</span>
          </h3>
          <p className="text-[#717171] mt-1">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full">
          {items.map((items, index) => (
            <div className="flex space-x-4 mb-10" key={index}>
              <img src={items.img} alt="" className="w-10 h-10" />
              <div>
                <p className="font-bold text-black text-3xl">{items.count}</p>
                <p className="text-[#717171]">{items.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homesectionfive;
