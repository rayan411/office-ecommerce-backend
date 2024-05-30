const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.get('/users/:userId/baskets', userController.getUserBaskets);

module.exports = router;
