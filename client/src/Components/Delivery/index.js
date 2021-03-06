import React, { useState, useEffect }  from "react";
import { useSelector } from "react-redux";

// components
import DeliveryCard from "./DeliveryCard";

const Delivery = () => {
const [restaurantList, setRestaurantList] = useState([]);

const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
);

useEffect(() => {
    setRestaurantList(reduxState.restaurants);
}, [reduxState.restaurants]);

    return (
        <>
            <DeliveryCard />
        </>
    );
};

export default Delivery;