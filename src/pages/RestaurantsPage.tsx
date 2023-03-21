import React, { useState } from 'react'
import {Restaurant} from "../types/types";
import {fetchRestaurants} from "../requests/restaurants";
import SearchForm from "../components/SearchForm";
import Restaurants from "../components/Restaurants";


const RestaurantsPage:React.FC = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handFetch = (location:string, term:string): void => {
        setIsLoading(true);
        fetchRestaurants(location, term).then(results => {
            setRestaurants(results);
            setIsLoading(false)
        }).catch(error => {
            setIsLoading(false)
            setRestaurants([]);
        })
    }

    return (
        <div className="container mx-auto mt-5 p-2 grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-3">
                <SearchForm title="Search Form" handFetch={handFetch} isLoading={isLoading} />
            </div>
            <div className="col-span-12 lg:col-span-9">
                <Restaurants restaurants={restaurants} title="Restaurants Table" />
            </div>
        </div>
    )
}

export default RestaurantsPage
