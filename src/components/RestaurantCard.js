import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant logo" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
