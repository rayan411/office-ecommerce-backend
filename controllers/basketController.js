const { Basket, BasketItem } = require('../models');

// Get all items in the basket
exports.getBasketItems = async (req, res) => {
    try {
        const basketItems = await BasketItem.findAll({ where: { basketId: req.params.basketId } });
        res.status(200).json(basketItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add an item to the basket
exports.addItemToBasket = async (req, res) => {
    try {
        const newBasketItem = await BasketItem.create(req.body);
        res.status(201).json(newBasketItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remove an item from the basket
exports.removeItemFromBasket = async (req, res) => {
    try {
        const basketItem = await BasketItem.findOne({ where: { basketId: req.params.basketId, productId: req.params.productId } });
        if (basketItem) {
            await basketItem.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Basket item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update quantity of an item in the basket
exports.updateItemQuantity = async (req, res) => {
    try {
        const basketItem = await BasketItem.findOne({ where: { basketId: req.params.basketId, productId: req.params.productId } });
        if (basketItem) {
            await basketItem.update(req.body);
            res.status(200).json(basketItem);
        } else {
            res.status(404).json({ message: 'Basket item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
