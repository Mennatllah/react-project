import React from "react";
import style from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import Category from "../Category/Category";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Category />

      <div className="container my-5">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
