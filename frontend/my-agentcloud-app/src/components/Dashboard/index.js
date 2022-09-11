import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { tokenContext } from "../../App";

const Dashboard = () => {
  const { token, setToken } = useContext(tokenContext);
  const [articles, setArticles] = useState([]);
  const [userID, setuserId] = useState("");
  const [message, setMessage] = useState("");
  const [newTitle, setnewTitle] = useState("");
  const [newDescription, setnewDescription] = useState("");
  const [comment, setComment] = useState("");

  /////////////getallarticles///////////////

  const getallarticles = () => {
    axios
      .get(`http://localhost:5000/items`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setuserId(res.data.userId);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallarticles();
  }, []);
 

 
 

  /////////////////////////////////////////////

  return (
    <div className="dash">
      <h1>this is dashboard</h1>
    </div>
  );
};

export default Dashboard;
