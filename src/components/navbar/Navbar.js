import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/faq" activeClassName="active">Faq</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
