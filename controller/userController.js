const { User } = require('../models');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();
const userController = {};

userController.index = async (req, res) => {
  res.json({
    message: 'Hello userController',
  });
};

userController.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = await User.findOne({
      where: {
        username: {
          [Op.like]: `%${username}%`,
        },
      },
    });
    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (comparePassword) {
      const payloadToken = {
        id: findUser.id,
        username: findUser.username,
        email: findUser.email,
      };
      const token = jwt.sign(payloadToken, process.env.PRIVATE_KEY, {
        algorithm: 'HS256',
        expiresIn: '1h',
      });
      return res.status(200).json({
        data: {
          message: 'Login success!',
          token: token,
        },
      });
    } else {
      return res.status(401).json({
        data: {
          message: 'Failed Login! Username and Password not match!',
        },
      });
    }
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        data: {
          message: 'Failed Login!',
          token: error.message,
        },
      });
    } else {
      return res.status(401).json({
        data: {
          message: 'Failed Login!',
          token: error.message,
        },
      });
    }
  }
};

userController.register = async (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  const generateSalt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, generateSalt);

  try {
    const createUser = await User.create({
      username: username,
      email: email,
      password: hashPassword,
      passwordSalt: generateSalt,
    });
    return res.status(201).json({
      data: {
        message: 'Register success!',
      },
    });
  } catch (error) {
    return res.status(400).json({
      data: {
        message: error.message,
      },
    });
  }
};

module.exports = userController;
