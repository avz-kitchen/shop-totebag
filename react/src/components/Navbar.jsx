import "../components/Navbar.css";
import { NavLink } from "react-router-dom";
import "../components/navbar.css"
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="./public/totee-logo.png" alt="Totee logo"></img>
      </div>
      <div className="nav-item">
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
