const express = require('express');
const userController = require('../controllers/user.controller.js');
const router = express.Router();

router.post('/', userController.register);

module.exports = router;
