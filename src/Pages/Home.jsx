import React from "react";
import Navbar from "../Components/Navbar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="top">
        {/* profile card */}
        <div className="aside">
          <div className="profile-card">
            <div className="profile-img">
              <img
                className="profile-img"
                src="https://avatars.githubusercontent.com/u/120308980?v=4"
                alt="profile"
              />
            </div>
            <div className="profile-content">
              <p className="profile-name">John Doe</p>
              <p className="profile-number">43112328</p>
            </div>
          </div>
          <div className="create-poll">
            <p>Create a new Poll</p>
            <button className="create-poll-btn">Create Poll</button>
          </div>
        </div>
        <div className="dashboard">
          <p className="dash-heading">Active Polls</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
