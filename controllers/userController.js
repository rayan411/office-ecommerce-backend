const { User, Basket } = require('../models');

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, name, officeNumber } = req.body;
        console.log(req.body); // تسجيل البيانات المستلمة
        const user = await User.create({ username, email, password, name, officeNumber });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserBaskets = async (req, res) => {
    try {
        const { userId } = req.params;
        const baskets = await Basket.findAll({ where: { userId } });
        res.status(200).json(baskets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
