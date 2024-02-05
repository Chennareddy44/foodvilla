import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function searchRestaurants(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search Your Favourite Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() =>
            setRestaurants(searchRestaurants(searchText, restaurants))
          }
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
