const express = require('express');
const routeComment = express.Router();
const commentController = require('../controller/commentController');

routeComment.get('/blog-post/:postId/comments', commentController.getAll);
routeComment.post('/create', commentController.create);
routeComment.put('/update/:id', commentController.update);
routeComment.delete('/delete/:id', commentController.delete);

module.exports = routeComment;
