import React from "react";
import first from "../../images/otherimage/pana.png";
function Homesectionsix() {
  return (
    <div className="py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-5">
        <img
          src={first}
          alt="Description of Image"
          className="w-fit h-auto object-cover mx-auto"
        />
        <div className="text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-4">
            How to design your site footer like <br />
            we did
          </h3>
          <p className="text-[#717171] mb-6">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <a
            href="#"
            className="inline-block bg-colors text-white py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homesectionsix;
