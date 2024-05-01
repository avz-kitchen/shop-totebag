import "../components/Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="./public/totee-logo.png" alt="Totee logo"></img>
      </div>
      <div className="nav-item">
        <ul className="categories">
          <li>Typo</li>
          <li>Graphics</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="nav-item">
        <div className="nav-action">
          <img src="./public/images/i-account.png" alt="Account" />
        </div>
        <div className="nav-action">
          <img src="./public/images/i-cart.png" alt="Cart" />
        </div>
        <div>
          <img src="./public/images/i-search.png" alt="Search" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
