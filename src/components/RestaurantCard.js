import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-72 p-2 m-2 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant logo"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
