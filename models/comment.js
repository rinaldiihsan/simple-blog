'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.BlogPost, {
        foreignKey: 'postId',
      });
      Comment.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  Comment.init(
    {
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
