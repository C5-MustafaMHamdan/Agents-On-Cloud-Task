import "./App.css";
import SignUp from "./components/SignUp";
 import Login from "./components/Login";
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
export const tokenContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  if (!token && localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <tokenContext.Provider
        value={{ token, setToken, isLoggedIn, setIsLoggedIn }}
      >
        <h1>Welcome To APP</h1>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </tokenContext.Provider>
    </div>
  );
};

export default App;
