import style from "./Categoty.module.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold pb-2">Learn, Cook, Eat Your Food</h1>
      <div className="sm:hidden">
        <select
          onChange={handleSelectChange}
          className="w-3/4 ml-auto p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500"
        >
          <option value="">Select Category</option>
          <option value="Beef">Beef</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Chicken">Chicken</option>
          <option value="Dessert">Dessert</option>
          <option value="Goat">Goat</option>
          <option value="Lamb">Lamb</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Pasta">Pasta</option>
          <option value="Pork">Pork</option>
          <option value="Seafood">Seafood</option>
          <option value="Side">Side</option>
          <option value="Starter">Starter</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
      </div>

      <div className="row w-3/4 ms-auto z-50 mb-11">
        <ul className="sm:flex mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200 hidden sm:block">
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/"
            >
              All
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Beef"
            >
              Beef
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Breakfast"
            >
              Breakfast
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Chicken"
            >
              Chicken
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Dessert"
            >
              Dessert
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Goat"
            >
              Goat
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Lamb"
            >
              Lamb
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Miscellaneous"
            >
              Miscellaneous
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Pasta"
            >
              Pasta
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Pork"
            >
              Pork
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Seafood"
            >
              Seafood
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Side"
            >
              Side
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Starter"
            >
              Starter
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Vegan"
            >
              Vegan
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              className="nav inline-block catLink px-4 py-2 border-gray-400 border transition-all hover:scale-105 hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-white"
              to="/category/Vegetarian"
            >
              Vegetarian
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
