const sequelize = require('./config/db'); // Adjust path as necessary
const Product = require('./models/product');
const Basket = require('./models/basket');
const BasketItem = require('./models/basketItem');
const User = require('./models/user');
const price = require('./models/price')

// Ensure all models are loaded
sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
}).catch(error => {
    console.error('Error creating database & tables:', error);
});
