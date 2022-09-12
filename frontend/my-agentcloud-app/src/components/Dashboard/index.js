import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { tokenContext } from "../../App";

const Dashboard = () => {
  const { token, setToken } = useContext(tokenContext);
  const [items, setItems] = useState([]);
  const [userID, setuserId] = useState("");
  const [message, setMessage] = useState("");

  /////////////getallItems///////////////

  const getallItems = () => {
    axios
      .get(`http://localhost:5000/items`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {console.log(res.data.result);
        setuserId(res.data.userId);
       
        setItems(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallItems();
  }, []);

  console.log(userID);
  /////////////////////////////////////////////

  return (
    <div className="dash">
      {items &&
        items.map((element, index) => {
          return (
            <div key={index}>
              <img className="item-img" src={element.img} />
              <p> {element.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;
