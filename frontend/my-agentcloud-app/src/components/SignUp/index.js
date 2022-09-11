import React, { useContext, useState } from "react";
import "./style.css";
import axios from "axios";

// =================================================================

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const addUser = () => {
    if (!email) {
      setMessage("please enter your email ");
      return;
    } else if (!firstName || !lastName) {
      setMessage("please enter your firstname and lastname ");
      return;
    } else if (!password) {
      setMessage("please enter your password ");
      return;
    }
    axios
      .post("http://localhost:5000/signup/", {
        firstName,
        lastName,

        email,
        password,
      })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.massage);
      });
  };

  return (
    <div className="register">
      Sign Up <br />
      <input
        type={"text"}
        placeholder={"First Name"}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <input
        type={"text"}
        placeholder={"Last Name"}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <input
        type={"text"}
        placeholder={"Email"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type={"password"}
        placeholder={"Password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={addUser}>Register</button>
      <h1> {message}</h1>
    </div>
  );
};

export default SignUp;
