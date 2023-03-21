import {Restaurant} from "../types/types";
import {render, screen} from "@testing-library/react";
import Single from "../components/Single";

const restaurant:Restaurant = {
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
}

it('should load restaurant in component when passed it', function () {
    render(<Single restaurant={restaurant}  />)
    let heading = screen.getByRole("heading",{name:restaurant.name});
    let image = screen.getByAltText(restaurant.imageUrl);
     let address = screen.getByText("Address: "+ restaurant?.location.addressOne + ', '+ restaurant?.location.city + ', '+ restaurant?.location.zip +', '+ restaurant?.location.state);
     let phone = screen.getByText("Phone: " + restaurant.phone);
     let rating = screen.getByText("Rating: " + restaurant.rating);
     let reviewCount = screen.getByText("Review Count: " + restaurant.reviewCount);


    expect(heading).toBeTruthy()
    expect(image).toBeTruthy()
    expect(address).toBeTruthy()
    expect(phone).toBeTruthy()
    expect(rating).toBeTruthy()
    expect(reviewCount).toBeTruthy()


});
it('should load spinner on component when its passed null', function () {
    render(<Single restaurant={null} />)
    expect(screen.getByRole('status')).toBeTruthy()
});
