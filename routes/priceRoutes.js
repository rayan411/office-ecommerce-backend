const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController');

router.get('/prices', priceController.getAllPrices);
router.get('/prices/:productId', priceController.getPricesByProductId);
router.put('/prices/:priceId', priceController.updatePrice);
router.post('/prices', priceController.addPrices); // تحديث Route لإضافة أسعار متعددة

module.exports = router;
