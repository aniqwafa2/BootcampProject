'use strict';
const {
  Model
} = require('sequelize');
const {encrypt} = require('../helpers/bycript')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.detail_user);
      user.hasMany(models.paket);
      user.belongsToMany(models.paket,{through: models.order});
    }
  }
  user.init({
    nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
        }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
        }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
        }
    },
    role: DataTypes.STRING
  }, {
    hooks:{
      afterValidate: (user) => {
        user.password = encrypt(user.password);
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};