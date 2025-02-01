import React from "react";
import style from "./Footer.module.scss";
export default function Footer() {
  return (
    <>
    <footer className="bg-white absolute bottom-0 left-0 right-0 shadow-sm border-white-200 rounded-lg z-[55]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-6">
          <div className="sm:flex sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3">
              <img
                src="/src/assets/images/logo-BfNap0Pe.png"
                className="h-8"
                alt="Logo"
              />
              <span className="text-2xl font-semibold">Recipe</span>
            </a>
            <span className="text-blue-700 font-bold text-2xl ms-auto">
              Route
            </span>
          </div>
          <div className="my-6 sm:mx-auto bg-gray-200 lg:my-8 w-auto h-0.5"></div>
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2025
            <a
              href="https://www.facebook.com/EINagy"
              className="hover:underline"
            >
              Nagy Osama™
            </a>
            . All Rights Reserved.
          </span>
      </div>
    </footer>
    </>
  );
}
