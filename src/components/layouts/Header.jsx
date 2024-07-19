import React, { useState } from "react";
import "./layout.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container-fluid bg-white-500 shadow-md p-3 w-full relative">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="text-2xl text-black font-bold">
          <a href="/">Logo</a>
        </div>
        <div className="menu-toggle block lg:hidden absolute top-3 right-3">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-10 p-1 lg:p-0 lg:text-black text-center">
            <li>
              <a href="#" className="block lg:inline-block hover:text-[#4CAF4F] py-2 lg:py-0">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block lg:inline-block hover:text-[#4CAF4F] py-2 lg:py-0">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="block lg:inline-block hover:text-[#4CAF4F] py-2 lg:py-0">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="block lg:inline-block hover:text-[#4CAF4F] py-2 lg:py-0">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block lg:inline-block hover:text-[#4CAF4F] py-2 lg:py-0">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-[#4CAF4F] text-white hover:bg-black rounded-lg text-sm lg:inline-block py-2 px-4 flex items-center justify-center mx-auto lg:mx-0">
                Register Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
