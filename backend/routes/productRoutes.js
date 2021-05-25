import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

// GET ALL PRODUCTS
router.route('/').get(getProducts);

// GET ONE PRODUCT BY ID
router.route('/:id').get(getProductById);

export default router;
