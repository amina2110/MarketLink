const express = require('express');
const ItemController = require("../controllers/ProductController");
const router = express.Router();

router.post('/items', ItemController.createProduct);
router.get('/items', ItemController.getProducts);
router.put('/items/:id', ItemController.getProductById);
router.delete('/items/:id', ItemController.deleteProductById);

module.exports = router;
