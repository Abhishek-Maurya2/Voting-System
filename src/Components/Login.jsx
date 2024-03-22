import React from 'react'

function Login() {
  return (
    <div className="container">
        <div className="left">
            <div className="info">
                <h1>Welcome to</h1>
                <h1>Our Website</h1>
                <p>Enter your personal details and start journey with us</p>
                <button type="submit">Register</button>
            </div>
        </div>
        <div className="right">
            <div className="login">
                <h1>Log in</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login