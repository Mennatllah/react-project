import style from "./Miscellaneous.module.scss";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Meals() {
  const [meals, setmeals] = useState([]);
  function getMiscellaneousMeals() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous`)
      .then((res) => {
        console.log(res);
        setmeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error fetching the meals. Please try again.");
      });
  }

  useEffect(() => {
    getMiscellaneousMeals();
  }, []);
  return (
    <>
      <div className="row w-3/4  ms-auto gap-6 gap-y-20 mb-32   text-center  ">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className=" lg:w-1/5 md:w-2/5  text-center  justify-center flex items-center hover:shadow-xl hover:scale-105 transition-all bg-white rounded-[35px] px-24 pb-4 group "
          >
            <div className=" relative ">
              <img
                src={meal.strMealThumb}
                className="w-full  rounded-full group-hover:rotate-[360deg] duration-700 transition-all  absolute top-[-14%] left-1/2 transform -translate-x-1/2"
                alt="strMealThumb"
              />
              <div className="mt-24">
                <h3 className="mb-2 font-bold text-xl ">
                  {meal.strMeal.split(" ").slice(0, 2).join(" ")}
                </h3>
                <Link to={`/category/MealsDetails/${meal.idMeal}`}>
                  <button className="px-8 py-2 mt-4  rounded-full bg-green-600  hover:shadow-lg hover:scale-105 transition-all text-white hover:bg-green-700 font-semibold">
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
