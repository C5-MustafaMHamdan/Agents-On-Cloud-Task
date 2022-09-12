import React, { useContext, useState, useEffect } from "react";
import { tokenContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./style.css";

import axios from "axios";

//===============================================================

const AddNewitem = () => {
    const { token, setToken } = useContext(tokenContext);
    const setIsLoggedIn = useContext(tokenContext).setIsLoggedIn;
  const isLoggedIn = useContext(tokenContext).isLoggedIn;

  const history = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");
   const [img, setImg] = useState(""); 

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  //===============================================================

  const createNewItem = async (e) => {
    e.preventDefault();
    try {
      const item = {
        title,
        description,
        price,
        img 
      };
      const result = await axios.post("http://localhost:5000/items", item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.data.success) {
        setStatus(true);
        setMessage("The item has been uploaded successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
        setStatus(false);
        setMessage(error.response.data.message);
      }
    }
  };










  
  //===============================================================

  useEffect(() => {
    if (!isLoggedIn) {
      history("/dashboard");
    }
  });

  //===============================================================
  return (
    <>
      <form onSubmit={createNewItem}>
        <br />
        <input
          type="text"
          placeholder="item title here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          placeholder="item description here"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <input
          placeholder="item price here"
          onChange={(e) => setPrice(e.target.value)}
        />
 
        <input
                   
                    type="text"
                    placeholder="Image link"
                    onChange={(e) => {
                        setImg(e.target.value);
                    }}
                  />
        <button>Upload New Item</button>
      </form>
      <br />
      {status
        ? message && <div className="SuccessMessage">{message}</div>
        : message && <div className="ErrorMessage">{message}</div>}
    </>
  );
};

export default AddNewitem;
