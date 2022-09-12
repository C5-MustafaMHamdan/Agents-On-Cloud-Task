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
      .then((res) => {
        console.log(res.data.result);
        setuserId(localStorage.getItem("userId"));

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

  const deleteItem = async (id) => {
    try {
      await axios.put(`http://localhost:5000/items/${id}`,{},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },);
      getallItems();
    } catch (error) {
      console.log(error);
    }
  };



/*async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/items/${id}`,{},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
       
      );
      dispatch(removeFromReadingList(id));

      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };  */

  

  return (
    <div className="dash">
      {items &&
        items.map((element, index) => {
          return (
            <div key={index}>
              <img className="item-img" src={element.img} />
              <p> {element.title}</p>
              <p> {element.price+ " "+  "$"}</p>
              {userID == element.owner_id ? (
                <>
                  {" "}
                  <button

onClick={() => deleteItem(element.id)}
                  >
                    delete
                  </button>
                  <button


                  >
                    Update
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;
