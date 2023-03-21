import React from "react";
import {Restaurant} from "../types/types";
import {Link} from "react-router-dom";

interface IPropsRestaurants {
    restaurants: Restaurant[];
    title: string
}

const Restaurants:React.FC<IPropsRestaurants> = ({ restaurants, title}) => {

    return (
        <div>
            <h1 className="mb-2 text-lg font-semibold">{title}</h1>
            <div className="relative overflow-x-auto border sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Thumb
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rating
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Reviews
                        </th>
                        <th scope="col" className="px-6 py-3">
                            View
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        restaurants.length === 0 &&
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td colSpan={7} className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap">
                                No Restaurants loaded.
                            </td>
                        </tr>
                    }
                    { restaurants.map((restaurant: Restaurant) => (
                        <tr key={restaurant.id} className="bg-white border-b hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <img src={restaurant.imageUrl} className="h-14 w-14" />
                            </th>
                            <td scope="row" className="px-6 py-4">
                                {restaurant.name}
                            </td>
                            <td className="px-6 py-4">
                                {restaurant.location.addressOne + ', '+ restaurant.location.city + ', '+ restaurant.location.state + ', '+ restaurant.location.zip}
                            </td>
                            <td className="px-6 py-4">
                                {restaurant.phone}
                            </td>
                            <td className="px-6 py-4">
                                {restaurant.rating}
                            </td>
                            <td className="px-6 py-4">
                                {restaurant.reviewCount}
                            </td>
                            <td className="px-6 py-4">
                                <Link className="p-1 px-2 bg-purple-800 text-white rounded-md border" to={`/single/${restaurant.id}`}>View</Link>
                            </td>

                        </tr>
                    ))}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default  Restaurants;