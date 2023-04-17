'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detail_user.belongsTo(models.user);
    }
  }
  detail_user.init({
    contact: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId:{ 
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
        }
    }
  }, {
    sequelize,
    modelName: 'detail_user',
  });
  return detail_user;
};