import { useState } from "react";
import Logo from "../assests/img/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2" alt="food villa logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-blue-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <h1 className="py-10">{isOnline ? "✅" : "🔴"}</h1>
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
