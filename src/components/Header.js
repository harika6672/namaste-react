import { logoURL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <img className="res-logo" alt="app-logo" src={logoURL} />
      <div className="nav-items-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
