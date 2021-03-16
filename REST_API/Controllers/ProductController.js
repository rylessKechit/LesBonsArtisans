const express = require('express')
const Product = require('../models/productModel')

/* ---------------
Return informations of all Products inside the Database's table if worked and
specific error message if didnt, in json
--------------- */

exports.get_all_product = async(req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

/* ---------------
Return informations of specific Product by given his {id} if worked and
specific error message if didnt, in json
--------------- */

exports.get_product_by_id = (req, res) => {
    res.json(res.product)
}

/* ---------------
Create a Product and return informations of new Product if worked and
specific error message if didnt, in json
--------------- */

exports.create_product = async(req, res) => {

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
}

/* ---------------
Update a specific Product given by {id} and return informations of updated Product if worked and
specific error message if didnt, in json
--------------- */

exports.update_product_by_id = async(req, res) => {
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
}

/* ---------------
Delete a specific Product given by {id} and return informations of deleted Product if worked and
specific error message if didnt, in json
--------------- */

exports.delete_product_by_id = async(req, res) => {
    try {
        await res.product.remove()
        res.json({ message: 'Deleted Product' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}