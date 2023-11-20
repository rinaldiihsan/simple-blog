const express = require('express');
const routeUser = express.Router();
const userController = require('../controller/userController');

routeUser.post('/login', userController.login);
routeUser.post('/register', userController.register);

module.exports = routeUser;
