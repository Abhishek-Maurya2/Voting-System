import React from "react";
import "./navbar.css"
function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <a className="logo" href="#">Votu</a>
      </div>
      <div className="links">
        {["Home", "About", "Services", "Contact"].map((link, index) => (
          <a key={index} href="#" className="text-md font-light">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
