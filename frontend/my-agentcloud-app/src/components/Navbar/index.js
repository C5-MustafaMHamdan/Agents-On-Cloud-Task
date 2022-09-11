import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { tokenContext } from "../../App";

const Navbar = () => {
  const isLoggedIn = useContext(tokenContext).isLoggedIn;
  const setIsLoggedIn = useContext(tokenContext).setIsLoggedIn;
  const setToken = useContext(tokenContext).setToken;

  const logOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken("");
  };
  return (
    <div className="Nev" style={{ display: "flex", gap: "20px" }}>
      {isLoggedIn ? (
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/dashbord/">Dashbord</Link>

          <Link to="/login" onClick={logOut}>
            logout
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/signup/">Sign Up</Link>
          <Link to="/login">login</Link>{" "}
        </div>
      )}
    </div>
  );
};

export default Navbar;
