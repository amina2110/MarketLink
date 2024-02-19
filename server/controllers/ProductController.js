const Item = require("../models/ProductModel");

exports.createProduct = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Retrieve all items
exports.getProducts = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Retrieve an item by id
exports.getProductById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update an item by id
exports.updateProductById = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete an item by id
exports.deleteProductById = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(deletedItem);
    } catch (err) {
        res.status(500).json(err);
    }
};
