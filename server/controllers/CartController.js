const Cart = require("../models/CartModel");

exports.createCart = (req, res) => {
    const newCart = new Cart(req.body);
    newCart.save((err, cart) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(cart);
        }
    });
};

exports.getUserCarts = (req, res) => {
    Cart.find({ user_id: req.params.userId }, (err, carts) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(carts);
        }
    });
};

exports.updateCart = (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, cart) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(cart);
        }
    });
};

exports.deleteCart = (req, res) => {
    Cart.findByIdAndDelete(req.params.id,
        (err, cart) =>
        { if (err)
            { res.status(500).send(err);}
        else { res.send(cart); } }); };
