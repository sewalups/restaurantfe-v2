import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import RestaurantsPage from "./pages/RestaurantsPage";
import SingleRestaurantPage from "./pages/SingleRestaurantPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantsPage />
  },
  {
    path: "/single/:id",
    element: <SingleRestaurantPage />
  },
]);

const App:React.FC = () => {
  return (
      <div className="w-screen h-screen">
        <div className="h-16 bg-purple-800 w-full shadow-sm shadow-black mb-2 p-5 text-white">
          <h1 className="uppercase font-medium">Yelp Restaurants Search</h1>
        </div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
