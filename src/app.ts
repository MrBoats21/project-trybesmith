import express from 'express';

import productRoutes from './routes/product.router';

import userRoutes from './routes/user.router';

import orderRoutes from './routes/orders.router';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/users', userRoutes);

app.use('/orders', orderRoutes);

export default app;