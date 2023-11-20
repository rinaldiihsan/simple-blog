const express = require('express');
const routeUser = require('./user');
const routeBlogPost = require('./blogPost');
const routeComment = require('./comment');
const route = express.Router();

route.use('/user', routeUser);
route.use('/blog-post', routeBlogPost);
route.use('/comment', routeComment)

module.exports = route;
