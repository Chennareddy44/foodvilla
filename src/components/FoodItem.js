import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ description, cloudinaryImageId, name, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-blue-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food item picture" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4 className="font-bold">Rupees: {price / 100}</h4>
    </div>
  );
};
export default FoodItem;
