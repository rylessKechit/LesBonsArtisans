const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// Getting All
router.get('/', async(req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// Getting One
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product)
});
// Creating One
router.post('/', async(req, res) => {
    const product = new Product({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        available: req.body.available
    });

    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
// Updating One
router.patch('/:id', getProduct, async(req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name
    }
    if (req.body.type != null) {
        res.product.type = req.body.type
    }
    if (req.body.price != null) {
        res.product.price = req.body.price
    }
    if (req.body.rating != null) {
        res.product.rating = req.body.rating
    }
    if (req.body.warranty_years != null) {
        res.product.warranty_years = req.body.warranty_years
    }
    if (req.body.available != null) {
        res.product.available = req.body.available
    }
    try {
        const updatedProduct = await res.product.save()
        res.json(updatedProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
// Deleting One
router.delete('/:id', getProduct, async(req, res) => {
    try {
        await res.product.remove()
        res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

async function getProduct(req, res, next) {
    let product

    try {
        product = await Product.findById(req.params.id)
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.product = product
    next()
}

module.exports = router