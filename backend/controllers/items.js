const connection = require("../models/db");

//this function to 	Add a new item

const setNewItem = (req, res) => {
  const { title, description, img } = req.body;
  const owner_id = req.token.userId;
  console.log(owner_id);
  const query = `INSERT INTO items (title, description, img,owner_id) VALUES (?,?,?,?);`;
  const data = [title, description, img, owner_id];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massage: "Item uploaded",
      result: result,
    });
  });
};

//this function to get all items

const getAllItems = (req, res) => {
  const query = `SELECT * FROM items WHERE is_deleted=0;`;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massage: "All the items",
      result: result,
    });
  });
};

// //this function to get the item by it's id

const getItemById = (req, res) => {
  const id = req.params.id;

  const query = `SELECT  * FROM items  WHERE items.id=? AND is_deleted=0;`;
  const data = [id];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (!result.length) {
      return res.status(404).json({
        success: false,
        massage: "The item is Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      massage: `The item ${id}`,
      result: result,
    });
  });
};

//this function to delete an item

const deleteItemById = (req, res) => {
  const id = req.params.id;
  const owner_id = req.token.userId;

  const query = `SELECT * FROM items WHERE id=? AND is_deleted=0  ;`;

  const data = [id ,owner_id];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err.message,
      });
    }
    if (!result.length) {
      return res.status(404).json({
        success: false,
        massage: "The item is Not Found",
      });
    }
 if (result[0].owner_id!=owner_id) { 
   
    
    return res.status(201).json({
    
    success: false,
    massage: `you are not authorized to delete this item`,
  });
    
 }

    const query2 = `UPDATE items SET is_deleted=1 WHERE   owner_id=?;`;
    const data2 = [owner_id];

    connection.query(query2, data2, (err, result2) => {
        
      
      res.status(200).json({
        success: true,
        massage: `Succeeded to delete item with id: ${id}`,
        result: result,
      });
    });
  });
};

module.exports = {
  setNewItem,
  getAllItems,
  getItemById,
  deleteItemById,
};
