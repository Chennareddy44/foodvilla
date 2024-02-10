import { useState } from "react";
import Logo from "../assests/img/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        data-testid="logo"
        className="h-28 p-2"
        alt="food villa logo"
        src={Logo}
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-blue-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/Contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="px-2" data-testid="cart">
              Cart - {cartItems.length} Items
            </li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status" className="py-10">
        {isOnline ? "✅" : "🔴"}
      </h1>
      {isLoggedIn ? (
        <button
          className="bg-blue-200 h-8 my-10 font-bold px-4 mx-2 rounded-2xl"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-blue-200 h-8 my-10 font-bold px-4 mx-2 rounded-2xl"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
