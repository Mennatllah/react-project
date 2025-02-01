import React, { useEffect, useState } from "react";
import style from "./MealsDetails.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function MealsDetails() {
  let Navigate = useNavigate();
  const [meal, setmeal] = useState(null);
  let { id } = useParams();

  function getDetails(id) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        console.log(res.data.meals[0]);
        setmeal(res.data.meals[0]);
      })
      .catch((err) => {
        console.log(err);
        Navigate("/src/components/Notfound/Notfound.jsx");
      });
  }

  useEffect(() => {
    getDetails(id);
  }, []);

  return (
    <>
      <Navbar />
      <div className=" mb-32 ">
        <div className="row">
          <div className="w-3/4 ms-auto">
            <div className="lg:flex ">
              <div className="lg:w-1/3 sm:w-3/4 sm:ms-auto">
                <h2 className="font-extrabold text-5xl pb-6 ">
                  {meal?.strMeal}
                </h2>
                <img
                  src={meal?.strMealThumb}
                  className="w-full rounded-2xl"
                  alt="strMealThumb"
                />
                <div className="flex">
                  <ul className="flex mt-4 items-center justify-center gap-3 lg:ml-6 sm:ml-20 ">
                    <li className="">
                      <Link
                        target="_blank"
                        className="p-3 text-white bg-red-600 rounded-xl"
                        to={meal?.strYoutube}
                      >
                        <i class="fa-brands fa-youtube"></i> Youtube
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        className="p-3 text-white bg-green-600 rounded-xl"
                        to={meal?.strSource}
                      >
                        <i className="fa-solid fa-earth-americas p-2"></i>
                        Source
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-3/4 sm:ms-auto from-neutral-800 text-lg sm:mt-2 lg:ml-5 lg:mt-7">
                <p>{meal?.strInstructions}</p>
              </div>
              <div className="Ingredients ms-auto bg-white lg:w-1/3 sm:w-3/4 sm:ms-auto h-fit rounded-2xl sm:mt-2 lg:ml-5 lg:mt-7">
                <h3 className="font-semibold t p-5 text-2xl lg:mb-4 sm:mb-2 border-b-4 ">
                  Ingredients
                </h3>
                <div className="flex justify-between p-3 border-b-2 text-md font-medium ">
                  <span>{meal?.strIngredient1}:</span>
                  <span>{meal?.strMeasure1} </span>
                </div>
                <div className="flex justify-between p-3 border-b-2 text-md font-medium ">
                  <span>{meal?.strIngredient2}:</span>
                  <span> {meal?.strMeasure2} </span>
                </div>
                <div className="flex justify-between p-3 border-b-2 text-md font-medium ">
                  <span>{meal?.strIngredient3}:</span>
                  <span>{meal?.strMeasure3} </span>
                </div>
                <div className="flex justify-between p-3 border-b-2 text-md font-medium ">
                  <span>{meal?.strIngredient4}:</span>
                  <span> {meal?.strMeasure4} </span>
                </div>
                <div className="flex justify-between p-3 border-b-2 text-md font-medium ">
                  <span>{meal?.strIngredient5}:</span>
                  <span>{meal?.strMeasure5} </span>
                </div>
                <div className="flex justify-between p-3 border-b-2 text-md font-medium ">
                  <span>{meal?.strIngredient6}:</span>
                  <span> {meal?.strMeasure6} </span>
                </div>
                <div className="flex justify-between p-3 border-b-2 text-md font-medium ">
                  <span>{meal?.strIngredient7}:</span>
                  <span>{meal?.strMeasure7} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
