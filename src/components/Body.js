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
      <div data-testid="search-input" className="p-5">
        <input
          className="shadow-xl bg-blue-100 rounded-xl p-2 my-2 placeholder-black focus:outline-none placeholder:text-base"
          type="text"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="bg-blue-100 shadow-xl p-2 m-2 rounded-xl font-semiboldbold text-base"
          onClick={() =>
            setFilteredRestaurants(
              searchRestaurants(searchText, allRestaurants)
            )
          }
        >
          search
        </button>

        <button
          className="bg-blue-100 shadow-xl p-2 rounded-xl font-semiboldbold text-base"
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
      </div>

      <div
        data-testid="restaurant-list"
        className="flex flex-wrap justify-evenly"
      >
        {filteredRestaurants.length === 0 ? (
          <h1 className="font-bold text-4xl">
            No Restaurant match your Filter!!
          </h1>
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
