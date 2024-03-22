import React from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
      <div className="left">
        <div className="info">
          <h1>Welcome to</h1>
          <h1>Our Website</h1>
          <p>Enter your personal details and start journey with us</p>
          {/* <Link to="/Login">Login</Link> */}
          <NavLink to="/Login">Login</NavLink>
        </div>
      </div>
      <div className="right">
        <div className="register">
          <h1>Register</h1>
          <form>
            <p>University Mail Id</p>
            <input type="text" placeholder="University Mail" />
            <p>Personal Details</p>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="University Id Number" />
            <input type="password" placeholder="Password" />
            {/* <Link to="/SignUp">register</Link> */}
          <NavLink to="/Login">Register</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
