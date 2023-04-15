'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      paket.belongsTo(models.user);
      paket.belongsToMany(models.user,{through: models.order});
    }
  }
  paket.init({
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    userId: {
      type:DataTypes.INTEGER,
      validate: {
        notEmpty: true
        }
    },
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'paket',
  });
  return paket;
};