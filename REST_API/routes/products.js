const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')

const ProductsController = require('../Controllers/ProductController');
const product = require('../models/productModel');
const getProductMiddleware = require('../Middlewares/get-product')

/* ---------------
      ROUTES
--------------- */

// Getting All
router.get('/', ProductsController.get_all_product);

// Getting One
router.get('/:id', getProductMiddleware.getProduct, ProductsController.get_product_by_id);

// Creating One
router.post('/', ProductsController.create_product);

// Updating One
router.patch('/:id', getProductMiddleware.getProduct, ProductsController.update_product_by_id);

// Deleting One
router.delete('/:id', getProductMiddleware.getProduct, ProductsController.delete_product_by_id);

module.exports = router