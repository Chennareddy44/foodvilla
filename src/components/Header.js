const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="food villa logo"
        src="https://scontent.fblr11-1.fna.fbcdn.net/v/t39.30808-6/312172365_450040753890916_274818615961815256_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=OdPrBYPb4IsAX_T2LuI&_nc_ht=scontent.fblr11-1.fna&oh=00_AfCl3j0vG691PDB-iA67P-oF7ay2Ud3TMeuTZRHZsOa7Fg&oe=65C446C2"
      />
    </a>
  );
};

const Header = () => {
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
    </div>
  );
};

export default Header;
