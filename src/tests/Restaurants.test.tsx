import {Restaurant} from "../types/types";
import {render, screen} from "@testing-library/react";
import Restaurants from "../components/Restaurants";
import {BrowserRouter} from "react-router-dom";


const restaurants: Restaurant[] = [
    {
        id:"213kdsnkdf",
        name: "some restaurant",
        location: {
            addressOne: "some address",
            addressTwo: "",
            zip:"223343",
            state: "NY",
            city:"New York"
        },
        imageUrl:"someImage",
        reviewCount:234,
        rating: 3.5,
        phone:"093254443543",
        categories:[
            {
                title:"Pizza",
                alias:"pizza"
            }
        ]
    },
    {
        id:"213334433",
        name: "some restaurant 3",
        location: {
            addressOne: "some address 3",
            addressTwo: null,
            zip:"223343",
            state: "NY",
            city:"New York"
        },
        imageUrl:"someImage",
        reviewCount:234,
        rating: 3.5,
        phone:"093254443543",
        categories:[
            {
                title:"Pizza",
                alias:"pizza"
            }
        ]
    }
];


it('should load an empty table in the component with no restaurants provided', function () {
    render(<Restaurants restaurants={[]} title="Restaurant Table" />)
    let tableData = screen.getByRole("row",{name:/No Restaurants loaded./i})

    expect(screen.getByRole("table")).toBeTruthy()
    expect(tableData).toBeTruthy()


});

it('should load restaurants in component table', function () {
    render(
        <BrowserRouter>
            <Restaurants restaurants={restaurants} title="Restaurant Table" />
        </BrowserRouter>
    );


    let tableRowCellForRestaurantOne = screen.getByRole("cell",{name:restaurants.find(v => v.name === "some restaurant")?.name})
    let tableRowCellForRestaurantTwo = screen.getByRole("cell",{name:restaurants.find(v => v.name === "some restaurant 3")?.name})

    expect(screen.getByRole("table")).toBeTruthy()
    expect(tableRowCellForRestaurantOne).toBeTruthy()
    expect(tableRowCellForRestaurantTwo).toBeTruthy()


});