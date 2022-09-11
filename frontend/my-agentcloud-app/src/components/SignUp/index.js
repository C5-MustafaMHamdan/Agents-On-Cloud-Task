import React, { useState } from "react";
import axios from "axios";
import "./style.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [message, setMessage] = useState("");
  const [isRegistered, setIsReg] = useState(false);

  const addUser = () => {
    axios
      .post("http://localhost:5000/signup/", {
        lastName,
        firstName,
        email,
        password,
      })
      .then((result) => {
        setMessage(result.data.message);
        setIsReg(true);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setIsReg(false);
      });

  };


  return (
    <div className="reg">
      Sign-Up
      <br />
      <input
        type={"text"}
        placeholder={"email"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type={"password"}
        placeholder={"password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <input
        type={"text"}
        placeholder={"first name"}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <input
        type={"text"}
        placeholder={"last name"}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <button onClick={addUser}>Sign Up</button>
      <p className={isRegistered ? "successful" : "error"}>{message}</p>
    </div>
  );
};

export default SignUp;
