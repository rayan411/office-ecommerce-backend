const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path as necessary
const Basket = require('./basket'); // Adjust path as necessary
const Product = require('./product'); // Adjust path as necessary

const BasketItem = sequelize.define('BasketItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    basketId: {
        type: DataTypes.INTEGER,
        references: {
            model: Basket,
            key: 'id'
        },
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        },
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'basket_items'
});

Basket.hasMany(BasketItem, { foreignKey: 'basketId' });
BasketItem.belongsTo(Basket, { foreignKey: 'basketId' });

Product.hasMany(BasketItem, { foreignKey: 'productId' });
BasketItem.belongsTo(Product, { foreignKey: 'productId' });

module.exports = BasketItem;
