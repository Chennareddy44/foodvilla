import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <div>
      <h1 className="font-bold text-4xl p-2 m-2">
        Dana White!! says!!! Add something to the cart other wise he's gonna oil
        you up
      </h1>
    </div>
  ) : (
    <div>
      <span className="font-bold text-3xl">
        Cart Items - {cartItems.length}
      </span>
      <button
        className="bg-blue-100 p-2 m-5 rounded-lg font-bold shadow-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem
            key={item.id}
            {...item.card.info}
            cloudinaryImageId={item.card.info.imageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
