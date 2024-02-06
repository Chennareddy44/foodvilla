import { useState } from "react";
import Logo from "../assests/img/Logo.png";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="food villa logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
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
