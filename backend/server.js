import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleWare.js';
import connectMongoDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();

// Connect to DB
connectMongoDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

// ERROR MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is listening in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
