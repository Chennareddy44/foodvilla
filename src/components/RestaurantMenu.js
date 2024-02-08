import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  if (restaurant === null) return <Shimmer />;

  const {
    name,
    city,
    areaName,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId,
  } = restaurant?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card || [];

  return (
    <div className="flex justify-evenly">
      <div>
        <h1 className="font-bold my-2 text-xl">Restraunt id: {resId}</h1>
        <h2 className="font-bold my-2 text-xl">{name}</h2>
        <img
          className="w-96 rounded-lg"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold my-2 text-xl">{city}</h3>
        <h3 className="font-bold my-2 text-xl">{areaName}</h3>
        <h3 className="font-bold my-2 text-xl">{avgRating} stars</h3>
        <h3 className="font-bold my-2 text-xl">{costForTwoMessage}</h3>
      </div>
      <div>
        <h1 className="font-bold my-2">Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li className="font-semibold" key={item.id}>
              {item.card.info.name} - {"rs"} {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
