const express = require('express');
const UserController = require("../controllers/UserController");
const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getUsers);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
