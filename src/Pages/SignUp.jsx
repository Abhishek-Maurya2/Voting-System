import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [universityId, setUniversityId] = useState("");

  const handleSignUp = async () => {
    event.preventDefault();
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      universityId === ""
    ) {
      alert("Please fill all the fields");
    }
    const data = {
      Email: email,
      Password: password,
      FirstName: firstName,
      LastName: lastName,
      UniversityId: universityId,
    };
    // console.log(data);
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        alert("Error creating user: " + error.message);
      });
    // localStorage.setItem("user", JSON.stringify(data));
  };

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
            <input
              type="text"
              placeholder="University Mail"
              value={email} // Set the current value to Mail
              onChange={(e) => setEmail(e.target.value)} // Update Mail whenever the user changes the input
            />
            <p>Personal Details</p>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="University Id Number"
              value={universityId}
              onChange={(e) => setUniversityId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Link to="/SignUp">register</Link> */}
            {/* <NavLink to="/Login">Register</NavLink> */}
            <button onClick={handleSignUp}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
