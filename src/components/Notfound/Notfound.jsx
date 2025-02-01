import React from "react";
import style from "./Notfound.module.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Notfound() {
  return (
    <>
      <Navbar />
      <h3 className="font-bold text-2xl">Not found page error 404....</h3>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <div className="fixed bottom-0 right-0 left-0">
        <Footer />
      </div>
    </>
  );
}
