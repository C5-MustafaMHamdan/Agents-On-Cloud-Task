const connection = require("../models/db");

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

module.exports = {
  setNewItem,
};
