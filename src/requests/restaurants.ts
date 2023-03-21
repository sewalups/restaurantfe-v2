import {AxiosResponse} from "axios";
import {clientRequest} from "../config/clientHandler";
import {ResponseRestaurant, Restaurant} from "../types/types";


export const fetchRestaurants  = async (location: string, term:string):  Promise<Restaurant[]>  => {
    const response:AxiosResponse = await clientRequest.get("/restaurants",{
        params: {location, term }
    })

    return response.data.map((single: ResponseRestaurant) => {
       return {
           id: single.id,
           name: single.name,
           location: {
               addressOne: single.location.address1,
               addressTwo: single.location.address2,
               city: single.location.city,
               state: single.location.state,
               zip: single.location.zip
           },
           imageUrl: single.image_url,
           phone: single.phone,
           rating: single.rating,
           reviewCount: single.review_count,
           categories: single.categories
       }
   });
}
export const fetchRestaurant  = async (id: string | undefined):  Promise<Restaurant|null>  => {
    if(id === undefined){
        return null;
    }

    const response:AxiosResponse = await clientRequest.get("/restaurants/"+ id)

    return {
        id:response.data?.data.id,
        name: response.data?.data.name,
        location: {
            addressOne:response.data?.data.location.address1,
            addressTwo:response.data?.data.location.address2,
            city:response.data?.data.location.city,
            state:response.data?.data.location.state,
            zip:response.data?.data.location.zip_code
        },
        imageUrl:response.data?.data.image_url,
        phone:response.data?.data.phone,
        rating:response.data?.data.rating,
        reviewCount:response.data?.data.review_count,
        categories:response.data?.data.categories
    }
}