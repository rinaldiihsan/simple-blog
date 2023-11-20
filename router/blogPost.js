const express = require('express');
const routeBlogPost = express.Router();
const blogPostController = require('../controller/blogPostController');

routeBlogPost.get('/', blogPostController.getAll);
routeBlogPost.get('/:id', blogPostController.getById);
routeBlogPost.post('/create', blogPostController.create);
routeBlogPost.put('/update/:id', blogPostController.update);
routeBlogPost.delete('/delete/:id', blogPostController.delete);

module.exports = routeBlogPost;
