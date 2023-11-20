const { Comment, BlogPost, User } = require('../models');
const commentController = {};

commentController.index = async (req, res) => {
  res.json({
    message: 'Hello commentController',
  });
};

commentController.create = async (req, res) => {
  const { postId, userId, comment } = req.body;
  try {
    const getBlogPost = await BlogPost.findOne({
      where: {
        id: postId,
      },
    });
    const getUser = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (getUser === null || getBlogPost === null) {
      throw Error('User not found!');
    } else {
      const createComment = await Comment.create({
        postId: postId,
        userId: userId,
        comment: comment,
      });
      return res.status(201).json({
        message: 'Create comment success!',
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

commentController.getAll = async (req, res) => {
  const { postId } = req.params;
  try {
    const getAllComment = await Comment.findAll({
      where: {
        postId: postId,
      },
      include: [
        {
          model: BlogPost,
          attributes: ['title'],
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (getAllComment === null) {
      return res.status(404).json({
        message: 'No comments found for this blog post.',
      });
    }

    const commentsData = getAllComment.map((comment) => ({
      id: comment.id,
      comment: comment.comment,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }));

    const responseData = {
      postId: getAllComment[0].postId,
      title: getAllComment[0].BlogPost.title,
      userId: getAllComment[0].userId,
      username: getAllComment[0].User.username,
      comments: commentsData,
    };

    return res.status(200).json({
      data: responseData,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

commentController.update = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  try {
    const getComment = await Comment.findOne({
      where: {
        id: id,
      },
    });
    if (getComment === null) {
      throw Error('Comment not found!');
    } else {
      const updateComment = await Comment.update(
        {
          comment: comment,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({
        message: 'Update comment success!',
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

commentController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: id,
      },
    });
    if (deleteComment === null) {
      throw Error('Comment not found!');
    } else {
      return res.status(200).json({
        message: 'Delete comment success!',
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = commentController;
