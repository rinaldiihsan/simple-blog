'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    static associate(models) {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      BlogPost.hasMany(models.Comment, {
        foreignKey: 'postId',
      });
    }
  }
  BlogPost.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'BlogPost',
    }
  );
  return BlogPost;
};
