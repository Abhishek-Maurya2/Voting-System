import React from "react";
import "./navbar.css"
function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <a className="text-[25px] font-semibold" href="#">Ochi</a>
      </div>
      <div className="links flex gap-10">
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
