import { useState } from "react";
import Logo from "../assests/img/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="food villa logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button className="log-button" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="log-button" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
