// Libraries
const express = require('express');

// Load models
const {Product} = require('../../models/products');

const router = express.Router();

// route:   '/api/products' (GET)
// desc:    Get products from DB
// access:  PUBLIC
router.get('/', (req, res) => {
    Product.find().then(products => {
        if (!products) return res.status(404).json({message: 'Not found products!'});
        return res.status(200).json(products);
    }).catch(console.log);
});

// route:   'api/products' (POST)
// desc:    Create a new product
// access:  PUBLIC
router.post('/', (req, res) => {
    const { name, price, by, link } = req.body;
    const newProduct = new Product({name, price, by, link});
    newProduct.save().then(newProduct => {
        if (!newProduct) return res.status(401).json({message: 'Unauthorized product!'});
        return res.status(200).json(newProduct);
    }).catch(console.log);
}) 

module.exports = router;