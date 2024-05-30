const express = require('express');
const router = express.Router();
const basketController = require('../controllers/basketController');

router.get('/basket/:basketId/items', basketController.getBasketItems);
router.post('/basket/items', basketController.addItemToBasket);
router.delete('/basket/:basketId/items/:productId', basketController.removeItemFromBasket);
router.put('/basket/:basketId/items/:productId', basketController.updateItemQuantity);

module.exports = router;
