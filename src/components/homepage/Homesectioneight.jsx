import React from "react";
import first from "../../images/otherimage/image-18.png";
import two from "../../images/otherimage/image-19.png";
import three from "../../images/otherimage/image-20.png";

const items = [
  {
    img: first,
    text: "Creating Streamlined Safeguarding Processes with OneRen",
    read: "Read More",
  },
  {
    img: two,
    text: "What are your safeguarding responsibilities and how can you manage them?",
    read: "Read More",
  },
  {
    img: three,
    text: "Revamping the Membership Model with Triathlon Australia Australia",
    read: "Read More",
  },
];

function Homesectioneight() {
  return (
    <div className="mt-9">
      <h2 className="text-center font-bold text-[#4D4D4D] text-xl lg:text-3xl md:text-2xl">
        Caring is the new marketing
      </h2>
      <p className="text-center text-[#717171] p-2">
        The Nextcent blog is the best place to read about the latest membership
        insights,
        <br /> trends and more.See who's joining the community, read about how
        our community <br /> are increasing their membership income and lot's
        more.
      </p>
      <div className="container px-10 grid grid-cols-1 md:grid-cols-3 mx-auto  gap-y-20 mt-6 mb-6 lg:gap-4 ">
        {items.map((items, index) => (
          <div className="relative mx-auto" key={index}>
            <img src={items.img} alt="" className="w-[300px]" />
            <div className="absolute top-36 left-0 w-[250px] mx-6 bg-[#F5F7FA] p-4 shadow-md rounded-lg">
              <p className="text-[#717171] text-center">
                {items.text}
              </p>
              <div className="text-colors font-bold text-md text-center mt-3">
                <a href="">{items.read}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homesectioneight;
