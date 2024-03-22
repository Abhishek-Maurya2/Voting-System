import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className="container">
      <div className="left">
        <div className="info">
          <h1>Welcome to</h1>
          <h1>Our Website</h1>
          <p>Enter your personal details and start journey with us</p>
          {/* <Link to="/SignUp">SignUp</Link> */}
          <NavLink to="/SignUp">SignUp</NavLink>
        </div>
      </div>
      <div className="right">
        <div className="login">
          <h1>Log in</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {/* <Link to="/Home">Login</Link> */}
            <NavLink to="/Home">Login</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login