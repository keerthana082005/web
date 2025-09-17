const Item = require('../models/itemModel');
const createItem = async (req, res) => {
  const { name, quantity } = req.body;

  if (!name || quantity == null) {
    return res.status(400).json({ message: 'Name and quantity is required' });
  }
  try {
    const newItem = new Item({
      name,
      quantity
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createItem,
  getAllItems
};
