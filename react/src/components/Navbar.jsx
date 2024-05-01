function Navbar() {
  return (
    <nav className="navbar">
      <div className="containers">
      <img src="./public/totee-logo.png" alt="Totee logo"></img>
      </div>
      <div className="containers">
        <ul className="categories"> 
        <li>Typo</li>
        <li>Graphics</li>
        <li>Contacts</li>
        </ul>        
      </div>
      <div className="containers">
        <img src="./public/images/i-account.png" alt="Account" />
        <img src="./public/images/i-cart.png" alt="Cart" />
        <img src="./public/images/i-search.png" alt="Search" />

      </div>

    </nav>
  );
}

export default Navbar;
