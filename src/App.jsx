import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import All from "./components/All/All";
import Beef from "./components/Beef/Beef";
import Breakfast from "./components/Breakfast/Breakfast";
import Chicken from "./components/Chicken/Chicken";
import Dessert from "./components/Dessert/Dessert";
import Goat from "./components/Goat/Goat";
import Lamb from "./components/Lamb/Lamb";
import Miscellaneous from "./components/Miscellaneous/Miscellaneous";
import Pasta from "./components/Pasta/Pasta";
import Pork from "./components/Pork/Pork";
import Seafood from "./components/Seafood/Seafood";
import Side from "./components/Side/Side";
import Starter from "./components/Starter/Starter";
import Vegan from "./components/Vegan/Vegan";
import Vegetarian from "./components/Vegetarian/Vegetarian";
import Category from "./components/Category/Category";
import Meals from "./components/Meals/Meals";
import MealsDetails from "./components/MealsDetails/MealsDetails";
import Notfound from "./components/Notfound/Notfound";

let x = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <All /> },
      { path: "/category/Beef", element: <Beef /> },
      { path: "/category/Breakfast", element: <Breakfast /> },
      { path: "/category/Chicken", element: <Chicken /> },
      { path: "/category/Dessert", element: <Dessert /> },
      { path: "/category/goat", element: <Goat /> },
      { path: "/category/Lamb", element: <Lamb /> },
      { path: "/category/Miscellaneous", element: <Miscellaneous /> },
      { path: "/category/Pasta", element: <Pasta /> },
      { path: "/category/Pork", element: <Pork /> },
      { path: "/category/Seafood", element: <Seafood /> },
      { path: "/category/Side", element: <Side /> },
      { path: "/category/Starter", element: <Starter /> },
      { path: "/category/Vegan", element: <Vegan /> },
      { path: "/category/Vegetarian", element: <Vegetarian /> },
    ],
  },
  { path: "/category/MealsDetails/:id", element: <MealsDetails /> },
  { path: "*", element: <Notfound /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
