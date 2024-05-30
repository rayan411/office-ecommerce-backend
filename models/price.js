const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product');

class Price extends Model {}

Price.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    priceDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priceValue: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Price',
});

// لا حاجة لتعريف العلاقة هنا إذا كانت معرفة في index.js
// Product.hasMany(Price, { foreignKey: 'productId', as: 'Prices' });
Price.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Price;
