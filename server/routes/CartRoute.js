const express = require('express');
const CartController = require("../controllers/CartController");
const router = express.Router();

router.post('/carts', CartController.createCart);
router.get('/carts/:userId', CartController.getUserCarts);
router.put('/carts/:id', CartController.updateCart);
router.delete('/carts/:id', CartController.deleteCart);

module.exports = router;
