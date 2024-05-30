const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./user');
const Product = require('./product');
const Price = require('./price');
const Basket = require('./basket');
const BasketItem = require('./basketItem');

// Define associations
User.hasMany(Basket);
Basket.belongsTo(User);

Product.hasMany(Price, { foreignKey: 'productId', as: 'Prices' }); // تعريف العلاقة مرة واحدة فقط
Price.belongsTo(Product, { foreignKey: 'productId' });

Basket.hasMany(BasketItem);
BasketItem.belongsTo(Basket);

Product.hasMany(BasketItem);
BasketItem.belongsTo(Product);

const db = {
    Sequelize,
    sequelize,
    User,
    Product,
    Price,
    Basket,
    BasketItem
};

module.exports = db;
