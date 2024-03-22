import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <Login />
    // <SignUp />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
