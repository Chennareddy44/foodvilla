import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { searchRestaurants } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurants();

  const isOnline = useOnline();

  if (!isOnline)
    return <h1>🔴 offline, please check your internet connection!!</h1>;

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
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
