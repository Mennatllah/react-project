import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="sm:block md:block lg:hidden fixed top-4 left-4 p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-50"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <nav
        className={`fixed top-0 bottom-0 left-0 w-64 p-4 shadow-md bg-white transition-all duration-300 z-40 md:opacity-100 md:pointer-events-auto ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start">
          <img
            className="w-60 mb-4"
            src="/src/assets/images/logo-BfNap0Pe.png"
            alt="logo"
          />

          <Link to="/" className="block text-white">
            <div className="bg-[#f29724] p-2 hover:scale-105 hover:shadow-xl text-lg transition-all rounded-xl px-14 mb-6 shadow-lg shadow-orange-300">
              <i className="px-2 fa-solid fa-utensils"></i>
              <span> Meals</span>
            </div>
          </Link>

          <div className="border border-gray-300 p-2 hover:scale-105 hover:shadow-xl text-lg transition-all rounded-xl px-9 mb-6 shadow-lg">
            <i className="px-2 fa-solid fa-utensils"></i>
            <span> Ingredients</span>
          </div>

          <div className="border border-gray-300 p-2 hover:scale-105 hover:shadow-xl text-lg transition-all rounded-xl px-16 mb-6 shadow-lg">
            <i className="px-2 fa-solid fa-utensils"></i>
            <span> Area</span>
          </div>
        </div>
      </nav>
    </>
  );
}
