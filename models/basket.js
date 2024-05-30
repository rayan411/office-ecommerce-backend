const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path as necessary

const Basket = sequelize.define('Basket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'baskets'
});

module.exports = Basket;
