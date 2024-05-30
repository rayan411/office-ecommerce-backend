const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const basketRoutes = require('./routes/basketRoutes');
const priceRoutes = require('./routes/priceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', basketRoutes);
app.use('/api', priceRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.sync({ force: false });  // استخدم force: true إذا كنت تريد إعادة إنشاء الجداول
});

module.exports = app;
