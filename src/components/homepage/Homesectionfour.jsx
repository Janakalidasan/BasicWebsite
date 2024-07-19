import React from "react";
import first from "../../images/otherimage/fourthsection.png";

function Homesectionfour() {
  return (
    <div className="py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-5">
        <img src={first} alt="Description of Image" className="w-full h-auto object-cover" />
        <div className="text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-4">
            The unseen of spending three <br />years
             at Pixelgrade
          </h3>
          <p className="text-[#717171] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <a href="#" className="inline-block bg-colors text-white py-2 px-4 rounded">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homesectionfour;
