const { Price } = require('../models');

// Get all prices
exports.getAllPrices = async (req, res) => {
    try {
        const prices = await Price.findAll();
        res.status(200).json(prices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get prices for a specific product
exports.getPricesByProductId = async (req, res) => {
    try {
        const prices = await Price.findAll({ where: { productId: req.params.productId } });
        if (prices.length > 0) {
            res.status(200).json(prices);
        } else {
            res.status(404).json({ message: 'Prices not found for the specified product' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a specific price
exports.updatePrice = async (req, res) => {
    try {
        const price = await Price.findOne({ where: { id: req.params.priceId } });
        if (price) {
            await price.update(req.body);
            res.status(200).json(price);
        } else {
            res.status(404).json({ message: 'Price not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Add new prices for a specific product
exports.addPrices = async (req, res) => {
    try {
        const { productId, prices } = req.body;

        // Loop through the prices array and create new Price records
        const newPrices = await Promise.all(prices.map(async (price) => {
            return await Price.create({
                productId: productId,
                priceDescription: price.description,
                priceValue: price.value,
            });
        }));

        res.status(201).json(newPrices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
