import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function searchRestaurants(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            setFilteredRestaurants(
              searchRestaurants(searchText, allRestaurants)
            )
          }
        >
          search
        </button>
      </div>
      <button
        onClick={() => {
          setFilteredRestaurants(
            filteredRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            )
          );
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurant match your Filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
