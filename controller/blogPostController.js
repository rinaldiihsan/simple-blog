const { User, BlogPost } = require('../models');

const blogPostController = {};

blogPostController.index = async (req, res) => {
  res.json({
    message: 'Hello blogPostController',
  });
};

blogPostController.create = async (req, res) => {
  const { title, body, userId } = req.body;
  try {
    const getUser = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (getUser === null) {
      throw Error('User not found!');
    } else {
      const createBlogPost = await BlogPost.create({
        title: title,
        body: body,
        userId: userId,
      });
      return res.status(201).json({
        message: 'Create blog post success!',
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

blogPostController.getAll = async (req, res) => {
  try {
    const getAllBlogPost = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'email'],
        },
      ],
    });

    const blogData = getAllBlogPost.map((blogPost) => ({
      id: blogPost.id,
      title: blogPost.title,
      body: blogPost.body,
      createdAt: blogPost.createdAt,
      updatedAt: blogPost.updatedAt,
    }));

    const responseData = {
      userId: getAllBlogPost[0].userId,
      username: getAllBlogPost[0].User.username,
      email: getAllBlogPost[0].User.email,
      blogPosts: blogData,
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

blogPostController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getBlogPostById = await BlogPost.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: User,
          attributes: ['username', 'email'],
        },
      ],
    });

    const responseData = {
      userId: getBlogPostById.userId,
      username: getBlogPostById.User.username,
      email: getBlogPostById.User.email,
      blogPosts: {
        id: getBlogPostById.id,
        title: getBlogPostById.title,
        body: getBlogPostById.body,
        createdAt: getBlogPostById.createdAt,
        updatedAt: getBlogPostById.updatedAt,
      },
    };

    if (getBlogPostById === null) {
      throw Error('Blog post not found!');
    } else {
      return res.status(200).json({
        data: responseData,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

blogPostController.update = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  try {
    const getUser = await User.findOne({
      where: {
        id: id,
      },
    });
    if (getUser === null) {
      throw Error('User not found!');
    } else {
      const updateBlogPost = await BlogPost.update(
        {
          title: title,
          body: body,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({
        message: 'Update blog post success!',
      });
    }
  } catch (error) {}
};

blogPostController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBlogPost = await BlogPost.destroy({
      where: {
        id: id,
      },
    });
    if (deleteBlogPost === null) {
      throw Error('Blog post not found!');
    } else {
      return res.status(200).json({
        message: 'Delete blog post success!',
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = blogPostController;
