'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.paket)
      order.belongsTo(models.user)
    }
  }
  order.init({
    userId: {
      type:DataTypes.INTEGER,
      validate: {
        notEmpty: true
        }
    },
    paketId: {
      type:DataTypes.INTEGER,
      validate: {
        notEmpty: true
        }
    },
    status: {
      type:DataTypes.BOOLEAN,
      validate: {
        notEmpty: true
        }
    },
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};