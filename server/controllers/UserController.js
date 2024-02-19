const User = require("../models/UserModel");

exports.createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(user);
        }
    });
};

exports.getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(users);
        }
    });
};

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    });
};

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    });
};
