export interface Restaurant {
    id:string
    name: string
    location: Location;
    imageUrl: string;
    reviewCount: number;
    rating: number;
    phone: string;
    categories: Category[]

}

export interface ResponseRestaurant {
    id: string;
    name: string;
    location: {
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string; };
    image_url: string;
    phone: string;
    rating: number;
    review_count: number;
    categories: Category[]; }

export interface Category {
    alias: string;
    title: string;

}

export interface Location {
    addressOne: string;
    addressTwo: string|null;
    city: string;
    state: string;
    zip: string;
}