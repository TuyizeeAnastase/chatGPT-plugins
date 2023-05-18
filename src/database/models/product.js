module.exports = (sequelize, DataTypes) => {
  const Product=sequelize.define("Product",{
    name: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    cost: DataTypes.INTEGER
  }, {});
  return Product;
};