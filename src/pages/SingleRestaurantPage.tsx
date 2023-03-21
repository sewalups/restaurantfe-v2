import React, {useEffect, useState} from "react";
import {Link, Params, useParams} from "react-router-dom";
import {fetchRestaurant} from "../requests/restaurants";
import {Restaurant} from "../types/types";
import Single from "../components/Single";

const SingleRestaurantPage:React.FC = () => {

    const [restaurant, setRestaurant] = useState<Restaurant|null>(null)
    const { id } : Readonly<Params<string>> = useParams()

    useEffect(() => {
        fetchRestaurant(id).then(result => {
            setRestaurant(result);
        })
    },[])


    return (
        <div className="container mx-auto mt-5 p-2 flex flex-col">
            <span className="flex justify-between w-full">
                <Link to="/" className="p-2 bg-purple-800 px-4 rounded-md text-white mb-2 border shadow-black">  Go Back </Link>
            </span>
            <div className="container p-6">
                <Single restaurant={restaurant} />
            </div>
        </div>)
}

export default SingleRestaurantPage;